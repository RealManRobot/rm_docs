# 睿尔曼机器人快速使用

本手册为机器人操作的快速入门手册，旨在短时间内提升客户对机器人的熟知度。
通过本手册，操作人员、产品技术人员、技术服务人员和机器人程序开发者都可以快速地使用睿尔曼的机械臂。
睿尔曼研发的机器人包含RM65、RM75、RML63、ECO系列，使用过程均可参考此说明。

## 操作前提

操作机器人前，请务必仔细阅读《睿尔曼机器人用户手册》，用户需在了解安全知识的基础上才可使用机器人。

## 一、产品组成

一套完整的睿尔曼协作机器人产品组成如下所示：

**配置表**
|  名称  |  数量  |
| --- | --- |
|  机器人本体  |  1  |
|  电源连接线  |  1  |
|  6芯工具端IO连接线  |  1  |
|  16芯IO连接线  |  1  |
|  网线  |  1  |
|  M6\*20固定螺丝  |  4  |
|  平板示教器（选配）  |  1  |

![图片 3](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/478ebb1d-38a5-4eb8-9081-c2fcd8ac59f2.png)

**RM65-B机器人整体组成示意图**

![图片 1](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/e6f9a49c-3c33-456d-9732-f2e5acfd1e7a.png?x-oss-process=image/crop,x_0,y_80,w_641,h_366/ignore-error,1)

**机器人电气接口功能说明**

|  序号  |  接口  |  功能  |
| --- | --- | --- |
|  1  |  开关  |  控制机器人电源，开启后亮起蓝灯  |
|  2  |  电源接口  |  插入电源线缆  |
|  3  |  复用IO接口  |  引出控制器RS485、I/O等接口  |
|  4  |  百兆WI-FI  |  无线通讯使用  |
|  5  |  USB接口1  |  扩展接口，可外接蓝牙手柄接收器  |
|  6  |  USB接口2  |  作为虚拟网口使用  |
|  7  |  千兆有线网口  |  通讯网口   |
|  8  |  交互RGB指示灯  |  根据机械臂不同状态分别显示蓝色、白色、绿色、黄色、红色。 ①蓝色为控制器启动初始化； ②白色为各关节启动初始化； ③绿色为机械臂正常运行； ④黄色为机械臂发出警告信息，为普通故障，需立即处理； ⑤红色为机械臂发生严重故障，需立即处理。  |

## 二、机器人快速安装

RM65机器人安装简要步骤：

1.  准备四个M6的内六角螺栓和M6的内六角扳手。
    
2.  从包装箱中取出RM65机器人，安装到底座。
    

![图片 2](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/34df18e3-f699-4f84-b8b9-8c3cbb37910d.png)

![图片 151](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/6adb38eb-f214-47de-99d4-db9eb9cd039d.png)

基座安装尺寸

对于末端工具的安装，机械臂本体提供的标准法兰接口，用户需要根据安装工具的安装尺寸进行适配。机械臂法兰盘预留均匀分布在Ф49mm分度圆上的6个M4螺纹孔，具体尺寸如下图所示。

![图片 1111](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/1be801bd-ef54-46c6-b638-9f086869ecd8.png)

## 三、机器人接线与开机

1、从包装箱中取出RM65机器人的DC24V电缆。

2、准备DC 24V 的供电电源（电源电压范围可选20~27V，极限可以达到30V，建议使用600W以上，且具有打嗝模式、恒流输出1S功能的开关电源），机械臂供电接口为2芯航插，位于控制器面板左下角，2芯电源线缆中棕色线芯为电源正极，蓝色线芯为电源负极。

3、机器人不得暴露在灰尘或超出IP54等级的潮湿环境下。密切注意存在传导性灰尘的环境中，需要特殊防护。

4、连接机器人线缆。若无外部设备，只需要连接电源线与网线即可。如下图：

![图片 1](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/23d2d84e-b827-4450-889c-739002c98c29.png)

- 检查电源线与电源插头是否连接好。
- 检查控制器电源开关在未接通时处于关闭状态。
- 确保机器人不会碰到周围人员或设备。确保电源线已连接24V直流电源。
- 按下电源开关，①电源开关背景灯变为蓝色，说明机械臂上电。②同时机器人控制器右上角指示灯变为蓝色，说明控制器正在启动，③控制器指示灯变为白色，说明机器人关节等正在进行初始化工作。④控制器指示灯变为绿色闪烁状态，说明机器人启动完成，可正常开始工作。此过程用时大约50s左右。

![图片 2](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/387b805d-fdce-492e-8e4c-1c404726dda4.png)

## 四、示教器连接

机械臂示教器软件为web端软件，在浏览器直接输入指定IP登陆即可（推荐使用谷歌浏览器）。通过此人机交互界面，可以操作机器人本体和控制器，执行和创建机器人程序，读取机器人信息。

可根据使用场景，选择不同的示教器载体，示教器支持全平台使用，如安卓平板、Windows系统的平板或电脑、苹果系统的平板或电脑、Linux系统的电脑。示教器载体与机械臂连接可选择有线或无线两种方式。

**有线连接：**

Windows系统与机械臂建立有线连接时，首先需要将电脑ip更改到192.168.1.xx网段，xx可为除192.168.1.18中“18”以外的ip，建议配置为192.168.1.100。

![图片 4](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/0b9cf7de-474d-464a-b8bd-a9c2d457c160.png)

**网口接口**

