---
title: 镜像站后端配置记录
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["blog"]
---
# 镜像站后端配置记录

## LXC 容器方案

### 为什么选择 LXC？

无论是搭建镜像站，还是其他服务，首要的任务是实现功能，其次是保证稳定，有余力则追求美观。

因此，在单一 Linux 发行版上部署所有服务是十分不明智的做法。例如，激进的发行版提供更多、更新的软件包，而保守的发行版则具有更好的稳定性。此外，在保守发行版上编译安装新程序的做法则显得十分愚蠢——应尽可能选择通过发行版的官方仓库来部署服务，否则稳定性就是无稽之谈。容器级虚拟化就是用来调和两者矛盾的方案。

为此，我们选择了基于 LXC 的容器方案。LXC 在 2008 年诞生，目的是在共享主机内核的基础上，提供虚拟容器，每个容器运行一个完整的操作系统。与 Docker 相比，一个容器不必仅运行单一服务，因此可根据功能划分容器，便于管理；LXC 主机非常“干净”，除了提供 LXC 管理工具及网络外，无需参与任何具体的任务逻辑，因此具有更强的健壮性——尤其是这台服务器没有 IPMI、没有控制台，唯一的控制方式就是 SSH 时，主机的稳定性就更显得重要了。

### LXC 主机应该选用什么发行版？

对于 LXC 主机而言，稳定是第一要素。RHEL/CentOS 7 虽然在稳定性方面广受赞誉，但 Linux 3.10 内核与 LXC 1.0 工具集则显得力不从心。理论上，你可以用低版本内核运行原本为高版本内核准备的发行版容器，但实际应用中会导致诸多的小问题，如容器无法开机、DNS 解析发生阻塞等。在经过初步尝试后，RHEL/CentOS 7 确实无法胜任 LXC 主机的角色，被首先排除。CentOS 8 的发布遥遥无期，不做考虑。

由于 LXC 主机要做的事情很简单，Arch Linux 或许可以保证稳定运行。但过于激进的发行版应放在最后考虑。

作为老牌 Linux 发行版，Debian 拥有不输 RHEL/CentOS 的稳定性，同时内核较新，是容器级虚拟化的理想选择。截至本文编写时（2019 年 5 月），稳定版对应了搭载 4.9 内核的 Debian 9，而搭载了 4.19 内核的 Debian 10 刚刚进入 RC 阶段，软件包版本已基本冻结。不要因为“非正式版”就将 Debian 10 排除在外，这条可能对于其他发行版适用，但 Debian 即使是 unstable 版本也有不输 Ubuntu 的稳定性。

由于 4.9 内核搭配高于 4.9 内核的发行版容器时仍会出现 DNS 解析阻塞问题，因此即使 Debian 10 正式发布还需要数月，我们仍然选择了 Debian 10。

### LXC 容器应该选用什么发行版？

容器的发行版主要根据要实现的功能决定。例如，对于 HTTP 服务器，考虑到 TLS 1.3，我们选择了 Debian 10。同步程序以 Python 脚本、rsync 等为主，选择范围较广，我们选择了 Debian 10。对于前端代码，我们选择了 Arch Linux，以便使用最新版的 nodejs 和 yarn 等工具。重复一遍，官方源的软件是最稳定的，其次是可靠的第三方源，而编译安装则是最愚蠢的行为——但 Docker 用户请忽略这句话。

### LXC 主机的主要配置过程

#### 安装 Debian 10

##### 获取镜像

截至本文编写时（2019 年 5 月），Debian 10 尚未正式发行，因此 Debian 9 的镜像更易获取。虽然每周构建版本的 Debian 10 依然可用，但受限于下载速度，我们选择了先安装 Debian 9 再升级到 Debian 10 的做法。

注：不知出于何种原因，我们的虚拟机提供方仅愿意预装 CentOS 7——巧妇难为无米之炊。在仅有 SSH 的前提下，我们选择了对最开头 1GiB 的 boot 分区解除挂载，然后将预先制作好的磁盘镜像 dd 到硬盘开头的做法来更换操作系统。但出于方便读者的考虑，在下文的叙述中，仍假设可以直接从光盘安装 Debian。

将 Debian 的光盘插入服务器，进入安装界面。

##### 硬盘分区

