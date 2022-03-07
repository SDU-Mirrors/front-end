---
title:  Windows 安装指南
date: "2019-04-23T22:12:03.284Z"
description: ""
tags: ["帮助文档"]
---
请根据电脑的正版授权情况，从 `Business`、`Customer` 和 `China Get Genuine` 中选择正确的版本，否则安装成功后将无法激活。如果不确定需要哪个版本，请选择 Business 版本，并通过[山东大学正版软件管理平台](http://softms.sdu.edu.cn)完成正版激活。

## Windows 10 / 11 半年频道

### Windows 10 / 11 Business

如果您的电脑通过[山东大学正版软件管理平台](http://softms.sdu.edu.cn)授权，可选择此版本，并运行平台提供的程序以完成激活。

#### 包含的版本
- Windows 10 / 11 教育版 (批量授权版)
- Windows 10 / 11 企业版 (批量授权版)
- Windows 10 / 11 专业版 (批量授权版)
- Windows 10 / 11 专业教育版 (批量授权版)
- Windows 10 / 11 专业工作站版 (批量授权版)

#### 下载
- 校内：[https://ftp.oops-sdu.cn/mirrors/windows-iso/Business/](https://ftp.oops-sdu.cn/mirrors/windows-iso/Business/)


### Windows 10 / 11 Consumer

如果您的电脑通过“Windows 10 易升”从 Windows 8 升级到 Windows 10，请选择此版本，无需输入序列号，联网即可识别为正版。

#### 包含的版本
- Windows 10 / 11 家庭版 (零售版)
- Windows 10 / 11 家庭单语言版 (零售版)
- Windows 10 / 11 教育版 (零售版)
- Windows 10 / 11 专业版 (零售版)
- Windows 10 / 11 专业教育版 (零售版)
- Windows 10 / 11 专业工作站版 (零售版)

#### 下载
- 校内：[https://ftp.oops-sdu.cn/mirrors/windows-iso/Consumer/](https://ftp.oops-sdu.cn/mirrors/windows-iso/Consumer/)

- 微软官方下载：使用任意设备打开 [下载 Windows 11](https://www.microsoft.com/zh-cn/software-download/windows11/) 页面，或使用**除 Windows 以外的**设备打开 [下载 Windows 10 光盘映像（ISO 文件）](https://www.microsoft.com/zh-cn/software-download/windows10ISO/) 页面，以便下载 ISO 文件。如不需要 ISO 文件，也可使用 **Windows** 设备打开 [下载 Windows 10 光盘映像（ISO 文件）](https://www.microsoft.com/zh-cn/software-download/windows10ISO/) 页面，以便下载更友好的安装工具。请在“版本选择”中选择 “Windows 11 (multi-edition ISO)”“Windows 10 (multi-edition ISO)”。

### Windows 10 / 11 China Get Genuine

如果您的电脑在中国大陆销售，且由 OEM 预装了正版的 Windows 10，请选择此版本，无需输入序列号，联网即可识别为正版。

#### 包含的版本
- Windows 10 / 11 家庭中文版 (OEM 版)

#### 下载
- 校内：[https://ftp.oops-sdu.cn/mirrors/windows-iso/China/](https://ftp.oops-sdu.cn/mirrors/windows-iso/China/)

- 微软官方下载：使用任意设备打开 [下载 Windows 11](https://www.microsoft.com/zh-cn/software-download/windows11/) 页面，或使用**除 Windows 以外的**设备打开 [下载 Windows 10 光盘映像（ISO 文件）](https://www.microsoft.com/zh-cn/software-download/windows10ISO/) 页面，以便下载 ISO 文件。如不需要 ISO 文件，也可使用 **Windows** 设备打开 [下载 Windows 10 光盘映像（ISO 文件）](https://www.microsoft.com/zh-cn/software-download/windows10ISO/) 页面，以便下载更友好的安装工具。请在“版本选择”中选择 “Windows 11 家庭版 (仅限中国)”“Windows 10 家庭版 (仅限中国)”。


## Windows 10 长期服务分支

#### 下载
- 校内：[https://ftp.oops-sdu.cn/mirrors/windows-iso/LTSC/](https://ftp.oops-sdu.cn/mirrors/windows-iso/LTSC/)

## 常见问题 FAQ
### <a name="faq-how-to-install"></a>1. 如何安装 Windows，以及注意事项？
尽管安装操作系统不应当是什么难事，由于 Hybrid ISO、UEFI 启动、FAT32 单文件上限、主板支持的文件系统、安全启动等原因，尚不存在适用于所有人的安装方案。大约有六种主流的安装方案，每种方案都有其优势和弊端，现列举两种：

#### 使用微 PE 含有的分区工具和 Windows 安装器完成安装
弊端：此方法需要用户对 GUID 分区表以及 UEFI 引导具有初步的知识，并能够操作这些软件。

1. 进入电脑的 BIOS 设置界面，将 CSM 关闭，将 Boot mode 设置为 UEFI only。依主板型号不同，设置界面可能有较大差别，但通常可以在“Boot”页面下找到。
2. 下载 [微PE工具箱](https://mirrors.sdu.edu.cn/software/Windows/WePE/) 并用它制作一个可启动 U 盘。
3. 用该 U 盘启动电脑。依电脑型号不同，可能需要在开机时频繁按 F2/F7/F8/F9/F11/F12/DEL/ESC 等键才能调出启动菜单，如果是笔记本电脑可能还需要按住/不按住 Fn 键。部分电脑还需要将 Fast boot 选项禁用。具体请参考对应电脑或主板说明书。
4. 如果硬盘不是 GUID 分区表（GPT），使用 `傲梅分区助手` 将硬盘转换为 GUID 分区表（GPT）。直到所有硬盘都被转换为 GUID 分区表（GPT）为止。
5. 打开 `Diskgenius`。为了接下来操作方便，可将系统分区（C 盘）删除。也可不删除，视后续步骤而定。
6. 检查系统所在硬盘是否存在 `EFI 系统分区`（ESP）。如果没有，新建一个 `EFI 系统分区`，大小可取 512 MiB，文件系统 FAT32。
7. 按 Windows 的要求，在 `EFI 系统分区` 之后，第一个主分区之前，应该有一个 `微软保留分区`（MSR）。大小可取 512 MiB，无需关注文件系统。
    尽量满足这一要求，但如果由于各种原因（如分区布局无法满足要求），无法创建 `微软保留分区`，可忽略此步。
8. 在 `微软保留分区` 的后面创建一个文件系统为 NTFS 的主分区，建议大小至少为 100 GiB，或者，如果这是一个 120GB/240GB 的固态硬盘，使用所有的空间。此分区将作为系统分区（C 盘）。如果之前没有删除原来的系统分区（C 盘），且分区布局满足要求，也可只将其格式化。
9. 如果其他分区还没有创建，可在此创建分区。注意，GUID 分区表下主分区的数量几乎没有限制，也没有扩展分区、逻辑分区这种极不合理、易丢失数据的糟糕设计。虽然如此，仅仅是从良好习惯的方面考虑，我们不提倡过多的分区数量，通常以 1 个数据分区为宜。使用文件夹来做好分类，而不是分区。
10. 打开 `Windows 安装器`（WinNTSetup），依次选择好 ISO 镜像、系统分区位置、`EFI 系统分区` 位置（软件可能会自动选择，也可能不会），然后选择合适的 Windows 版本，点击 `开始安装` 按钮即可。

#### 使用 Ventoy 工具加载原版 Windows ISO
弊端：此方法需要在主板 UEFI 设置界面中关闭安全启动功能。

1. 下载并打开 [Ventoy](https://mirrors.sdu.edu.cn/github-release/ventoy_Ventoy/)，点击“配置选项”→“分区类型”→“GPT”，然后用它制作一个可启动 U 盘。
2. 将下载好的 Windows ISO 拷贝到 U 盘中。
3. 在主板 UEFI 设置界面中关闭安全启动功能。
4. 用该 U 盘启动电脑。依电脑型号不同，可能需要在开机时频繁按 F2/F7/F8/F9/F11/F12/DEL/ESC 等键才能调出启动菜单，如果是笔记本电脑可能还需要按住/不按住 Fn 键。部分电脑还需要将 Fast boot 选项禁用。具体请参考对应电脑或主板说明书。
5. 在 Ventoy 启动界面中选择 Windows ISO，并按照提示完成后续步骤。如果是全新的电脑或电脑上已经没有任何未备份的重要文件，则建议删除所有分区后直接选择一整块固态硬盘并在上面安装 Windows。
6. 注意，GUID 分区表下主分区的数量几乎没有限制，也没有扩展分区、逻辑分区这种极不合理、易丢失数据的糟糕设计。虽然如此，仅仅是从良好习惯的方面考虑，我们不提倡过多的分区数量，通常以 1 个数据分区为宜。使用文件夹来做好分类，而不是分区。

### 2. 为什么不推荐直接将 Windows 安装镜像写入 U 盘？
由于 install.wim 文件已经超过 4 GiB，使用 `UltraISO` 软件可能会将 U 盘格式化为 NTFS 格式，并不是所有主板都支持在上面启动，尤其是 UEFI 引导。使用 `rufus` 软件写入 U 盘会采用多分区方案来规避此限制，但需要主板关闭安全启动。
此外，Windows 的安装镜像并非 Hybrid ISO，因此你无法使用 `dd` 或者 `Win32DiskImager` 将其写入 U 盘。

### 3. 安装后有什么推荐做的吗？
1. 安装结束后，建议将硬件时区设置为协调世界时，这可避免在与 Linux 共存时，切换系统会导致时间出错的问题。以管理员权限执行以下命令。
```shell
reg add "HKLM\SYSTEM\CurrentControlSet\Control\TimeZoneInformation" /v RealTimeIsUniversal /t REG_DWORD /d 1 /f
```
2. 建议将 `快速启动` 功能关闭。时至今日，固态硬盘已经普及，`快速启动` 功能对启动时间的提升不明显，且会带来多系统切换麻烦、对 NTFS 分区读写争用的问题，建议关闭。以管理员权限执行以下命令。
```shell
reg add "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Power" /v HiberbootEnabled /t REG_DWORD /d 0 /f
```
3. Windows 自带杀毒软件，名为 Windows Defender，因此无需因“需要装一个杀毒软件”的焦虑而选择某些广告较多或过于流氓的杀毒软件。

4. Windows 默认开启[端口扫描防护筛选器的日志写入功能](https://docs.microsoft.com/en-us/troubleshoot/windows-client/networking/lots-disk-io-writes-wfpdiag-etl-log)，该功能会对硬盘产生相当大规模的无意义写入（只保留最近 1 MB 左右的数据，意味着绝大部分日志数据被写入后不久即被覆盖），极大影响固态硬盘的使用寿命，其具体写入量与计算机的网络活动规模有关。微软表示，这是设计使然，因此不会对这种行为做出修复。因此，强烈推荐以管理员权限执行以下命令以禁用 WFP 日志记录。此命令仅仅禁止 WFP 日志写入硬盘，并不会对端口扫描防护筛选器的正常工作产生影响。
```shell
netsh wfp set options netevents=off
```

### 4. 有人说系统安装到 C 盘，软件装 D 盘，对吗？
不正确，“系统安装到 C 盘，软件装 D 盘”是旧时代的优化策略，具有时代的局限性，不适用于现在。具体而言，机械硬盘是由圆形的盘片组成，角速度相同，故线速度外圈大于内圈，造成了不同区域访问速度不一致的情况。划分小容量 C 盘并将软件放到 D 盘，是为了将最快的部分留给操作系统，次快的部分留给应用程序。目前固态硬盘已经普及，这样的优化策略已经失效，不是正确的使用习惯，不应该提倡，更不应该作为“考试题目”“经验之谈”误导更多的人。

一般来说只需要将系统（和软件）划分到 C 盘，用户的文档和各种资料划分到 D 盘即可。任何操作系统都会为应用程序规划最合理的安装路径，对于 Windows 来说，即为 Program Files 文件夹，因此在安装软件时，默认路径即为最佳选择。其次，过多的分区不利于管理，无法在分区时精确预测到未来的硬盘使用情况，可能会出现一个分区容量不足，其他分区空闲的情况。再次，应用程序在重装系统后便会由于注册表丢失、公用文件丢失等原因无法全功能工作，因此也没有保留的必要。永远保留软件的安装包，而不是保留安装后的软件目录。最后，将软件目录和用户文件一起存放，也会使得备份重要数据时，无法分清哪些是真正重要的用户资料，哪些则是不重要的软件目录，造成不必要的时间浪费。