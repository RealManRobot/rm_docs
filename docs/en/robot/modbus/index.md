# <p class="hidden">Modbus: </p>Modbus Slave Address Table of the RM Robotic Arm

The RealMan robotic arm supports the Modbus slave, which is available on both Modbus-RTU and Modbus-TCP, and all the slaves share the address table and functions.

- **Modbus-TCP**: Use the Ethernet port or WiFi for communication, with parameters set as follows: IP address: IP address of the robotic arm; port number: 502; and device ID: 1.
- **Modbus-RTU**: Use the controller 485 port for communication, with parameters set as follows: baud rate: 9600, 115200, or 460800; and slave address: 01.

::: warning
When users customize the register addresses, it is preferred to use the 3000 or later to prevent conflicts between the address occupation caused by program upgrades and the user-defined function.
:::

## 1. Address description

### 1.1 Coil

|  Address  |  Function  |  Value Description  |
| :--- | :--- | :--- |
|  0  |  Digital IO1 mode  |  0: input; <br>1: output  |
|  1  |  Digital IO1  |  0: low; <br>1: high  |
|  2  |  Digital IO2 mode  |  0: input; <br>1: output  |
|  3  |  Digital IO2  |  0: low; <br>1: high  |
|  4  |  Digital IO3 mode  |  0: input; <br>1: output  |
|  5  |  Digital IO3  |  0: low; <br>1: high  |
|  6  |  Digital IO4 mode  |  0: input; <br>1: output  |
|  7  |  Digital IO4  |  0: low; <br>1: high  |
|  48  |  Joint1 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  49  |  Joint2 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  50  |  Joint3 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  51  |  Joint4 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  52  |  Joint5 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  53  |  Joint6 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |
|  54  |  Joint7 enabling state  |  0: disable; <br>1: enable (control temporarily unavailable) |

### 1.2 Discrete input

|  Address  |  Function  |  Value Description  |
| :--- | :--- | :--- |
|  0  |  Digital IO1 mode  |  0: input; <br>1: output  |
|  1  |  Digital IO1  |  0: low; <br>1: high  |
|  2  |  Digital IO2 mode  |  0: input; <br>1: output  |
|  3  |  Digital IO2  |  0: low; <br>1: high  |
|  4  |  Digital IO3 mode  |  0: input; <br>1: output  |
|  5  |  Digital IO3  |  0: low; <br>1: high  |
|  6  |  Digital IO4 mode  |  0: input; <br>1: output  |
|  7  |  Digital IO4  |  0: low; <br>1: high  |

### 1.3 Holding register

::: tip
For the address ranges from 2000 to 2200 (including), the automatic saving is realized after the register powers off.
:::

