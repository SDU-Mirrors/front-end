---
title:  Ubuntu 镜像源使用说明
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["帮助文档"]
---
受镜像站硬盘容量限制，只对部分内容进行了同步。

- 支持的版本：focal、bionic 和 xenial。

- 支持的指令集：amd64、i386。

- 仅二进制包，不包含源码。

## Ubuntu 20.04 LTS

Ubuntu 20.04 LTS (focal) 用户请将 `/etc/apt/sources.list` 文件改为以下内容：

    deb https://mirrors.sdu.edu.cn/ubuntu/ focal main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ focal-security main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ focal-updates main restricted universe multiverse

支持的指令集：amd64、i386。

## Ubuntu 18.04 LTS

Ubuntu 18.04 LTS (bionic) 用户请将 `/etc/apt/sources.list` 文件改为以下内容：

    deb https://mirrors.sdu.edu.cn/ubuntu/ bionic main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

支持的指令集：amd64、i386。

## Ubuntu 16.04 LTS

Ubuntu 16.04 LTS (xenial) 用户请将 `/etc/apt/sources.list` 文件改为以下内容：

    deb https://mirrors.sdu.edu.cn/ubuntu/ xenial main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
    deb https://mirrors.sdu.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse

支持的指令集：amd64、i386。

## 强迫症选项

桌面版 Ubuntu 在主要使用 amd64 架构的同时，默认也同时支持了 i386 架构，用于支持 Steam 等软件的正常运行。如果希望彻底抛弃 i386 架构，可按以下步骤进行。

1. 搜索并删除所有 i386 的软件包。不过，默认情况下，应该没有 i386 软件包。

```bash
apt-get remove --purge `dpkg --get-selections | awk '/i386/{print $1}'`
```

2. 移除对 i386 架构的支持。

```bash
dpkg --remove-architecture i386
```

## Snap 仓库

目前，互联网上不存在针对 Ubuntu Snap 应用商店的镜像，因此请尽量使用 `apt` 命令，而非图形界面的 Ubuntu 应用商店或者 `snap` 命令，以避免下载速度慢甚至无法下载的情况。