对系统磁盘分区时，根据服务器是否支持 UEFI 启动，选择 GUID 分区表（GPT）或 MBR 分区表。

对于 GUID 分区表（GPT），首先创建一个 500 MB 左右的 EFI 系统分区（ESP），格式化为 FAT32（唯一被 UEFI 标准支持的文件系统），挂载到 `/boot/efi`。然后将剩余的空间全部分配给一个主分区，挂载到 `/`。

对于 MBR 分区表，则可选择将全部的空间分配给一个主分区（设为活动分区），挂载到 `/`。也可选择创建一个 500 MB 左右的主分区（设为活动分区），不格式化，然后将剩余的空间全部分配给一个主分区，挂载到 `/`（不是活动分区）。MBR 分区表的 `扩展分区` `逻辑分区`的设计是极其糟糕的，因此只需要使用主分区即可。

注意，均不分配 SWAP 分区。SWAP 分区的优势是保证交换空间在存储设备上的连续性，以便加速访问。然而，对于固态硬盘而言，位置连续没有意义。即便是对于机械硬盘，由于 SWAP 文件一般是在分区基本为空的情况下创建的，只要不改变 SWAP 文件的大小——SWAP 分区本来就做不到这一点——也不会产生碎片。Ubuntu 从 18.04 桌面版开始，默认使用 SWAP 文件代替了 SWAP 分区。因此，在大多数场景下，应使用 SWAP 文件而不是 SWAP 分区。

对于数据磁盘，一律使用 GUID 分区表。牢记，好习惯是，在一台机器上最多只有一个磁盘是 MBR 分区表，即在服务器不支持 UEFI 启动时系统盘可选择 MBR。除了系统盘外的其他磁盘一律不要使用 MBR 分区表，否则无论是对引导还是分区管理都没有好处。

##### 组件选择

不要选择桌面环境。LXC 主机的软件包应尽可能地少，软件包越少，系统越稳定，此外也有利于减少攻击面。记得选择 SSH Server，或者也可以等到后期再安装。

##### 安装 grub 引导器

Debian 安装程序会提示你该将 grub 安装至何处。对于 MBR 分区表，应将 Grub 安装在系统磁盘的活动分区上。（一个 MBR 磁盘上只能有一个或零个活动分区，且活动分区一定是主分区。）对于 GUID 分区表，将其安装在 `EFI 系统分区`（ESP）即可。

##### 升级到 Debian 10

Debian 的大版本升级很简单，只要将 `/etc/apt/sources.list` 中的发行版代号由 Debian 9 的 `stretch` 替换为 Debian 10 的 `buster`，然后执行 `apt update && apt dist-upgrade` 即可。中途要注意文件替换的问题，不要无脑 yes，以免配置文件被新版缺省配置文件覆盖。

##### 安装基本软件

安装以下基本软件。不再单独强调。

```shell
apt install screen tmux wget nano curl sudo
```

#### 网络配置

##### 更换网络管理器为 systemd-networkd

systemd-networkd 是主要适用于有线网络的网络管理器，与 NetworkManager 相比更简单，与传统的网络配置脚本相比更现代化。我们推荐在服务器上使用 systemd-networkd，以便为 LXC 容器提供更简单的网络设置。

###### 创建配置文件

`/etc/systemd/network` 是 systemd-networkd 的配置文件所在目录。创建一个 `10-wired.network` 文件，内容为：

```ini
[Match]
Name=eth0

[Network]
DHCP=no
Address=10.102.7.58/23
Gateway=10.102.7.254
DNS=114.114.114.114
```

一目了然，无需多言。

###### 禁用 Debian 默认的网络管理器

```bash
mv /etc/network/interfaces /etc/network/interfaces.bak
systemctl stop networking # 注意，如果你没有做完上一行就执行了这一行，而且服务器只能通过远程操作，那么你完蛋了
systemctl disable networking
```

根据安装时选择的软件包不同，NetworkManager 可能也被安装。卸载之。

```bash
apt remove network-manager
```

###### 启动 systemd-networkd

```shell
systemctl start systemd-networkd
systemctl enable systemd-networkd
```

###### 重启系统以验证设置

```bash
systemctl reboot
```

注意，如果配置不正确，SSH 将无法连接。请确保有备用手段可以连接主机。