|  Address  |  Function  |  Value Description  |
| :--- | :--- | :--- |
|  0  |  VOUT Output voltage |  0: 0 V; <br>2: 12 V; <br>3: 24 V |
|  1  |  Number of the given program, range: 1−100. <br>The data is cleared after the controller runs the program, and it is set to -1 if the run fails. |  Input: 1−100 <br>Output: 0: success; -1: failure |
|  2  |  Given running speed, range: 1−100. <br> After register 1 starts the robotic arm program, the speed takes effect, and the data is cleared | Speed range: 1−100  |
|  3  |  Control program, range: 1−3. The data is cleared after being detected by the controller. |  1: emergency stop; <br>2: pause; <br>3: continuation |
|  4−149  |  Reserved  |   |
|  150  |    Two high bytes of motion position parameter 1  |   |
|  151  |    Two low bytes of motion position parameter 1 |   |
|  152  |    Two high bytes of motion position parameter 2 |   |
|  153  |    Two low bytes of motion position parameter 2 |   |
|  154  |    Two high bytes of motion position parameter 3 |   |
|  155  |    Two low bytes of motion position parameter 3 |   |
|  156  |    Two high bytes of motion position parameter 4 |   |
|  157  |    Two low bytes of motion position parameter 4 |   |
|  158  |    Two high bytes of motion position parameter 5 |   |
|  159  |    Two low bytes of motion position parameter 5 |   |
|  160  |    Two high bytes of motion position parameter 6 |   |
|  161  |    Two low bytes of motion position parameter 6 |   |
|  162  |    Two high bytes of motion position parameter 7 |   |
|  163  |    Two low bytes of motion position parameter 7 |   |
|  164  |    Two high bytes of motion position parameter 8 |   |
|  165  |    Two low bytes of motion position parameter 8 |   |
|  166  |     Two high bytes of motion position parameter 9  |   |
|  167  |    Two low bytes of motion position parameter 9 |   |
|  168  |    Two high bytes of motion position parameter 10  |   |
|  169  |    Two low bytes of motion position parameter 10 |   |
|  170  |    Two high bytes of motion position parameter 11  |   |
|  171  |    Two low bytes of motion position parameter 11 |   |
|  172  |  Two high bytes of motion position parameter 12  |   |
|  173  |    Two low bytes of motion position parameter 12 |   |
|  174−179  |  Reserved  |   |
|  180  |  Motion type |  1: MoveJ; <br>2: MoveJ_P; <br>3: MoveL; <br>4: MoveC  |
|  181  | Motion command: 1: start; 2: stop  |   |
|  182  |  Speed percentage  |  1−100  |
|  183  |  Two high bytes of the blend radius  |   |
|  184  |  Two low bytes of the blend radius  |   |
|  185  |  Loop count |   |
|  228  |  Get and set the current collision stage. This address can be used to get and set the current collision stage.<br> Only the stages consistent with those in the JSON protocol are supported. If the value is beyond the range, the maximum stage 8 is automatically applied |  Collision stage: 0−8  |
|229|Real-time speed adjustment of motion | 1-100 speed ratio|

### 1.4 Input register

|  Address  |  Function  |  Value Description  |
| :--- | :--- | :--- |
|  0  |   End effector position X, in mm | Unsigned integer and two's complement for negative numbers  |
|  1  |   End effector position Y, in mm | Unsigned integer and two's complement for negative numbers  |
|  2  |   End effector position Z, in mm | Unsigned integer and two's complement for negative numbers  |
|  3  |   End effector orientation RX, in rad | Unsigned integer and two's complement for negative numbers  |
|  4  |   End effector orientation RY, in rad | Unsigned integer and two's complement for negative numbers  |
|  5  |   End effector orientation RZ, in rad | Unsigned integer and two's complement for negative numbers  |
|  6  |  Joint1 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  7  |  Joint2 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  8  |  Joint3 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  9  |  Joint4 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  10  |  Joint5 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  11  |  Joint6 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  12  |  Joint7 angle, in ° |  Unsigned integer and two's complement for negative numbers  |
|  13  |  Joint1 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  14  |  Joint2 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  15  |  Joint3 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  16  |  Joint4 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  17  |  Joint5 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  18  |  Joint6 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  19  |  Joint7 current, in mA |  Unsigned integer and two's complement for negative numbers  |
|  20  |  Joint1 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  21  |  Joint2 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  22  |  Joint3 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  23  |  Joint4 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  24  |  Joint5 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  25  |  Joint6 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  26  |  Joint7 voltage, in V |  Unsigned integer and two's complement for negative numbers  |
|  27  |  Joint1 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  28  |  Joint2 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  29  |  Joint3 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  30  |  Joint4 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  31  |  Joint5 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  32  |  Joint6 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  33  |  Joint7 temperature, in °C |  Unsigned integer and two's complement for negative numbers  |
|  34  |  System error code, refer to the JSON protocol for details  |   |
|  35  |  Heart rate (+1 per second)  |   |
|  36  |  Position X, in mm  |  Float  |
|  38  |  Position Y, in mm  |  Float  |
|  40  |  Position Z, in mm  |  Float  |
|  42  |  Orientation RX, in rad  |  Float  |
|  44  |  Orientation RY, in rad  |  Float  |
|  46  |  Orientation RZ, in rad  |  Float  |
|  48  |  Joint1 angle, in °  |  Float  |
|  50  |  Joint2 angle, in °  |  Float  |
|  52  |  Joint3 angle, in °  |  Float  |
|  54  |  Joint4 angle, in °  |  Float  |
|  56  |  Joint5 angle, in °  |  Float  |
|  58  |  Joint6 angle, in °  |  Float  |
|  60  |  Joint7 angle, in °  |  Float  |
| 99 | Program running state| 0: not started; <br>1: running; <br>3: paused |
|  100  |  Number of program lines of the robotic arm   |   |
|  101  |  ID of the currently running program, 0: no trajectory saved  |   |
|  200  |  Joint1 error code  |  Refer to the JSON protocol for details  |
|  201  |  Joint2 error code  |  Refer to the JSON protocol for details  |
|  202  |  Joint3 error code  |  Refer to the JSON protocol for details  |
|  203  |  Joint4 error code  |  Refer to the JSON protocol for details  |
|  204  |  Joint5 error code  |  Refer to the JSON protocol for details  |
|  205  |  Joint6 error code  |  Refer to the JSON protocol for details  |
|  206  |  Joint7 error code  |  Refer to the JSON protocol for details  |
|  300  |  Motion in position along planned trajectory  |  0: motion not in position; 1: motion in position; 2: planning failed  |
|  301  |  Trajectory planning state  |  0: no planning; 1: planning  |
| 302 | Emergency Stop Status | 0 - indicates a non-emergency stop state, 1 - indicates entering the emergency stop state |

