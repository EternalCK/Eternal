---
title: 家庭nas基于frp内网穿透
date: 2023-03-25T22:55:18+08:00
description: 家庭nas基于frp内网穿透
tags:
- nas
- frp
- 内网穿透
---
<!-- truncate -->
Frp安装

首先你要有一台服务器或者VPS，还要有个域名，内网主机一台。

服务器或者VPS、域名的购买，本文不赘述。

服务端(Linux)搭建步骤
1：下载服务端的frp:
使用wget命令下载。如果wget command not found，则先安装wget，安装命令如下：

yum -y install wget
下载frp到服务器，在 https://github.com/fatedier/frp/releases 这里可以查看最新版本和获取下载地址。下载命令:
```
wget https://github.com/fatedier/frp/releases/download/v0.20.0/frp_0.20.0_linux_amd64.tar.gz
```
![image.png](https://files.cwkl.love/blogs/articles/becc906101f2e1736f2478e887323d23.png)

2.使用tar命令解压下载成功的压缩包文件:
```
tar -zxvf frp_0.20.0_linux_amd64.tar.gz
```
3.使用cd命令进入解压出来的文件夹:
```
cd frp_0.20.0_linux_amd64
```
4.修改服务器配置文件(frps.ini):
```
vim frps.ini
```
按i，进行编辑，将内容修改下面的:
```
[common]
# frp监听的端口，默认是7000，可以改成其他的
bind_port = 7000
# 授权码，请改成更复杂的
token = 52010
# 这个token之后在客户端会用到
vhost_http_port = 8081
subdomain_host = cwkl.love
# frp管理后台端口，请按自己需求更改
dashboard_port = 7500
# frp管理后台用户名和密码，请改成自己的
dashboard_user = admin
dashboard_pwd = admin
enable_prometheus = true

# frp日志配置
log_file = /var/log/frps.log
log_level = info
log_max_days = 3
```
5.启动frp服务端：
方法一： 启动命令(这种方式不推荐，因为断开与服务器的SSH连接后，frp也就停止运行了
```
./frps -c frps.ini
```
参数 -c 指定配置文件

方法二: 建议让frp在后台运行:
```
nohup ./frps -c frps.ini &  > frp.log
```
这样即使关掉了SSH，frp依然在后台运行中。

到此，服务端的搭建已经完成。

另，停止运行frp的方法:

杀掉frps进程即可。使用ps命令，查看进程：
```
ps -ef | grep frp
```
使用kill命令杀掉：

复制
```
kill -9 进程id
```

客户端搭建步骤
1.下载客户端的frp：
在这里 https://github.com/fatedier/frp/releases 找到windows对应的版本（版本必须与服务器端版本对应，不然会连接不上），32位或者64位。

2.解压下载成功的压缩包

3.编辑frpc.ini文件，内容如下：
```
[common]
server_addr = 43.138.63.202
server_port = 7000
log_max_days = 3
token = 52010
login_fail_exit = false
[ssh-nas]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 10086
[web-nas]
type = http
local_ip = 127.0.0.1
local_port = 80
subdomain = nas
```
4.启动frp客户端：
在目录下打开命令窗口，执行如下命令：
```
systemctl stop frpc         #先停止frp客户端的服务
frpc -c /etc/frp/frpc.ini       #试运行上面修改过的配置
#最后, 如果出现的都是蓝色的并且都显示success的结果, 则ok,
#否则重新修改xxx的名称避免和其他人的设置重复
#按ctrl+c结束命令
systemctl restart frpc      #重启服务
```