# <p class="hidden">C、C++: </p>复合模式拖动示教参数`rm_multi_drag_teach_t`

## 类成员变量说明

### `free_axes`

自由驱动方向[x,y,z,rx,ry,rz]，0-在参考坐标系对应方向轴上不可拖动，1-在参考坐标系对应方向轴上可拖动

```C++
int rm_multi_drag_teach_t::free_axes[6]
```

### `frame`

参考坐标系，0-工作坐标系 1-工具坐标系。

```C++
int rm_multi_drag_teach_t::frame
```

### `singular_wall`

仅在六维力模式拖动示教中生效，用于指定是否开启拖动奇异墙，0表示关闭拖动奇异墙，1表示开启拖动奇异墙，若无配置参数，默认启动拖动奇异墙

```C++
int rm_multi_drag_teach_t::singular_wall
```
