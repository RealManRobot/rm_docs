# <p class="hidden">C、C++: </p>角度透传模式参数`rm_movej_canfd_mode_t`

## 类成员变量说明

### 透传的目标关节角度数组`joint`

目标关节角度，单位：°，精度：0.001°

```C++
float* rm_movej_canfd_mode_t::joint
```

### 扩展关节角度`expand`

扩展关节角度（若没有扩展关节，那么此成员值无效）

```C++
float rm_movej_canfd_mode_t::expand 
```

### 是否高跟随`follow`

表示驱动器的运动跟随效果，true 为高跟随，false 为低跟随。

```C++
bool rm_movej_canfd_mode_t::follow 
```

### 透传模式`trajectory_mode`

高跟随模式下，0-完全透传模式、1-曲线拟合模式、2-滤波模式

```C++
int rm_movej_canfd_mode_t::trajectory_mode
```

### 平滑系数`radio`

曲线拟合模式时radio是平滑系数（0-100），滤波模式时radio是滤波参数（范围在0至1000之间）

```C++
int rm_movej_canfd_mode_t::radio
```
