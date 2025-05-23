# <p class="hidden">Python: </p>UDP-Based Pushed Expansion Joint State `rm_udp_expand_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `pos`  |  `float`  |  Current angle, unit: °, accuracy: 0.001° |
|  `current`  |  `int`  |  Current drive current, unit: mA, accuracy: 1 mA |
|  `err_flag`  |  `int`  |  Drive error code, refer to joint error codes for details |
|  `en_flag`  |  `int`  |  Current joint enabling state, 1: enable, 0: disable  |
|  `joint_id`  |  `int`  |  Joint ID |
|  `mode`  |  `int`  |  Current lifting state, 0: idle, 1: forward speed motion, 2: forward position motion, 3: backward speed motion, 4: backward position motion |
