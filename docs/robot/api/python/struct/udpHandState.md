# <p class="hidden">Python: </p>udp推送的灵巧手状态`rm_udp_hand_state_t`

## 属性

|  属性  |  类型  |  说明  |
| :--- | :--- | :--- |
|  `hand_pos`  |  `float`  |  当前角度  精度 0.001°，单位：° |
|  `hand_force`  |  `int`  |  当前驱动电流，单位：mA，精度：1mA |
|  `hand_state`  |  `int`  |  驱动错误代码，错误代码类型参考关节错误代码 |
|  `hand_err`  |  `int`  |  当前关节使能状态 ，1 为上使能，0 为掉使能 |
