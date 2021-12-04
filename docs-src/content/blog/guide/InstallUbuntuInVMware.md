---
title:  VMware 安装 Ubuntu 20.04 教程
date: "2021-11-24T20:45:03.284Z"
description: ""
tags: ["帮助文档"]
---


### 安装 Ubuntu

1.下载 Ubuntu Desktop 20.04 LTS 的 ISO 镜像。

![](./images/QQ截图20211203215050.png)

![](./images/Snipaste_2021-12-03_17-03-38.png)

2.打开 VMware Workstation，选择创建新的虚拟机。

![](./images/Snipaste_2021-11-19_08-45-32.png)

3.进入新建虚拟机向导，选择`典型`，点击下一步。

![](./images/Snipaste_2021-11-19_08-47-14.png)

4.选择 Ubuntu 镜像文件。

![](./images/Snipaste_2021-11-19_08-48-49.png)

5.输入全名（稍后将用作虚拟机的计算机名）、用户名和密码。

![](./images/Snipaste_2021-11-19_08-49-40.png)

6.输入虚拟机名称（在 VMware 库中显示的名称）和保存位置。

![](./images/Snipaste_2021-11-19_08-50-11.png)

7.输入虚拟机最大磁盘大小。

![](./images/Snipaste_2021-11-19_08-51-29.png)

8.点击自定义硬件，调整其他设置。

![](./images/Snipaste_2021-11-19_08-56-03.png)

9.根据自己电脑的配置情况，酌情分配CPU数量和内存容量，如有其他需求可自行修改。

![](./images/QQ截图20211203214941.png)

10.（可选）由于 Ubuntu 安装时会联网下载更新，但默认软件源在国内下载速度较慢，因此可以取消勾选网络适配器中的`启动时连接`，以阻止自动下载，提高安装速度，安装完成后可切换至速度较快的软件源并手动更新。

![](./images/Snipaste_2021-11-19_09-04-29.png)

11.配置完成后点击关闭，再点击新建虚拟机向导的完成按钮，即可启动虚拟机并开始安装。安装过程是全自动的，无需操作，等待安装完成即可。

![](./images/Snipaste_2021-11-24_10-50-21.png)

12.出现以下登录界面，即为安装完成，输入之前设置的密码登录。

![](./images/Snipaste_2021-11-24_10-51-33.png)

13.第一次登录时，会询问有关隐私等的选项，如无特殊需求一路点击 Next 即可。

![](./images/Snipaste_2021-11-24_10-52-08.png)

### 基本配置与更换软件源

1.如果安装前断开了虚拟机的网络，在菜单栏点击虚拟机->设置，选择网络适配器，勾选`已连接`和`启动时连接`，即可连接网络。虚拟机右上角出现如图所示的小图标即为连接成功。

![](./images/Snipaste_2021-11-24_10-54-28.png)

![](./images/Snipaste_2021-11-24_10-54-52.png)

![](./images/Snipaste_2021-12-03_13-31-47.png)

2.在桌面按`Ctrl+Alt+T`，打开终端，输入

`sudo gedit /etc/apt/sources.list`

然后输入密码，即可编辑软件源。输入密码时终端不会有任何提示，这是为了防止泄露密码长度，直接输入后按回车即可。

![](./images/Snipaste_2021-12-03_13-35-52.png)

3.点击右上角的菜单键，选择 Find and Replace，将所有的`deb http://us.archive.ubuntu.com/ubuntu/` 替换为 `deb http://mirrors.sdu.edu.cn/ubuntu/`。完成后点击 Save 保存，关闭窗口。也可根据镜像站的[Ubuntu 镜像源使用说明](https://mirrors.sdu.edu.cn/docs/guide/Ubuntu/) 的指示，将原有文件内容全部删除，并替换为网页中给出的内容。

![](./images/Snipaste_2021-12-03_13-41-51.png)

![](./images/QQ截图20211203215620.png)

4.在终端输入 `sudo apt update` 和 `sudo apt upgrade` ，体验镜像站的校内速度并更新软件。可能需要输入 `y`并按回车以确认安装。

5.更新完成后， 在终端输入 `sudo apt install open-vm-tools`，安装完成后可在虚拟机内外共享剪贴板及自动调整虚拟机分辨率。

![](./images/Snipaste_2021-12-03_13-50-03.png)

### 更改语言和时区

1.点击右上角的电源按钮，选择 Settings ，选择左侧的 Region & Language。

![](./images/Snipaste_2021-11-24_11-03-19.png)

![](./images/Snipaste_2021-11-24_11-03-45.png)

2.点击 Manage Installed Languages，会提示英文语言包不完整，点击 Remind Me Later。

![](./images/Snipaste_2021-11-24_11-04-55.png)

3.点击 Install / Remove Languages... ，选中`Chinese (simplified)`，点击 Apply ，输入密码，等待安装完成。

![](./images/Snipaste_2021-11-24_11-05-46.png)

4.将 Language for menus and windows 中的`汉语（中国）`拖动到最上方，然后点击 Apply System-Wide。

![](./images/Snipaste_2021-12-03_14-07-39.png)

5.选择 Regional Formats，调整为`汉语（中国）`，点击 Apply System-wide。完成后关闭窗口。

![](./images/Snipaste_2021-11-24_11-09-26.png)

6.重启虚拟机，即可看到语言已更改为中文。登录后会询问是否将主文件夹下的文件夹更改为中文名称，随意选择即可。

![](./images/Snipaste_2021-11-24_11-11-09.png)

7.再次进入设置，选择左侧的日期和时间，将时区更改为 `UTC+08` 。（直接在地图上点击上海即可）

![](./images/Snipaste_2021-12-03_14-15-24.png)

8.设置完成，现在可以愉快地体验 Ubuntu 了~