（1）右击电脑右下方WIFI按钮打开“网络和Internet设置”注：win11点击后须先点击<高级网络设置，再点击更多网络适配器选项后立即进入（3）以太网选项>

![图片 4](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/a33be380-1797-4925-96a8-3be975590cab.png?x-oss-process=image/crop,x_0,y_344,w_367,h_282/ignore-error,1)

**打开网络****和Internet设置****示意图**

（2）单击“以太网-->更改适配器选项”

![图片 17](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/6709b261-22e6-4859-a2a2-7c13ebd78996.png)

**本地连接示意图**

（3）双击“以太网”并打开，并且在弹出的窗口中单击“属性”按钮。

![图片 6](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/5ede079f-e129-49d6-a2ac-2fdf9627f78e.png?x-oss-process=image/crop,x_359,y_0,w_271,h_212/ignore-error,1)![图片 7](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/5c301fac-ea78-41e8-ac30-da57743a910e.png)

**属性示意图**

(4)在弹出的对话框中，第一步选中“Internet协议版本4”，第二步单击“属性”按钮。

![图片 8](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/6acdae4c-4542-484e-8bc0-6540da2758a9.png)

**协议版本示意图**

（5）按下图配置网络IP地址，配置完成后点击“确定”按钮，即可完成本地网络设置。

![图片 9](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/344a9e87-8081-46cd-b43f-b122828c9089.png)

**网络IP地址示意图**

**无线连接：**

默认WIFI名称格式如下图所示，密码默认为12345678

![图片 2](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/7eeca076-bc62-48bf-b481-16b8fde08fe1.png)

1. 打开浏览器，若使用有线连接，则网址输入192.168.1.18。![图片 4](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/6782d5b8-5c9b-43e2-a34a-beb4eee919da.png?x-oss-process=image/crop,x_10,y_32,w_499,h_40/ignore-error,1)
2. 若使用无线的AP模式连接，则网址输入192.168.33.80。
3. 输入账号：user，密码：123，点击登录即可进入机器人控制界面。
![图片 2](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/049f1871-eda1-4e1b-9f87-20101c162592.png)

## 五、示教器界面

![图片 21](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/8900b960-7537-4d1a-ae4c-a585b044d36c.png)

注：若首次连接或升级程序后连接示教器出现页面卡顿后可以Ctrl+F5 刷新页面。

 **机器人示教面板各功能区域名称**

|  序号  |  名称  |
| --- | --- |
|  1  |  步进模式设置  |
|  2  |  姿态示教  |
|  3  |  位置示教  |
|  4  |  菜单栏选项  |
|  5  |  零位姿态按钮  |
|  6  |  关节示教  |
|  7  |  位姿编辑  |
|  8  |  工作模式选择  |
|  9  |  工作坐标系选择  |
|  10  |  工具坐标系选择  |
|  11  |  拖动示教轨迹编辑  |
|  12  |  机械臂状态显示  |
|  13  |  网络连接状态显示  |
|  14  |  初始姿态按钮  |
|  15  |  速度百分比显示  |
|  16  |  运动坐标系选择  |
|  17  |  机器人急停按钮  |
|  18  |  全屏按钮  |
|  19  |  机器人电源开关  |
|  20  |  中英文切换  |
|  21  |  退出登录  |
|  22  |  一键回位按钮  |
|  23  |  当前位姿，坐标系  |
|  24  |  3D仿真模型  |

## 六、拖动示教

![图片 2](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/518d0fbd-53ec-4994-9952-b31e98b70bd6.png)![图片 3](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/ABmOorLEPz5pqawZ/img/35a93cce-461e-44f8-8e68-e45e95783efa.png)

在机械臂末端法兰外壳上有两个按钮，分别控制机器人进行拖动示教和轨迹复现。

长按机械臂末端绿色按钮，机械臂将处于可拖动状态，拖动机械臂末端进行轨迹记录，松开绿色按钮即完成轨迹记录。末端按钮位置如图所示。

短按机械臂末端蓝色按钮，机械臂自动回到轨迹起始位置，并进行一次轨迹复现（机械臂只复现最后一次记录的拖动轨迹）。

## 七、状态确认

机械臂在出厂前都会进行标准的标定和测试流程，确保机械臂在出厂时均处于最优状态。但在物流运输过程中，可能会有极小概率造成机械臂损坏。建议您收到机械臂后按以下流程进行检测。

1. 确认控制器状态：示教器可以正常登录。
示教器连接方式请参照：本手册第四节。
2. 确认关节状态：可以正常控制关节，可以拖动。
机械臂拖动方法可以参考：本手册第六节。
3. 确认力传感器状态（选配）：可以正常读取力值，且在末端施加外力后数值有明显变化。
力传感器数值读取方法可以参考：《睿尔曼机器人WEB示教器用户手册》（这个为跳转链接的）-8.4.2.7 力传感器数据图。

六维力传感器参数如下：

    额定载荷：X：200N;Y：200N;Z:200N;MX：7Nm;MY：7Nm;MZ:7Nm;

>注意：六维力量程200N/7NM，如果末端受到600N以上的力或者21NM以上的力矩，会对传感器造成不可逆损坏。前期使用、验证轨迹时，建议降低速度，避免传感器与外部设备发生碰撞，造成不可逆损伤。**

## 八、机器人关机

1. 按下电源开关，使其处于弹起关闭状态；
2. 关闭机器人24V直流供电电源。