在极端情况下，可考虑手动为其分配 IP 地址使其重新联网。假设网络接口名称为 `eth0`，以下命令会相当有用。

```bash
ip a # 查看 IP 地址
ip r # 查看路由表
ip n # 查看 ARP/NDP
ip a add 192.168.0.2/24 dev eth0 # 为 eth0 分配指定的静态 IP
ip r add default via 192.168.0.1 # 指定默认路由
rm /etc/resolv.conf ; echo "nameserver 8.8.8.8" > /etc/resolv.conf #设置 DNS
```

###### 使用 systemd-resolved

使用与 systemd-networkd 配套的 systemd-resolved 以管理 DNS 地址。

根据 Debian 版本不同，可能需要手动安装 systemd-resolved 软件包，也可能已经内置在系统中。

```bash
apt install systemd-resolved
```

删除 resolvconf 软件包。我们不使用它管理 DNS 地址。

```bash
apt remove resolvconf
```

注意，为了避免与后面使用的 dnsmasq 冲突，需要禁用 systemd-networkd 的 DNS 缓存功能。此外，由于众所周知的原因，不能强制使用 DNSSEC。

修改 `/etc/systemd/resolved.conf` 文件，设置以下选项：

```ini
[Resolve]
Cache=no
DNSStubListener=no
DNSSEC=allow-downgrade
```

启动 systemd-resolved，并配置好 DNS。

```bash
systemctl enable systemd-resolved
systemctl start systemd-resolved
rm /etc/resolv.conf
ln -s /run/systemd/resolve/resolv.conf /etc/resolv.conf
```

###### 为 LXC 提供网桥和 NAT

创建 `20-lxc-bridge.netdev` 文件，内容如下：

```ini
[NetDev]
Name=lxc-bridge
Kind=bridge
```

创建 `20-lxc-bridge.network`文件，内容如下：

```ini
[Match]
Name=lxc-bridge

[Network]
Address=192.168.0.1/24
IPForward=ipv4
IPMasquerade=yes
DHCPServer=yes

[DHCPServer]
EmitDNS=yes
DNS=192.168.0.1
PoolOffset=100
PoolSize=100
```

创建`20-lxc-dummy.netdev`文件，内容如下：

```ini
[NetDev]
Name=lxc-dummy
Kind=dummy
```

创建`20-lxc-dummy.network`文件，内容如下：

```ini
[Match]
Name=lxc-dummy

[Network]
Bridge=lxc-bridge
```

如此，名为 `lxc-bridge` 的网桥如同路由器的 LAN 口，接入的设备可自动获取 IP 并上网。

注意，这里我们将 `192.168.0.1` 作为了 DNS 服务器，但此时还没有架设它。一会儿将解决这个问题。

由于 LXC 容器要提供服务，端口转发是必备的，因此防火墙是必不可少的。

##### 安装 firewalld 防火墙

Debian 10 已将 iptables 更换为 nftables。但我们并不手动配置这些 *tables，而是使用 firewalld 作为防火墙。firewalld 可以认为是 *tables 的前端。

注意，一旦安装了 firewalld，之前在 systemd-networkd 中设置的 NAT 转发会作废，而 DHCP 服务也会被阻断。一会儿将解决这些问题。

```bash
apt install firewalld
systemctl enable firewalld
systemctl start firewalld
```

缺省情况下，SSH 服务已被放行。

###### 将后端切换为 nftables

依据发行版不同，firewalld 可能使用 iptables 或 nftables 做后端。推荐使用 nftables 做后端。

nftables 可能没有被安装。首先安装。

```bash
apt install nftables
```

打开 `/etc/firewalld/firewalld.conf` 文件，找到并设置以下选项。

```ini
# FirewallBackend
# Selects the firewall backend implementation.
# Choices are:
#	- nftables (default)
#	- iptables (iptables, ip6tables, ebtables and ipset)
FirewallBackend=nftables
```

如果之前设置为了 iptables，将其改为 nftables。修改后，可能需要重启主机才能完全生效。

在 Debian 10 的软件包中，firewalld 依然依赖 iptables。不过，修改了配置文件并重启后，iptables 不做任何用途使用。`iptables -L` 的输出结果应该是空。不需要管它。

###### 配置外网

将外网接口 `eth0` 接入 external 区域。此区域将作为 NAT 的出口，以及端口转发。

