# <p class="hidden">Python: </p>力控数据结构体`rm_force_sensor_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
| `force`      | `float[6]`    | 当前力传感器原始数据，力的单位为N；力矩单位为Nm。         |
| `zero_force` | `float[6]`    | 当前力传感器系统外受力数据，力的单位为N；力矩单位为Nm。   |
| `coordinate` | `int`         | 系统外受力数据的坐标系，0为传感器坐标系，1为当前工作坐标系，2为当前工具坐标系 |
