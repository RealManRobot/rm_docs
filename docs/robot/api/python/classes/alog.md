# 算法接口

针对睿尔曼机械臂，提供正逆解、各种位姿参数转换等工具接口。

## 初始化算法依赖数据`__init__()`

- **方法原型：**

```python
__init__(self, arm_model: rm_robot_arm_model_e, force_type: rm_force_type_e):
```

*可以跳转[typeList](../type/typeList)查阅`rm_robot_arm_model_e`和`rm_force_type_e`枚举详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   arm_model  |    `rm_robot_arm_model_e`    |    机械臂型号。    |
|   force_type  |    `rm_force_type_e`    |    传感器型号。    |

- **使用示例**
  
```python

```

## 设置安装角度`rm_algo_set_angle()`

- **方法原型：**

```C
rm_algo_set_angle(self, x: float, y: float, z: float) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `float`    |    X轴安装角度，单位°。    |
|   y  |    `float`    |    Y轴安装角度，单位°。    |
|   z  |    `float`    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```python
rm_algo_set_angle(x, y, z)
```

## 获取安装角度`rm_algo_get_angle()`

- **方法原型：**

```python
rm_algo_get_angle(self) -> tuple[float, float, float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   x  |    `float`    |    X轴安装角度，单位°。    |
|   y  |    `float`    |    Y轴安装角度，单位°。    |
|   z  |    `float`    |    Z轴安装角度，单位°。    |

- **使用示例**
  
```python

```

## 设置工作坐标系`rm_algo_set_workframe()`

- **方法原型：**

```Python
rm_algo_set_workframe(self, frame: rm_frame_t) -> None:
```

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    坐标系数据。    |

- **使用示例**
  
```python

```

## 获取当前工作坐标系`rm_algo_get_curr_workframe()`

- **方法原型：**

```python
rm_algo_get_curr_workframe(self) -> dict[str, any]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   dict[str, any]  |    `rm_frame_t`    |    返回当前工作坐标系字典，键为rm_frame_t结构体的字段名称。    |

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **使用示例**
  
```python

```

## 设置工具坐标系`rm_algo_set_toolframe()`

- **方法原型：**

```python
rm_algo_set_toolframe(self, frame: rm_frame_t) -> None:
```

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   frame  |    `rm_frame_t`    |    坐标系数据。    |

- **使用示例**
  
```python

```

## 获取算法当前工具坐标系`rm_algo_get_curr_toolframe()`

- **方法原型：**

```python
rm_algo_get_curr_toolframe(self) -> dict[str, any]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   dict[str, any]  |    `rm_frame_t`    |    返回当前工具坐标系字典，键为rm_frame_t结构体的字段名称。    |

*可以跳转[rm_frame_t](../struct/frame.md)查阅结构体详细描述*

- **使用示例**
  
```python

```

## 设置算法关节最大限位`rm_algo_set_joint_max_limit()`

- **方法原型：**

```python
rm_algo_set_joint_max_limit(self, joint_limit: list[float]) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `list[float]`    |    关节最大限位数组，单位：°。    |

- **使用示例**
  
```python

```

## 获取算法关节最大限位`rm_algo_get_joint_max_limit()`

- **方法原型：**

```python
rm_algo_get_joint_max_limit(self) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   \  |    `list[float]`    |    返回关节最大限位数组，单位：°。    |

- **使用示例**
  
```python

```

## 设置算法关节最小限位`rm_algo_set_joint_min_limit()`

- **方法原型：**

```python
rm_algo_set_joint_min_limit(self, joint_limit: list[float]) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    list[float]    |    关节最小限位数组，单位：°。    |

- **使用示例**
  
```python

```

## 获取算法关节最小限位`rm_algo_get_joint_min_limit()`

- **方法原型：**

```C
rm_algo_get_joint_min_limit(self) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   \  |    list[float]    |    关节最小限位数组，单位：°。    |

- **使用示例**
  
```python

```

## 设置算法关节最大速度`rm_algo_set_joint_max_speed()`

- **方法原型：**

```python
rm_algo_set_joint_max_speed(self, joint_limit: list[float]) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `list[float]`    |    最大转速（RPM），单位转/分。    |

- **使用示例**
  
```python

```

## 获取算法关节最大速度`rm_algo_get_joint_max_speed()`

- **方法原型：**

```python
rm_algo_get_joint_max_speed(self) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[float]  |    `float`    |    存放返回的最大转速（RPM），单位转/分。    |

- **使用示例**
  
```C
float after_joint_slimit_max[6];
rm_algo_get_joint_max_speed(after_joint_slimit_max);
```

## 设置算法关节最大加速度`rm_algo_set_joint_max_acc()`

- **方法原型：**

```python
rm_algo_set_joint_max_acc(self, joint_limit: list[float]) -> None:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint_limit  |    `float`    |    最大加速度，单位RPM/s。    |

- **使用示例**
  
```python

```

## 获取算法关节最大加速度`rm_algo_get_joint_max_acc()`

- **方法原型：**

```python
rm_algo_get_joint_max_acc(self) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    存放返回的最大加速度，单位RPM/s。    |

- **使用示例**
  
```python

```

## 逆解函数`rm_algo_inverse_kinematics()`

- **方法原型：**

```python
rm_algo_inverse_kinematics(self, params: rm_inverse_kinematics_params_t) -> tuple[int, list[float]]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   params  |    `rm_inverse_kinematics_params_t`    |    逆解输入参数结构体。    |

*可以跳转[rm_inverse_kinematics_params_t](../struct/inverseKinematicsParams.md)查阅结构体详细描述*

- **返回值:**
tuple[int,list[float]]: 包含两个元素的元组。
    -int 逆解结果:

    |   参数    |   类型    |   说明    |
    | :--- | :--- | :--- |
    |   0  |    `int`    |    逆解成功。    |
    |   1  |    `int`    |    逆解失败。    |
    |  -1  |    `int`    |    上一时刻关节角度输入为空。    |
    |  -2  |    `int`    |    目标位姿四元数不合法。    |

    -list[float] ：输出的关节角度 单位°，长度为机械臂自由度.

- **使用示例**
  
```python

```

## 正解算法`rm_algo_forward_kinematics()`

- **方法原型：**

```python
rm_algo_forward_kinematics(self, joint: list[float], flag: int = 1) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   joint  |    `list[float]`    |    关节角度，单位：°。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态。 - 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z]；- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