```bash
firewall-cmd --zone=external --add-interface=eth0 --permanent
firewall-cmd --zone=external --add-service=ssh --permanent # 这条应该默认存在，不过再写一次

firewall-cmd --zone=external --add-masquerade --permanent
firewall-cmd --zone=external --add-forward-port=port=9002:proto=tcp:toport=22:toaddr=192.168.0.2 --permanent
firewall-cmd --zone=external --add-forward-port=port=80:proto=tcp:toport=80:toaddr=192.168.0.2 --permanent
firewall-cmd --zone=external --add-forward-port=port=443:proto=tcp:toport=443:toaddr=192.168.0.2 --permanent

firewall-cmd --reload
```

注意，因为 firewalld 服务已经开启，如果这里没有设置 `--add-masquerade`，systemd-networkd 中设置的 `IPMasquerade=yes` 无效。另外，不要搞混在哪里设置 masquerade。对于 firewalld，在 NAT 的出口设置 masquerade；对于 systemd-networkd，在 NAT 的入口设置 masquerade。

###### 配置内网

将内网 `lxc-bridge` 接入 internal 区域。此区域将被配置为类似于路由器的 LAN。

```bash
firewall-cmd --zone=internal --add-interface=lxc-bridge --permanent
firewall-cmd --zone=internal --add-service=dhcp --permanent
firewall-cmd --zone=internal --add-service=dns --permanent

firewall-cmd --reload
```

###### 重要提示

必须为 `lxc-bridge` 分配到一个不同于 external 区域之外的区域，而绝不可以接入到 external 区域（因为我们在 external 区域上设置了 masquerade）。

如果主机上还有其他网卡，请根据网卡的角色手动为其指定一个区域。默认情况下，未指定区域的网卡将被接入 public 区域。作为外网使用的网卡应接入之前配置好的 external 区域。

##### 安装 DNS 服务器

这里的 DNS 服务器是为了缓存 DNS 解析结果，因此使用 dnsmasq。

```bash
apt install dnsmasq
```

编辑 `/etc/dnsmasq.conf` 文件，内容改为：

```ini
no-resolv
server=114.114.114.114
interface=lxc-bridge
```

如果希望使用 `/etc/resolv.conf` 的 DNS 服务器设置，则文件内容只需要这一行：

```ini
interface=lxc-bridge
```

启动 dnsmasq 服务。注意，如果启动失败，使用 `ss -unlp` 命令检查是否有其他程序占用了 UDP 53 端口。

```bash
systemctl enable dnsmasq
systemctl start dnsmasq
```

#### 使用 LXC 3.0

Debian 9 搭配的是 LXC 2.0，而 Debian 10 搭配的是 LXC 3.0。

```bash
apt install lxc
```

##### 创建一个名为 NAME 的容器

```bash
lxc-create -n NAME -t download -- --server mirrors.tuna.tsinghua.edu.cn/lxc-images --keyserver=hkp://keyserver.ubuntu.com:80
```

2019 年 5 月注：这里使用了清华大学开源软件镜像站作为 lxc-images 的上游仓库。但是截至目前，清华大学开源软件镜像站的 lxc-images 存在严重的索引提前于内容同步完成的情况，因此如果报错 404，请将 `--server mirrors.tuna.tsinghua.edu.cn/lxc-images` 部分删除，使用官方源。

2019 年 12 月注：截至目前，清华大学开源软件镜像站的 lxc-images 依然存在严重的索引提前于内容同步完成的情况。山东大学镜像站已提供 lxc-images 的[可靠镜像](/guide/lxc-images.html)。可改为以下命令。

```bash
lxc-create -n NAME -t download -- --server mirrors.sdu.edu.cn/lxc-images --no-validate
```

##### 启停容器、进入容器

```bash
lxc-start -n NAME
lxc-attach -n NAME
```

注意，如果你使用的是 LXC 1.0，这里的命令有所不同，不再赘述。

进入容器后，可以发现未分配网络。因此，按 Ctrl+D 退出容器，然后用以下命令建议容器退出。

```bash
lxc-stop -n NAME
```

##### 为容器分配网络、共享文件夹、自动启动

编辑 `/var/lib/lxc/NAME/config` 文件，最后两行应该像这样。（早期版本的 LXC 与此略有不同。）

