# <p class="hidden">Python: </p>UDP-Based Pushed Dexterous Hand State `rm_udp_hand_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `hand_pos`  |  `List[int]`  |  Dexterous hand position |
|  `hand_angle`  |  `List[int]`  |  Dexterous hand angle |
|  `hand_force`  |  `List[int]`  |  Dexterous hand DoF force, in mN |
|  `hand_state`  |  `List[int]`  |  Current dexterous hand state, defined by the dexterous hand manufacturer |
|  `hand_err`  |  `int`  |  Dexterous hand system error, defined by the dexterous hand manufacturer. For example, the INSPIRE-ROBOTS state codes are as follows: 1: error, 0: no error |
