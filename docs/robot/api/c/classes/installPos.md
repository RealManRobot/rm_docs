# <p class="hidden">C、C++: </p>系统安装方式配置`installPos`

睿尔曼机械臂可支持不同形式的安装方式，但是安装方式不同，机器人的动力学模型参数和坐标系的方向也有所差别。本接口用于设定和读取机械臂安装方式。

## 设置安装方式参数`rm_set_install_pose()`

- **方法原型：**

```C
int rm_set_install_pose(rm_robot_handle * handle,float x,float y,float z)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  x  |    输入参数    |    旋转角，单位 °。    |
|  y  |    输入参数    |    俯仰角，单位 °。    |
|  z  |    输入参数    |    方位角，单位 °。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
//设置安装角度旋转角30°，俯仰角60°,方位角90°
float x = 30;
float y = 60;
float z = 90;
ret = rm_set_install_pose(robot_handle,x,y,z);
```

## 获取安装方式参数`rm_get_install_pose()`

- **方法原型：**

```C
int rm_get_install_pose(rm_robot_handle * handle,float * x,float * y,float * z)
```

*可以跳转[rm_robot_handle](../struct/robotHandle)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   `handle`  |    输入参数    |    机械臂句柄。    |
|  `x`  |    输出参数    |    存放旋转角，单位 °。    |
|  `y`  |    输出参数    |    存放俯仰角，单位 °。    |
|  `z`  |    输出参数    |    存放方位角，单位 °。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   0  |    `int`    |    成功。    |
|   1  |    `int`    |    控制器返回false，传递参数错误或机械臂状态发生错误。    |
|  -1  |    `int`    |    数据发送失败，通信过程中出现问题。    |
|  -2  |    `int`    |    数据接收失败，通信过程中出现问题或者控制器超时没有返回。    |
|  -3  |    `int`    |    返回值解析失败，接收到的数据格式不正确或不完整。    |

- **使用示例**
  
```C
//获取安装角度
float fx,fy,fz;
ret = Get_Install_Pose(m_sockhand,&fx,&fy,&fz);
```
