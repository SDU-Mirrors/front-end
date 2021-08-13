---
title:  Arch Linux 镜像源使用说明
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["guide"]
---
# Arch Linux 镜像源使用说明

编辑 `/etc/pacman.d/mirrorlist`，改为以下内容：

```ini
Server = https://mirrors.sdu.edu.cn/archlinux/$repo/os/$arch 
```

可在 root 权限下使用以下命令直接设置。
```bash
echo 'Server = https://mirrors.sdu.edu.cn/archlinux/$repo/os/$arch' > /etc/pacman.d/mirrorlist
```

使用以下命令更新系统，这会同时更新 pacman 数据库和安装的软件。

```bash
pacman -Syu
```

## 提示

- 注：由于 Arch Linux 本身的包管理设计，Arch Linux 不保证软件包更新的稳定性，因此我们提供了以下提示。这些提示并不代表镜像站本身存在问题。
- Arch Linux 是滚动更新的 Linux 发行版，请尽可能频繁地更新系统。如果间隔太长时间没有更新系统，在更新系统时可能出现 `Import PGP key` 的提示，一般是由于之前信任的 GPG 公钥的过期时间已到，自动失效。请按 `Ctrl+C` 中止 pacman，并使用 `pacman -S archlinux-keyring` 命令重新导入信任的公钥列表。如果依然存在问题，可考虑[重置所有公钥](https://wiki.archlinux.org/index.php/Pacman/Package_signing#Resetting_all_the_keys)或者暂时[禁用签名检查](https://wiki.archlinux.org/index.php/Pacman/Package_signing#Disabling_signature_checking)，并在升级成功后重新启用签名检查。
- 由于不同镜像站的更新进度不一样，为最大程度保证 Arch Linux 的稳定性，切换镜像站之前，建议先搁置一两天不要更新，然后再切换镜像站并更新系统。否则，在更换镜像站后，在使用 `pacman -Syu` 更新系统时可能会出现 HTTP 404 问题，此时可使用 `pacman -Syyu` 命令强制更新数据库。如果依然存在问题，可考虑使用 `pacman -Syyuu` 命令降级。注意，最后两条命令都是比较危险的，应慎重考虑后再使用。