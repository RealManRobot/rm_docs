# <p class="hidden">Python: </p>Force Sensor Data Structure `rm_force_sensor_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `force`      | `List[float]`    | Original data of the current force sensor, force: N, torque: N.m.        |
| `zero_force` | `List[float]`   | External force data of the current force sensor, force: N, torque: N.m.  |
| `coordinate` | `int`         | Frame for external force data, 0: sensor frame, 1: current tool frame, 2: current tool frame. |
