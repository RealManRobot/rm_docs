# <p class="hidden">C、C++: </p>System Installation Method Configuration `installPos`

The RealMan robotic arm supports different installation methods. However, the robot's dynamic model parameters and frame directions may vary depending on the installation method. This interface is used to set and read the robot arm's installation method.

## Set installation method parameters`rm_set_install_pose()`

- **Method prototype:**

```C
int rm_set_install_pose(rm_robot_handle * handle,float x,float y,float z)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `x`  |    Input    |    Rotation angle, in °.   |
|  `y`  |    Input    |    Pitch angle, in °.   |
|  `z`  |    Input    |    Azimuth angle, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Set installation angles: rotation angle 30°, pitch angle 60°, and azimuth angle 90°
float x = 30;
float y = 60;
float z = 90;
ret = rm_set_install_pose(robot_handle,x,y,z);
```

## Get installation method parameters`rm_get_install_pose()`

- **Method prototype:**

```C
int rm_get_install_pose(rm_robot_handle * handle,float * x,float * y,float * z)
```

*Jump to [rm_robot_handle](../../struct/robotHandle/index.md) for details of the structure.*

- **Parameter description:**

|   Parameter    |  Type    |   Description    |
| :--- | :--- | :--- |
|   `handle`  |    Input    |    Robotic arm handle.   |
|  `x`  |    Output    |    Store the rotation angle, in °.   |
|  `y`  |    Output    |    Store the pitch angle, in °.   |
|  `z`  |    Output    |    Store the azimuth angle, in °.   |

- **Return value:**

0 represents success. For other error codes, please refer to the [API2 Error Codes](../../../apierrorList2/index.md).

- **Usage demo**
  
```C
//Get installation angles
float fx,fy,fz;
ret = Get_Install_Pose(m_sockhand,&fx,&fy,&fz);
```