```ini
# Network configuration
lxc.net.0.type = empty
```

将其改为

```ini
# Network configuration
lxc.net.0.type = veth
lxc.net.0.link = lxc-bridge
lxc.net.0.flags = up
lxc.net.0.hwaddr = 00:16:3e:xx:xx:xx

# Autostart
lxc.start.auto = 1
lxc.start.delay = 0
lxc.start.order = 0

# Mount
lxc.mount.entry = /path/to/folder1 path/to/folder2 none bind 0 0
```

即可实现相应的配置。

请注意挂载文件夹的写法。这将把主机的 `/path/to/folder1` 文件夹与容器内的 `/path/to/folder2` 文件夹联通。容器内该文件夹必须事先存在，否则会报错。换句话说，记得在主机事先创建好 `/var/lib/lxc/NAME/rootfs/path/to/folder2` 文件夹。

##### 示例：容器内开启 SSH

首先，尽管主机已经开启了 DHCP 服务，应当使用静态 IP 来配置容器，这样才能和之前在 firewalld 中配置好的端口转发规则一致。假设之前在主机内设置了 `firewall-cmd --zone=public --add-forward-port=port=9002:proto=tcp:toport=22:toaddr=192.168.0.2`，则将容器内的 IP 设置为 `192.168.0.2`

后，直接安装 SSH 服务器即可从主机的 9002 端口访问 SSH。同样，在容器内推荐使用 systemd-networkd 来配置网络。

#### LXC 主机的其他配置

以下配置与 LXC 方案无关，仅为推荐。

##### 安装 molly-guard

此软件包可避免人为疏忽而意外关闭或重启宿主服务器。使用 `lxc-attach` 在主机上操作容器时，以为在操作容器实际上却操作了主机是很常见的失误。

```shell
apt install molly-guard
```

可顺便将主机名更改为有意义的名称，如 `lxc-host`。

```bash
hostnamectl set-hostname lxc-host
```

##### 安装 haveged

虚拟机更容易出现熵不足的问题。比如，是否开机后 SSH 连接一直超时，然后从控制台登录后 SSH 连接又突然好了？这种情况很可能是熵不足。haveged 通过使用质量较低的伪随机数填充系统的熵池，达到加速 `/dev/random` 的目的，从而避免熵不足的问题。仅当安全不是首要考虑因素时，才应使用该软件，否则应将硬件随机数发生器直通到虚拟机内部。

```shell
apt install haveged
systemctl enable haveged
systemctl start haveged
```

注意，提供随机数是内核的事情，因此只能在主机上做这个事情。

##### 创建 SWAP 文件