## 2. Data conversion

The following is a conversion from the register value to the angle in float type:

```C
    float fun(quint16 H,quint16 L)
    {
        FloatTo4Bytes uValue;
        uValue.Byte[3] = (H >> 8) & 0xFF;
        uValue.Byte[2] = H & 0x00FF;
        uValue.Byte[1] = (L >> 8) & 0xFF;
        uValue.Byte[0] = L & 0x00FF;
        return uValue.a;
    }
```

## 3. Demo of motion control

For MoveJ, the demo of holding register addresses and target joint angles is as follows:

<table>
    <tr>
        <td>Address</td>
        <td>150</td>
        <td>151</td>
        <td>152</td>
        <td>153</td>
        <td>154</td>
        <td>155</td>
        <td>156</td>
        <td>157</td>
        <td>158</td>
        <td>159</td>
        <td>160</td>
        <td>161</td>
    </tr>
    <tr>
        <td>H(0x)</td>
        <td>4374</td>
        <td>52f2</td>
        <td>41c6</td>
        <td>4bc7</td>
        <td>4443</td>
        <td>0d50</td>
        <td>3dae</td>
        <td>147b</td>
        <td>bf72</td>
        <td>f1aa</td>
        <td>4040</td>
        <td>72b0</td>
    </tr>
    <tr>
        <td>Data</td>
        <td colspan="2">-11.252</td>
        <td colspan="2">-0.921</td>
        <td colspan="2">-28.0674</td>
        <td colspan="2">17.812</td>
        <td colspan="2">-26.277</td>
        <td colspan="2">-13.981</td>
    </tr>
</table>

**Description:**
Register addresses 150−161 store the target angles of joints 1−6, and two adjacent register addresses store a joint angle, in float type and with high bits in front. Conversion from the angle in float type to the register value:

```C
void fun(float value, quint16 *H, quint16 *L)
{
    quint8 buf[4] = {0};
    memcpy(buf, &value, sizeof(float));
    *H = ((quint16)buf[3]<<8)|buf[2];
    *L = ((quint16)buf[1]<<8)|buf[0];
}
```

Demo of MoveJ holding register addresses and motion control parameters:

|  Address  |  180  |  181  |182|183|184|185|
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
|  D  |  1  |  1  | 50|0|0|1|
|  Type  |  Motion type  | Motion command | Speed | Blend radius | Blend radius | Loop    |

**Description:**

1. Address 180: current motion type, 0: None; 1: MoveJ; 2: MoveJ_P; 3: MoveL; 4: MoveC;
2. Address 181: motion command, 1: start; 2: stop;
3. Address 182: speed percentage, 0−100;
4. Address 183: high bits of blend radius;
5. Address 184: low bits of blend radius;
6. Address 185: Loop count (for MoveC only).