list[float]: 解得目标位姿列表。

- **使用示例**
  
```python

```

## 欧拉角转四元数`rm_algo_euler2quaternion()`

- **方法原型：**

```python
rm_algo_euler2quaternion(self, eul: list[float]) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eul  |    `list[float]`    |    欧拉角列表[rx.ry,rz]，单位：rad。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    四元数列表[w,x,y,z]。    |

- **使用示例**
  
```python

```

## 四元数转欧拉角`rm_algo_quaternion2euler()`

- **方法原型：**

```python
rm_algo_quaternion2euler(self, quat: list[float]) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   quat  |    `list[float]`    |    四元数列表[w,x,y,z]。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    欧拉角列表[rx.ry,rz]，单位：rad。    |

- **使用示例**
  
```python

```

## 欧拉角转旋转矩阵`rm_algo_euler2matrix()`

- **方法原型：**

```python
rm_algo_euler2matrix(self, eu: list[float]) -> rm_matrix_t:
```

*可以跳转[rm_matrix_t](../struct/matrix.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu  |    `list[float]`    |    欧拉角列表[rx.ry,rz]，单位：rad。    |

- **返回值:**

rm_matrix_t: 旋转矩阵。

- **使用示例**
  
```python

```

## 位姿转旋转矩阵`rm_algo_pos2matrix()`

- **方法原型：**

```python
rm_algo_pos2matrix(self, pose: list[float]) -> rm_matrix_t:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   pose  |    `list[float]`    |    位置姿态列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

rm_matrix_t: 旋转矩阵。

- **使用示例**
  
```python

```

## 旋转矩阵转位姿`rm_algo_matrix2pos()`

- **方法原型：**

```python
rm_algo_matrix2pos(self, matrix: rm_matrix_t, flag: int = 1) -> list[float]:
```

*可以跳转[rm_matrix_t](../struct/matrix.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `rm_matrix_t`    |    旋转矩阵。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态。- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z]；- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    解得目标位姿。    |

- **使用示例**
  
```python

```

## 基坐标系转工作坐标系`rm_algo_base2workframe()`

- **方法原型：**

```C
rm_algo_base2workframe(self, matrix: rm_matrix_t, pose_in_base: rm_pose_t, flag: int = 1) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `rm_matrix_t`    |    工作坐标系在基坐标系下的矩阵。    |
|   pose_in_base  |    `rm_pose_t`    |    工具端坐标在基坐标系下位姿。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

*可以跳转[rm_matrix_t](../struct/matrix.md)和[rm_pose_t](../struct/pose.md)查阅结构体详细描述*


- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    基坐标系在工作坐标系下的位姿。    |

- **使用示例**
  
```python

```

## 工作坐标系转基坐标系`rm_algo_workframe2base()`

- **方法原型：**

```python
rm_algo_workframe2base(self, matrix: rm_matrix_t, pose_in_work: rm_pose_t, flag: int = 1) -> list[float]:
```

*可以跳转[rm_matrix_t](../struct/matrix.md)和[rm_pose_t](../struct/pose.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   matrix  |    `rm_matrix_t`    |    工作坐标系在基坐标系下的矩阵。    |
|   pose_in_work  |    `rm_pose_t`    |    工具端坐标在基坐标系下位姿。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    工作坐标系在基坐标系下的位姿。    |

- **使用示例**
  
```python

```

## 末端位姿转成工具位姿`rm_algo_end2tool()`

- **方法原型：**

```python
rm_algo_end2tool(self, eu_end: rm_pose_t, flag: int = 1) -> list[float]:
```

*可以跳转[rm_pose_t](../struct/pose.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu_end  |    `rm_pose_t`    |    基于世界坐标系和默认工具坐标系的末端位姿。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    基于工作坐标系和工具坐标系的末端位姿。    |

- **使用示例**
  
```python

```

## 工具位姿转末端位姿`rm_algo_tool2end()`

- **方法原型：**

```python
rm_algo_tool2end(self, eu_tool: rm_pose_t, flag: int = 1) -> list[float]:
```

*可以跳转[rm_pose_t](../struct/pose.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   eu_tool  |    `rm_pose_t`    |    基于工作坐标系和工具坐标系的末端位姿。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。    |

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    基于世界坐标系和默认工具坐标系的末端位姿。    |

- **使用示例**
  
```python

```

## 计算环绕运动位姿`rm_algo_RotateMove()`

- **方法原型：**

```python
rm_algo_RotateMove(self, curr_joint: list[float], rotate_axis: int, rotate_angle: float, choose_axis: rm_pose_t, flag: int = 1) -> list[float]:
```

*可以跳转[rm_pose_t](../struct/pose.md)查阅结构体详细描述*

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   curr_joint  |    `list[float]`    |    当前关节角度,单位°。    |
|   rotate_axis  |    `int`    |    旋转轴: 1:x轴, 2:y轴, 3:z轴。    |
|   rotate_angle  |    `float`    |    旋转角度: 旋转角度, 单位°。    |
|   choose_axis  |    `rm_pose_t`    |    指定计算时使用的坐标系。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。|

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    目标位姿。    |

- **使用示例**
  
```python

```

## 计算沿工具坐标系运动位姿`rm_algo_cartesian_tool()`

- **方法原型：**

```python
rm_algo_cartesian_tool(self, curr_joint: list[float], move_lengthx: float, move_lengthy: float, move_lengthz: float, flag: int = 1) -> list[float]:
```

- **参数说明:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   curr_joint  |    `list[float]`    |    当前关节角度，单位：度。    |
|   move_lengthx  |    `float`    |    沿X轴移动长度，单位：米。    |
|   move_lengthy  |    `float`    |    沿Y轴移动长度，单位：米。    |
|   move_lengthz  |    `float`    |    沿Z轴移动长度，单位：米。    |
|   flag  |    `int`    |    选择姿态表示方式，默认欧拉角表示姿态;- 0: 返回使用四元数表示姿态的位姿列表[x,y,z,w,x,y,z];- 1: 返回使用欧拉角表示姿态的位姿列表[x,y,z,rx,ry,rz]。|

- **返回值:**

|   参数    |   类型    |   说明    |
| :--- | :--- | :--- |
|   list[]  |    `float`    |    目标位姿。    |

- **使用示例**
  
```python

```
