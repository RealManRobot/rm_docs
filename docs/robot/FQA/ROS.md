# <p class="hidden">常见问题：</p>
### 一：ROS控制机械臂时，提示连接失败如何解决？

1. 检查机械臂是否开机且通讯线缆连接正常。
2. ping机械臂IP地址，查看是否可以ping通。
3. 检查是否更改过机械臂默认IP地址（默认为192.168.1.18），如更改过机械臂IP，需在ROS资料包中，rm\_driver>>src>>rm\_robot.h文件中重新定义新的IP地址。

![image](https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/1X3lE6mD6wz6nJbv/img/2c935fea-e451-462c-b036-807b26c6dc0e.png)

### 二：如何在ROS里引用正逆解函数库？

1. 创建一个功能包或者进入现有ROS功能包，新建"include"以及"lib"文件夹（如果不存在）。
2. 将API中提供的头文件复制到"include"文件夹，将"Linux"文件夹中的so库文件复制 到"lib"文件夹。
3. 在ROS功能包中的CMakeLists.txt文件中，添加对引用库的依赖
4. 编译功能包
5. 引用头文件，在ROS代码中使用API库中的算法接口