---
title:  Rocky Linux 镜像源使用说明
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["帮助文档"]
---
本镜像是 Tier 1 Mirror，每日从官方主节点同步一次。

镜像源更换步骤如下。

1. 将所有的官方主镜像地址替换为山东大学镜像站地址。

```bash
sed -e 's|^mirrorlist=|#mirrorlist=|g' \
    -e 's|^#baseurl=http://dl.rockylinux.org/$contentdir|baseurl=https://mirrors.sdu.edu.cn/rocky|g' \
    -i.bak \
    /etc/yum.repos.d/[Rr]ocky*.repo
```

注，若之前已经将镜像源替换为了其他镜像站，现在想要切换到山东大学镜像站，请参考 `/etc/yum.repos.d/` 中的 repo 文件，将上述命令中的 `#baseurl` 部分替换为 `baseurl`，再将 `http://dl.rockylinux.org/$contentdir` 部分替换为对应镜像站的地址。

2. 更新缓存。

```bash
dnf makecache
```
