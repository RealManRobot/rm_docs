# <p class="hidden">CANFD: </p>Memory Control Table

## 1. Details of control table

The information and control parameters of the module itself form a one-dimensional control table, which is stored in the RAM and Flash of the control chip respectively.

When the system is powered on, the control chip reads the control table from Flash to RAM. During the operation of the module, the user reads and writes the control table in RAM to obtain the module status or control the module.

If the user writes 1 to the "Save Data to Flash Flag" in the table, the control chip copies the contents of the present RAM table to Flash to realize power-off saving.
The contents of the control table are shown below:

<div class='tableWrap'>

|  **Address**  |  **Designation**  |  **Command**  |  **Authority**  |  **Initial value**  |
| :--- | :--- | :--- | :--- | :--- |
|  **0x00**  |  Reserved  |  Reserved  |  --  |  0x1314  |
|  **0x01**  |  SYS_ID  |  Driver ID  |  --  |  1  |
|  **0x02**  |  SYS_MODEL_TYPE  |  Driver model, please refer to [Definition of Driver Model](#232244) for details. |  R  |  --  |
|  **0x03**  |  SYS_FW_VERSION  |  Firmware version, for example, 0x0102 stands for the version 1.2  |  R  |  --  |
|  **0x04**  |  SYS_ERROR  |  Error code  |  R  |  --  |
|  **0x05**  |  SYS_VOLTAGE  |  System voltage (0.01 V)  |  R  |  --  |
|  **0x06**  |  SYS_TEMP  |  System temperature (0.1°C)  |  R  |  --  |
|  **0x07**  |  SYS_REDU_RATIO  |  Reduction ratio  |  R  |  Consistent with program compilation 80/100  |
|  **0x08~0x09**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0x0A**  |  SYS_ENABLE_DRIVER  |  Enable the driver flag, 1: enable, 0: disable. (Do not issue any command until 5 ms later after disabling the driver)  |  R/W  |  0  |
|  **0x0B**  |  SYS_ENABLE_ON_POWER  |  Power-on to enable the driver flag, 1: enable; 0: disable.  |  R/W  |  1  |
|  **0x0C**  |  SYS_SAVE_TO_FLASH  |  Save data to Flash flag, 1: Save, 0: Not save. Save under the disabled state. (Do not issue a command until 50 ms later after sending Save to Flash)  |  R/W  |  0  |
|  **0x0D**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0x0E**  |  SYS_SET_ZERO_POS  |  Set the current position to zero point flag, 1: Set; 0: Not set  |  R/W  |  0  |
|  **0x0F**  |  SYS_CLEAR_ERROR  | Clear the error flag, 1: Clear, 0: Not clear  |  R/W  |  0  |
|  **0x10**  |  CUR_CURRENT_L  |  Current current low 16 bits (mA)  |  R  |  0  |
|  **0x11**  |  CUR_CURRENT_H  |  Current current high 16 bits (mA)  |  R  |  --  |
|  **0x12**  |  CUR_SPEED_L  |  Current joint speed low 16 bits (RPM, with a resolution of 0.02 RPM)  |  R  |  --  |
|  **0x13**  |  CUR_SPEED_H  |  Current joint speed high 16 bits (RPM, with a resolution of 0.02 RPM)  |  R  |  --  |
|  **0x14**  |  CUR_POSITION_L  |  Current position low 16 bits (units), with an accuracy of 0.0001°  |  R  |  --  |
|  **0x15**  |  CUR_POSITION_H  |  Current position high 16 bits (units), with an accuracy of 0.0001°  |  R  |  --  |
|  **0x16~0x1E**  |  Reserved  |  Reserved |  --  |  --  |
|  **0x1F**  |  ON_DELAY  |  0 indicates a delay in powering up the joint, 1 indicates no delay in powering up the joint  |  R/W  |  0  |
|  **0x20~29**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0X2A**  |  MOT_MODEL_ID0  |  Globally unique ID of module: 15:0|  R  |  -- |
|  **0X2B**  |  MOT_MODEL_ID1  |  Globally unique ID of module: 31:16 |  R  | --  |
|  **0X2C**  |  MOT_MODEL_ID2  |  Globally unique ID of module: 47:32  |  R  | --  |
|  **0X2D**  |  MOT_MODEL_ID3  |  Globally unique ID of module: 63:48  |  R  |  -- |
|  **0X2E**  |  MOT_MODEL_ID4  |  Globally unique ID of module: 79:64  |  R  |  -- |
|  **0X2F**  |  MOT_MODEL_ID5  |  Globally unique ID of module: 95:80  |  R  | --  |
|  **0x30**  |  TAG_WORK_MODE  |  Work mode: 0-open loop, 1-current mode, 2-speed mode, 3-position mode  |  R/W  |  3  |
|  **0x31**  |  TAG_OPEN_PWM  |  Duty ratio in open loop mode (0−100)  |  R/W  |  0  |
|  **0x32**  |  TAG_CURRENT_L  |  Target current low 16 bits (mA)  |  R/W  |  0  |
|  **0x33**  |  TAG_CURRENT_H  |  Target current high 16 bits (mA)  |  R/W  |  0  |
|  **0x34**  |  TAG_SPEED_L  |  Target joint speed low 16 bits (RPM, with a resolution of 0.002 RPM)  |  R/W  |  0  |
|  **0x35**  |  TAG_SPEED_H  |  Target joint speed high 16 bits (RPM, with a resolution of 0.002 RPM)  |  R/W  |  0  |
|  **0x36**  |  TAG_POSITION_L  |  Target position low 16 bits (units), with an accuracy of 0.0001°  |  R/W  |  0  |
|  **0x37**  |  TAG_POSITION_H  |  Target position high 16 bits (units), with an accuracy of 0.0001°  |  R/W  |  0  |
|  **0X38**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0X39**  |  Speed feed forward switch|  The stored value is the position loop following coefficient, with valid values ranging from 0 to 100 and a default value of 0.  |  R/W  |  0  |
|  **0x3A~** **0x3F**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0x40**  |  LIT_MAX_CURRENT  |  Maximum current (mA) (Reserved) |  R/W  |  --  |
|  **0x41**  |  LIT_MAX_SPEED  |  Maximum joint speed (RPM, resolution 1/gear ratio RPM)  |  R/W  |  3000  |
|  **0x42**  |  LIT_MAX_ACC  |  Maximum joint acceleration (0.1 rpm/s)  |  R/W  |  5000  |
|  **0x43**  |  LIT_MAX_DEC  |  Maximum joint deceleration (0.1 rpm/s) (Reserved) |  R/W |  -- |
|  **0x44**  |  LIT_MIN_POSITION_L  |  Minimum position low 16 bits (units), with an accuracy of 0.0001°  |  R/W  |  --  |
|  **0x45**  |  LIT_MIN_POSITION_H  |  Minimum position high 16 bits (units), with an accuracy of 0.0001°  |  R/W  | --  |
|  **0x46**  |  LIT_MAX_POSITION_L  |  Maximum position low 16 bits (units), with an accuracy of 0.0001°  |  R/W  |  --  |
|  **0x47**  |  LIT_MAX_POSITION_H  |  Maximum position high 16 bits (units), with an accuracy of 0.0001°  |  R/W  | --  |
|  **0X48**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0X49**  |  IAP_FLAG  |  IAP updates flag position online: 0-Not update, 1-Update  |  R/W  |  0 |
|  **0x4A~0x50**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0x51**  |  SEV_CURRENT_P  |  Current loop P parameter  |  R/W  |  --  |
|  **0x52**  |  SEV_CURRENT_I  |  Current loop I parameter  |  R/W  |  --  |
|  **0x53**  |  SEV_CURRENT_D  |  Current loop D parameter  |  R/W  |  --  |
|  **0x54**  |  SEV_SPEED_P  |  Current loop P parameter  |  R/W  |  --  |
|  **0x55**  |  SEV_SPEED_I  |  Speed loop I parameter  |  R/W  |  --  |
|  **0x56**  |  SEV_SPEED_D  |  Speed loop D parameter  |  R/W  |  --  |
|  **0x57**  |  SEV_SPEED_DS  |  Speed P dead zone  |  R/W  |  --  |
|  **0x58**  |  SEV_POSITION_P  |  Position loop P parameter  |  R/W  |  --  |
|  **0x59**  |  SEV_POSITION_I  |  Position loop I parameter  |  R/W  |  --  |
|  **0x5A**  |  SEV_POSITION_D  |  Position loop D parameter  |  R/W  |  --  |
|  **0x5B**  |  SEV_POSITION_DS  |  Position P dead zone  |  R/W  |  --  |
|  **0x5C**  |  SEV_POS_SMOOTH  |  Position Loop Smoothing Coefficient   |  R/W  |  The larger the coefficient, the better the following effect  |
|  **0x5D**  |  SEV_SPD_FF  |  Speed Feedforward Coefficient  |  R/W  |  The larger the coefficient, the better the following effect  |
|  **0x5E~0X68**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0X69**  |  LOW_POWER_MODE  |  Low Power Consumption Mode  |  R/W  |  --  |
|  **0X6A~77**  |  Reserved  |  Reserved  |  --  |  --  |
|  **0x78**  |  ERROR  |  Error code  |  R  |  0  |
|  **0x79**  |  END_BOARD_MODE  |  End-effector Mode  |  R/W  |  0  |
|  **0x7A~0x91**  |  Reserved  |  Reserved  |  --  |  --  |

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

::: warning

1. After the ID is successfully set, it is necessary to de-energize and then restart the joint. The module will conduct communication with the new ID.
2. The parameters of the three closed loops have been set before leaving the factory. No re-adjustment is required if not necessary.

:::

## 2. Additional notes on the control table

### 2.1 Description of flags

There are 6 flag variables in total, whose values can only be 1 or 0, and other values are invalid.

See the table below for more details.

<div class='tableWrap'>

|  **Address**  |  **Definition**  |  **Description**  |
| --- | --- | --- |
|  0x0a  |  Enable the driver flag  |  1: Enable the driver; 0: Disable the driver and open the phase-locked relay.  |
|  0x0b  |  Power-on to enable the driver flag  |  1: The driver is enabled and works in the given mode after power-on; 0: The driver is not enabled after power-on.  |
|  0x0c  | Save data to Flash flag  |  1: The chip writes the control table in the current RAM into Flash, and the system automatically resets.  |
|  0x0d  | Automatically calibrate the absolute position flag  |  1: The driver will calibrate the absolute position sensor (digital potentiometer) according to the value of the encoder, and save the calibrated data to Flash. The module must be currently under no load, and can work stably in the position servo mode and in the enabled state; otherwise, unpredictable consequences will be caused. The system automatically resets.  |
|  0x0e  |  Set the current position to zero point flag  |  1: Save the current position as the zero point, which will take effect immediately. After the data is saved to Flash, the saved position will be used as the zero point after power-on next time. The system automatically resets.  |
|  0x0f  |  Clear error flag  |  1: Attempt to clear the current error. The system automatically resets.  |

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>

### 2.2 Description of units

For 10-joint and 30-joint, the unit of the target current and the actual feedback current is mA;<br>
For 60-joint, the unit of the target current and the actual feedback current is 2 mA;<br>
The unit of feedforward current of all joints is 2 mA;<br>
The unit of target speed at the joint output end is 0.002 RPM;<br>
The unit of actual speed at the joint output end is 0.002 RPM;<br>
The unit of feedforward speed at the joint output end is 0.002 RPM;<br>
The unit of target position and actual feedback position at the joint output end is 0.0001°;<br>
The unit of voltage is 0.01 V;<br>
The unit of system temperature is 0.1°C. <br>

### 2.3 Description of work modes

The module can work in four modes, namely the open loop mode, current mode, speed mode, and position mode.
The module can switch among the four modes by changing the TAG_WORK_MODE field (0x30) in the control table.

1. The open loop mode directly controls the duty ratio of the driver output to the motor, which is prone to danger and therefore is not recommended.
2. The current mode controls the target output current (torque) of the motor.
3. The speed mode controls the output speed of motor. It is not recommended unless the module can rotate in a whole circle.
4. The position module controls the motor servo position.

The target duty ratio, current, speed, and position in the 0x3* field only work when the module is in the corresponding work mode.
The maximum current, maximum speed, and maximum acceleration/deceleration in fields 0x40 to 0x46 are valid in the current, speed, and position modes, and the minimum/maximum position is valid only in the position servo mode, which specifies that the target value for the position servo cannot be set beyond this range.

If the set target position is less than the minimum value or exceeds the maximum value, the module will only move to the minimum or maximum value. If the module is out of range when the driver is enabled, it will automatically move to the minimum/maximum value.

### <div id = '232244'>2.4 Definition of Driver Model</div>

The joint types corresponding to the memory control table address 0x02 of the driver model are explained as follows:

|Joint Type|Character Definition|Memory Vector Table Definition|
|:-:|:-:|:-:|
|Joint 10|J14|0x02|
|Joint 30|J17|0x03|
|Joint 60|J20|0x04|
|Joint 120|J25|0x05|
|Gripper|GRIPPER|0x06|
|Joint 03|J3|0x07|

## 3. Error code

The error code has 16 bits, and each bit represents a type of error. If an error occurs, the corresponding bit will be displayed as 1. If an unrecoverable error occurs, the module will automatically enter the driver disabled state, and users need to write 1 to the "Clear Error Flag" field (0x0f) to clear the error.

The meaning of each error bit is as follows:

<div class='tableWrap'>

|  **Bit**  |  **Definition**  |  **Description**  |
| :--- | :--- | :--- |
|  0x0001  |  FOC rate too high  |  FOC rate too high  |
|  0x0002  |  Overvoltage  |  Input voltage exceeds the joint's voltage rating  |
|  0x0004  |  Undervoltage  |  Input voltage is below the joint's voltage rating  |
|  0x0008  |  Over-temperature  |  Joint temperature reaches the alarm temperature |
|  0x0010  |  Startup failure  |  Joint startup FOC error  |
|  0x0020  |  Encoder error  |  Joint self-check failure or unable to recognize the current angle  |
|  0x0040  |  Overcurrent  |  Motor current is too high  |
|  0x0080  |  Software error  |  Hardware and software do not corresponding, current detection error  |
|  0x0100  |  Temperature sensor error  |  Temperature sensor fails to obtain joint temperature properly  |
|  0x0200  |  Position out-of-limit error  |  Current/target position beyond the limit  |
|  0x0400  |  Illegal joint ID  |  Incorrect joint ID |
|  0x0800  |  Position tracking error out-of-limit  |  Target position and current position difference exceeds threshold; position error tracking limit protection  |
|  0x1000  |  Current detection error  |  Current sensor detection error during power-on  |
|  0x2000  |  Brake failure  |  Brake release failure; internal Hall signal incorrect  |
|  0x4000  |  Position command step  |  Current position and target position error is greater than 10 degrees  |
|  0x8000  |  Multi-revolution data loss  |  Multi-turn loss of count |

</div>

<style scoped>
    .tableWrap {
        display: table;
        width: 100%;
        table-layout: fixed;
    }
    .tableWrap tr th, .tableWrap td {
        width: auto;
    }
</style>
