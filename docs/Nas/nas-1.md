---
title: 微型nas系统
date: 2023-03-28T13:21:00+08:00
description: "nas"
sticky: 1
tags:
- nas
---

> 简单记录一下

#由于家里打印机太老旧，不支持网络打印，利用家里废弃的电视机顶盒刷入linux系统，安装cups作为打印服务器，

NAS系统功能很多，有需要的可自行探索，本文主要记录踩坑实录。

官网主页 ↓

![image.png](https://files.cwkl.love/blogs/articles/915af8e3ec9654bdb3e0c203f3177cdd.png)

刷入后主页 ↓

![image.png](https://files.cwkl.love/blogs/articles/6d49c6565248e57c1f31cb66c64022d0.png)

进入终端 安装cups


1.终端登录root ECOO1234

2.输入apt-get update等待更新

3.输入apt-get install cups安装打印服务。(卸载CUPS命令 apt-get remove cups)

4.输入apt-get install hplip安装惠普打印机驱动。

5.输入mkdir hp

6.输入cd hp

7.复制粘贴

wget https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hplip-3.20.3-plugin.run

wget https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hplip-3.20.3-plugin.run.asc

wget https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hp_laserjet_1020.plugin

*如果wget从IPv6地址下载文件，并且下载不成功的话，可以添加“–inet4-only”参数强制让wget从IPv4地址下载文件：

wget --inet4-only https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hplip-3.20.3-plugin.run

wget --inet4-only https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hplip-3.20.3-plugin.run.asc

wget --inet4-only https://www.openprinting.org/download/printdriver/auxfiles/HP/plugins/hp_laserjet_1020.plugin

8.输入sudo hp-plugin 惠普打印机驱动插件

9.输入P回车

10.输入 安装其它品牌打印机驱动

apt install printer-driver-gutenprint

apt-get install foomatic-db-engine

apt-get install printer-driver-gutenprint

11.输入cupsctl --remote-any运行远程访问。

12.输入机器IP:631根据提示添加对应打印机，会弹出登录框输入root账户和密码。

手机想在局域网搜到打印机，点上面Administration点开Edit Configuration File里面的配置文件Browsing off改为Browsing on改然后保存。然后重启cups.或者终端输reboot重启盒子。

驱动选择 ，使用惠普官网的Ubuntu解压后的PDD文件。

![image.png](https://files.cwkl.love/blogs/articles/049dc606d1aff63ebdb4ea226ecc9222.png)


遇到错误
```
Idle - "File "/usr/lib/cups/filter/rastertospl" not available: No such file or directory"
```
![image.png](https://files.cwkl.love/blogs/articles/7bff5581b2e242eeb4958b8ebafb4fbe.png)

解决方案 [原文地址](https://raspberrypi.stackexchange.com/questions/121597/rastertospl-failed-samsung-printer )

输入
```
sudo ln -s /usr/lib/cups/filter/rastertoqpdl /usr/lib/cups/filter/rastertospl
```
测试成功

![image.png](https://files.cwkl.love/blogs/articles/9d606aaf39fe793c1689da0ad443bccf.png)