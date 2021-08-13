---
title:   Debian 镜像源使用说明
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["帮助文档"]
---
受镜像站硬盘容量限制，只对部分内容进行了同步。

- 支持的指令集：仅 amd64。

- 支持的版本：仅 buster。

- 仅二进制包，不包含源码。

## Debian 10
Debian 10 (buster) 用户请将 `/etc/apt/sources.list` 文件改为以下内容：

```
deb https://mirrors.sdu.edu.cn/debian buster main contrib non-free
deb https://mirrors.sdu.edu.cn/debian-security buster/updates main contrib non-free
deb https://mirrors.sdu.edu.cn/debian buster-updates main contrib non-free
```

## 一点小提示
debian-security 的 buster/updates 提供了重要的安全更新。类比于 ubuntu 中的 bionic-security。

debian 的 buster-updates 提前提供下一个更新点的部分软件更新，如病毒扫描程序和时区数据等。类比于 ubuntu 中的 bionic-updates。

对于精简安装的 Debian，apt-get 工具不一定能够支持 https。使用如下命令安装依赖包。

```bash
apt install apt-transport-https ca-certificates
```