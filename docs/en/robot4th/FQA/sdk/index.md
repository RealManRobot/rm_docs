# <p class="hidden">FAQ:</p> FAQs About Robotic Arm Secondary Development

## FAQs about development using APIs (C, C++, and Python)

### 1. How to set the cycle for cyclic query of the state of robotic arm?

For the cyclic query of the state of robotic arm, the robotic arm can use the UDP for back transmission, which can support a cycle of up to 5 ms.

### 2. When sending a movement command to control the robotic arm through API, there is an obvious pause between two points. How to diminish the pause?

1. Set the movement command to non-blocking mode, and send it to multiple points continuously. The robotic arm will execute it in sequence, thus reducing the pause between points. However, it is better to set the parameter for connecting the following trajectory.
2. Set the parameter for connecting the following trajectory. This parameter allows continuous planning.
3. Use moveit for planning, to combine the A-B trajectory and B-C trajectory into one, which can effectively avoid the acceleration and deceleration process and improve the operation efficiency.

::: warning
The robotic arm movement command can be cached for at most 300 points. Remember to maintain balance when sending a movement command, so as not to exceed the cache limit.
:::

### 3. Abnormal exit occurs when the python calls the pass-through interface and the Linux issues a segment reporting error. How to investigate the problem?

Investigate the problem from the following three aspects:

1. The pass-through interface needs to use the callback function. Check whether the callback function is set.
2. Check whether the environment configuration is correct.
3. The memory does not match, or it may be concerned with the program written by the user. Issue in batch to check whether the program has any error.

### 4. Is the current pose queried with the get_current_arm_state command the xyz Euler angle or zyx Euler angle?

We use the expression of roll-pitch-yaw, which corresponds to the ZYX Euler angle.

### 5. What interfaces can be used to call the API to control the robotic arm to move along the tool end?

Call the interface to switch the teaching motion frame. After switching the teaching frame to the tool frame, the robotic arm can be controlled to move along the tool end by using the teaching or stepping command.

### 6. Python reports a 32-bit or 64-bit error.

There is something wrong with the demo library. When Python calls a C library, the demo library is 64 bits by default. Therefore, you need to check whether it corresponds to 32 or 64 bits of the current device.

### 7. What types of secondary development does the robotic arm support?

At present, the robotic arm supports four types of secondary development.

1. Through API: Currently six development environments are supported: C, C++, C#, python, JSON, and matlab.
2. Through JSON protocol: No limit on the development language and system. Meanwhile, in JSON protocol, TCP and RS485 serial communication protocol are supported.
3. Through MODBUS-RTU/TCP.

### 8. How to reference online programming files in API?

Online programming files can be directly saved to the controller, and can be triggered by using JSON protocol, API, MODBUS-RTU/TCP and I/O.
