# <p class="hidden">C、C++: </p>姿态透传模式结参数`rm_movep_canfd_mode_t`

## 类成员变量说明

### 透传的目标位姿`pose`

当前坐标系下的目标位姿，支持四元数/欧拉角表示姿态。位置精度：0.001mm，欧拉角表示姿态，姿态精度：0.001rad，四元数方式表示姿态，姿态精度：0.000001

```C++
rm_pose_t rm_movep_canfd_mode_t::pose 
```

*可以跳转[rm_pose_t](../../struct/pose/index.md)查阅结构体详细描述。*

### 是否高跟随`follow`

表示驱动器的运动跟随效果，true 为高跟随，false 为低跟随。

```C++
bool rm_movep_canfd_mode_t::follow 
```

### 透传模式`trajectory_mode`

高跟随模式下，0-完全透传模式、1-曲线拟合模式、2-滤波模式

```C++
int rm_movep_canfd_mode_t::trajectory_mode
```

### 平滑系数`radio`

曲线拟合模式时radio是平滑系数（0-100），滤波模式时radio是滤波参数（范围在0至1000之间）

```C++
int rm_movep_canfd_mode_t::radio
```
