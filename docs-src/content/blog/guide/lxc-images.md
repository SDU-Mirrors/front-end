---
title:  lxc-images 镜像源使用说明
date: "2021-05-12T22:12:03.284Z"
description: ""
tags: ["guide"]
---
# lxc-images 镜像源使用说明

lxc-images 仓库被 LXC 用于容器内操作系统的部署。截至目前（2019 年 12 月），中国大陆仅有 [清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/lxc-images/) 这一个公网镜像，但此镜像存在严重的索引与内容不一致问题，因此不总是可用。山东大学镜像站对 lxc-images 做了镜像，严格保证索引与内容一致。lxc-images 仓库的性质决定了对一致性的要求远高于及时性，因此目前不保证此镜像与上游及时同步，也没有必要。

注意，出于保证原子性和缩减大小的考虑，索引文件 index-system 及 index-user 经过了修改，且仅支持 amd64 指令集。lxc-create 的 download 模板默认校验数字签名，且对应的公钥固定在 download 模板中。如果我们使用不同的私钥重新签名，则只能对索引和内容全部重新签名，计算量较大。因此，索引文件对应的数字签名被直接去除。在使用 lxc-create 的 download 模板时，加入 `--no-validate` 以跳过校验。

## 使用方式

创建一个名为 `NAME` 的容器。

```bash
lxc-create -n NAME -t download -- --server mirrors.sdu.edu.cn/lxc-images --no-validate
```