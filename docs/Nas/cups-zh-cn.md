---
title: "Cups 打印服务器汉化教程"
date: 2023-03-02T10:36:07+08:00
description: 本文主要讲述Cups管理页面汉化
Author: Chen
Updaetime: 2023-03-20T10:36:07+08:00
tags:
- CUPS
- 汉化
---

<!-- truncate -->
注意：本汉化包不包括PDD打印机首选项设置的汉化，该部分应另行翻译。
汉化包联系博主索取。

将zh_CN.7z文件上传到/usr/share/cups/templates/
将zh_CN_Index.7z上传到/usr/share/cups/doc-root/

进行解压
在CUPS的配置文件中，添加下面的配置：

```
# Language
DefaultLanguage zh_CN

```
保存即可

最终结果：
/usr/share/cups/templates/zh_CN/
该目录下为中文模板文件：*.tmpl

/usr/share/cups/doc-root/zh_CN/
该目录下为中文首页文件：Index.html

/usr/share/cups/doc-root/help/
该目录下为帮助文档（未翻译，经测试不支持在目录下建zh-CN目录这样的汉化方法）

重启cups服务
```
sudo service cups restart

```
