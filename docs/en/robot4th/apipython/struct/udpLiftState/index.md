# <p class="hidden">Python: </p>UDP-Based Pushed Lifting Mechanism State `rm_udp_lift_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `height`  |  `int`  |  Height of the current lifting mechanism, unit: mm, accuracy: 1 mm  |
|  `pos`  |  `float`  |  Current angle, unit: °, accuracy: 0.001° |
|  `current`  |  `int`  |  Current drive current, unit: mA, accuracy: 1 mA |
|  `err_flag`  |  `int`  |  Drive error code, refer to joint error codes for details |
|  `en_flag`  |  `int`  |  Current joint enabling state, 1: enable, 0: disable  |