1. 假设 SWAP 文件的大小为 10 GiB。创建一个大小为 10GiB 的全零文件。

  ```sh
  dd if=/dev/zero of=/data/swapfile bs=1M count=10240
  ```

  *对于 XFS 或 F2FS 文件系统，请确保创建全零文件，而不是使用 fallocate 或者 dd 等创建稀疏文件。不然可能无法 mkswap 和 swapon。见 [Bug 1129205 - fallocate to create swap file creates a file with holes](https://bugzilla.redhat.com/show_bug.cgi?id=1129205#c3)。

  *如非必要，不要随便使用 dd 等命令生成空的大文件。尽可能产生稀疏文件以节约时间和保护 SSD 寿命。本处为不得已而为之。*

2. 确保该文件的所有者和组均为 root。

3. 将其权限置为 600。

  ```sh
  chmod 600 /data/swapfile
  ```

4. 格式化并临时启用该交换文件。

  ```sh
  mkswap /data/swapfile && swapon /data/swapfile
  ```

5. 确保 SWAP 生效。检查以下命令返回的结果中的 Swap 一行的值是否增加了。

  ```sh
  free -h
  ```

6. 修改 /etc/fstab。在最后增加一行

  ```sh
  /data/swapfile none swap defaults 0 0
  ```

  *确保 /data 的挂载在该行之前出现。*

7. 重启系统，再用 free 命令查看 SWAP 是否生效。

  ```sh
  systemctl reboot
  free -h
  ```

##### 加速 SSH 登录

默认配置的 SSH 服务会对客户端 IP 做一些检查，如 DNS 反向解析、GSS 认证，非常耗时。建议关闭。
打开 `/etc/ssh/sshd_config` 文件，找到并设置以下选项。
```
UseDNS no
GSSAPIAuthentication no
```

重启 SSH 服务。
```sh
systemctl restart sshd
```


## 镜像同步方案

### 工具选择

镜像站同步的内容大致分为两类：一类是完全同步的仓库，如 Arch Linux 源；一类是需要选择性同步的仓库，如 Debian、Ubuntu 源等，受镜像站容量限制，只同步 amd64 指令集的二进制程序。

对于前者，rsync 通常是最合适的选择。

对于后者，我们选择并改进了 apt-mirror 工具，该工具提供了选择性同步功能，并实现了同步的原子性。

### 原子性

仓库由索引文件和资源文件组成，这些文件需要保持一致。

镜像站必须达到如下目标。

| 镜像站的状态   | 版本1 | 版本1升级到版本2 | 版本2 | 版本2升级到版本3 | 版本3 |
| -------------- | ----- | ---------------- | ----- | ---------------- | ----- |
| 用户访问的内容 | 版本1 | 版本1            | 版本2 | 版本2            | 版本3 |

即，进行同步时，镜像站需要保留新旧两个版本的内容，并在同步结束时，以非常快的速度完成版本切换。只有这样，才能保证用户使用时不会出错。想象一下，一本书，前一半页码是第1版第1次印刷的内容，后一半则变成了第1版第2次印刷的内容，这样的书显然是无法阅读的。

apt-mirror 工具已经做好了原子性的工作。

rsync 虽然也有 `--delay-updates` `--delete-after` 这样的选项，但从实际体验来看效果并不好，因此，我们姑且认为 rsync 不具备原子性，亲自完成保证原子性的工作。

### 保证原子性

#### 引子

在这之前，我们来探究一个小问题。

假设磁盘上存在一个文件 `/path/to/file`。

不考虑文件权限等问题，只从文件内容的角度来说，以下两行 bash 命令是否等价？

```bash
> /path/to/file
```
将空内容写入到该文件中。

```
rm /path/to/file && touch /path/to/file
```
删除该文件，并重建一个空文件。



看起来，`/path/to/file` 的内容均被清空，似乎是等价的。然而，并不是这样。运行并观察下面的两段代码。

```bash
echo "foo" > /tmp/file1
ln -sf /tmp/file1 /tmp/file2
> /tmp/file2
cat /tmp/file1
```

```bash
echo "foo" > /tmp/file1
ln -sf /tmp/file1 /tmp/file2
rm /tmp/file2 && touch /tmp/file2
cat /tmp/file1
```

第一段代码，随着`file2` 被清空，`file1`  也同时被清空了。

第二段代码，`file1` 并没有被清空，因为在删除 `file2` 这个文件时，它与 `file1` 的关系被解除了。

PS: 为什么有那么多人认为“Linux 的软链接如同 Windows 的快捷方式”？谬论重复一千遍，也不能变为真理，但是还真有一群傻瓜认为这句话正确，原因仅仅是因为大家都这么说。真正正确的说法是，“Linux 的软链接如同 Windows 的软链接；Linux 的 .desktop 文件如同 Windows 的快捷方式”。

#### 冗余，似乎是必要的代价？

原子性，可用以下流程表示。



- 第一步：通过魔法，提供一个目录A的副本，记为目录B。

- 第二步：用户或者程序改动目录B。

- 第三步：通过魔法，用目录B代替目录A。



通过以上的步骤，可以保证目录A始终保持一致性。如同显卡的双缓冲机制一样，下一个场景完全准备好了，才能替换上一个场景，以避免画面闪烁的情况，也就是不一致性。

那么，如何实现步骤中的魔法呢？



**方法一：复制**

- 效率：低。浪费磁盘空间和复制的时间。

- 是否保证了原子性：是。

- 例子：git——用户可以对当前工作区的文件做任何修改，然后 commit 或者 revert。为了保证已经 commit 的数据不丢失，复制一份是必须的。



**方法二：链接**

- 方法：链接。硬链接、软链接都行。

- 效率：高。没有浪费磁盘空间，不需要复制。

- 是否保证了原子性：**否**。

- 这是一个不可行的办法。原因很简单，对目录B内文件的操作可以反过来对目录A的文件造成影响。还记得刚才的引子吗？



你还能想到其他的方法吗？

很遗憾，如果没有其他魔法的支持，复制就是唯一的办法。

#### COW (aka. 写时复制)

btrfs 和 ZFS 文件系统都支持 COW。COW 的意思是，将文件A复制到文件B时，暂时不执行复制动作，而是让两个文件共用一份存储空间。当文件A或B发生改动时，执行复制动作，将两个文件分开。

COW 就是文件系统提供的“魔法”。很显然，COW 只能由文件系统提供支持。



cp 命令提供了 COW 的支持，使用 `--reflink` 选项控制。例如：

```bash
cp --reflink=always /path/to/fileA /path/to/fileB
```

强制使用 COW 进行复制。失败则报错。

```bash
cp --reflink=auto /path/to/fileA /path/to/fileB
```

首先尝试 COW 进行复制，失败则会 fallback 到普通复制。

```bash
cp --reflink=never /path/to/fileA /path/to/fileB
```

强制使用普通复制。



将 COW 与普通复制、链接相提并论并不合适，因为 COW 和普通复制的效果一样——产生了一个与母本毫无联系的副本。在用户的眼中，COW 和普通复制是等价的。当然，在系统管理员眼中，COW 节约了时间和空间。

#### 依赖 COW 的原子性脚本

有了 COW，我们可以有效率地保证原子性了。参考如下的脚本。

```bash
#!/usr/bin/env bash

# 要保证原子性的目录路径，实际上为软链接，在脚本执行前指向 ${DIR_CURRENT}
DIR=/path/to/dir
# 当前版本的文件
DIR_CURRENT=/path/to/dir-current
# 临时目录，用来存储下一版本的文件
DIR_NEW=/path/to/dir-new

# 加锁，保证此脚本不会多次执行。此部分略去。

# 将 ${DIR_CURRENT} 复制到 ${DIR_NEW}。强制使用 COW。
cp --reflink=always "${DIR_CURRENT}" "${DIR_NEW}"

# 执行用户程序，对 ${DIR_NEW} 做任何事情。
/path/to/some/dirty/work/here "${DIR_NEW}"

# 将软链接指向 ${DIR_NEW}，即切换到新版本。
ln -sf "${DIR_NEW}" "${DIR}"

# 用 ${DIR_NEW} 取代 ${DIR_CURRENT}
rm -rf "${DIR_CURRENT}"
cp --reflink=always "${DIR_NEW}" "${DIR_CURRENT}"

# 将软链接指向 ${DIR_CURRENT}
ln -sf "${DIR_CURRENT}" "${DIR}"
rm -rf "${DIR_NEW}"

# 完成
```

在如上的脚本中，DIR 目录始终保持了原子性。目的达到了。

### systemd 的 service 和 timer

镜像站需要定期执行同步任务。我们不使用老旧的 corntab，而是将同步任务作为 systemd 的服务，并配置合适的定时器来定期执行。举例如下。

`/etc/systemd/system/example-task.service` 文件如下。

```ini
[Unit]
Description=Example Task
After=network.target
Wants=network.target

[Service]
Type=simple
ExecStart=/path/to/example/task
Restart=no

[Install]
WantedBy=multi-user.target
```

`/etc/systemd/system/example-task.timer`文件如下。

```ini
[Unit]
Description=Timer for Example Task

[Timer]
OnCalendar=*-*-* 17:00:00 UTC
Unit=example-task.service

[Install]
WantedBy=timers.target
```

如图所示的定时器会在协调世界时 17 点时启动对应的服务。如果该服务执行的太慢，以至于 24 小时后依然没有结束，那么定时器不会重复启动该服务的第二个实例。

PS: Linux 中的`格林尼治时间`指**格林尼治这个地区的时区**，而不是零时区——别忘了，英国实行夏时制。因此，为了消除歧义，无论是与他人交谈时还是在计算机世界中，永远不使用 `格林尼治时间` 一词，也不要将时区设置为 `Etc/Greenwich`。将服务器的时区设置为 `协调世界时` 即 `Etc/Utc` 是个好习惯。

不要忘了将定时器设置为开机自启，并启动之。

```bash
systemctl daemon-reload
systemctl enable example-task.timer
systemctl start example-task.timer
```

更多的配置选项可参考 systemd 的文档，不再赘述。