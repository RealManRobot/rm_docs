# <p class="hidden">JSON Protocol：</p>Appendix: Error Codes

## System error code

System errors are divided into general and severe levels according to their severity, with definitions as follows:

- **General**: When the robotic arm encounters an error during operation, it triggers an error alarm to inform the user of the relevant abnormality. After the error is cleared, the robotic arm can continue to function normally.
- **Severe**: This refers to serious issues such as hardware damage or software crashes. Under such conditions, the robotic arm should not be used further.

<div class='tableWrap'>

|S/N|Error Code (Hexadecimal)|Error Code (Decimal)|Description|Causes|Suggested Actions|Error Level|
|:--|:--|:--|:--|:--|:--|:--|
|1|0x0000|0|Normal system.|-|You can use our robotic arm as normal.|-|
|2|0x1001|4097|Abnormal joint communication.|-|Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|3|0x1002|4098|Target angle out of limit. |The command sent exceeds the maximum angle limit of the robotic arm joints|Modify the sent command according to the angle limits of the robotic arm joints.|<span style="color: #EC6102;">General</span>|
|4|0x1003|4099|Point unreachable as a singularity. |Pose reaches the singularity point of the robotic arm|It is recommended to refer to the user manual for the explanation of singularity points and avoid singular regions.|<span style="color: #EC6102;">General</span>|
|5|0x1004|4100|Real-time kernel communication error.|The hardware and software versions of the robotic arm do not match|It is recommended to contact our technical support promptly to re-flash the corresponding firmware.|<span style="color: red;">Severe</span>|
|6|0x1005|4101|Joint communication bus error.|-|Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|7|0x1006|4102|Planning layer kernel error.|The hardware and software versions of the robotic arm do not match|It is recommended to contact our technical support promptly to re-flash the corresponding firmware.|<span style="color: red;">Severe</span>|
|8|0x1007|4103|Joint overspeed.|The robotic arm is moving too fast, causing joint overspeed|This usually occurs during transparency and requires reducing the planned trajectory speed.|<span style="color: #EC6102;">General</span>|
|9|0x1008|4104|End interface board disconnected.|1. Check if the end light is always on.<br>2. Check if there is voltage output from the end interface board.|1. If the end light is always on, you can perform drag teaching. Connect the teach pendant and click on the expansion on the page. Turn on the end power output.<br>2. If the end light is not on, you cannot perform drag teaching. Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|10|0x1009|4105|Speed out of limit.|The robotic arm's movement speed exceeds the speed limit of the robotic arm|This usually occurs during transparency and requires reducing the planned trajectory speed.|<span style="color: #EC6102;">General</span>|
|11|0x100A|4106|Acceleration out of limit. |The robotic arm's movement speed exceeds the acceleration limit of the robotic arm|This usually occurs during transparency and requires appropriately reducing the planned trajectory's acceleration.|<span style="color: #EC6102;">General</span>|
|12|0x100B|4107|Joint brake release failed.|The joint brake is not released, which is usually related to the startup current|Solution approach: <br>1. After power-on is complete, press and hold the green button at the end of the robotic arm for an extended period, observe whether the corresponding joint can be normally dragged.<br>2. If it cannot be normally dragged, perform disable and enable operations on the abnormal joint in the security configuration interface.|<span style="color: #EC6102;">General</span>|
|13|0x100C|4108|Overspeed during drag teaching.|Dragging the teach pendant too fast has caused this issue|Slow down the speed when dragging the robotic arm.|<span style="color: #EC6102;">General</span>|
|14|0x100D|4109|Robotic arm collision.|The robotic arm stopped operating after a collision occurred|1. Reduce the collision protection level.<br>2. If there is a load at the end, it is necessary to re-establish the tool coordinate system.|<span style="color: #EC6102;">General</span>|
|15|0x100E|4110|Null work frame. |-|When running online programming, a non-existent work coordinate system was entered.|<span style="color: #EC6102;">General</span>|
|16|0x100F|4111|Null tool frame.|-|When running online programming, a non-existent work coordinate system was entered.|<span style="color: #EC6102;">General</span>|
|17|0x1010|4112|Joint disabling error.|Take appropriate measures based on the specific situation at the time|Solution approach:<br>1. Click on System Information in the teach pendant to clear the current error message, and then go to `Configuration` - `Robot Arm Configuration` - `Security Configuration` to select the corresponding joint and click on Enable.<br>2. If the error message cannot be cleared or there are other issues, Please contact our technical support promptly.|<span style="color: #EC6102;">General</span>|
|18|0x1011|4113|Arc planning error.|The circular arc motion trajectory includes the singularity area of the robotic arm|Reselect the waypoints.|<span style="color: #EC6102;">General</span>|
|19|0x1012|4114|Self-collision error.|After adding a load to the end of the robotic arm, it collides with the arm body, causing the robotic arm to stop moving|Choose reasonable waypoints to avoid the risk of self-collision.|<span style="color: #EC6102;">General</span>|
|20|0x1013|4115|Electronic fence collision error.|The robotic arm stops moving after detecting a collision with the electronic fence|1. Manually clear the error and move the robotic arm within/outside the set electronic fence.<br>2. The range of the electronic fence can be adjusted as needed.|<span style="color: #EC6102;">General</span>|
|21|0x1014|4116|Joint out of soft limit error.|Joint exceeds soft limit|Press and hold the green button at the end of the robotic arm to automatically recover within the limit range.|<span style="color: #EC6102;">General</span>|
|22|0x2001|8193|Abnormal gripper.|-|Use the upper computer software for the gripper to check the specific error code and message, and take corresponding action or contact our technical support.|<span style="color: #EC6102;">General</span>|
|23|0x2002|8194|Abnormal dexterous hand.|-|Use the upper computer software for the dexterous hand to check the specific error code and message, and take corresponding action or contact our technical support.|<span style="color: #EC6102;">General</span>|
|24|0x2003|8195|Abnormal 6-DoF force module.|-|Contact our technical support for factory repair and inspection.|<span style="color: red;">Severe</span>|
|25|0x2004|8196|Abnormal 1-DoF force module.|-|Contact our technical support for factory repair and inspection.|<span style="color: red;">Severe</span>|
|26|0x2005|8197|Abnormal output current.|The end effector might be jammed, increasing the demand for current, and the end effector continuously outputs a large current for an extended period, leading to overcurrent|Please contact our technical support for repair and handling.|<span style="color: red;">Severe</span>|
|27|0x5001|20481|Reserved.|-|-|-|
|28|0x5002|20482|Reserved.|-|-|-|
|29|0x5003|20483|Controller over-temperature.|The controller temperature has reached the alarm temperature|The controller temperature has reached the alarm level, please let it rest or power it off to cool down.|<span style="color: red;">Severe</span>|
|30|0x5004|20484|Reserved.|-|-|-|
|31|0x5005|20485|Controller overcurrent.|The controller current is too high|It is recommended to check the power supply output. It is suggested to use a switching power supply with an output of 20-27V, over 600W, and equipped with hiccup mode and constant current output for 1 second, for the robotic arm's self-inspection and self-calibration after powering up. <br>Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|32|0x5006|20486|Controller undercurrent.|Controller current is too low|It is recommended to check the power supply output. It is suggested to use a switching power supply with an output of 20-27V, over 600W, and equipped with hiccup mode and constant current output for 1 second, for the robotic arm's self-inspection and self-calibration after powering up. <br>Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|33|0x5007|20487|Controller overvoltage.|Input voltage exceeds the robotic arm's voltage tolerance range|Check if the voltage input is between 20-27V, the Gen 3 controller supports up to 30V.|<span style="color: red;">Severe</span>|
|34|0x5008|20488|Controller undervoltage.|Input voltage is below the robotic arm's voltage tolerance range|It is recommended to check the power supply output. It is suggested to use a switching power supply with an output of 20-27V, over 600W, and equipped with hiccup mode and constant current output for 1 second, for the robotic arm's self-inspection and self-calibration after powering up. <br>Please contact our technical support promptly.|<span style="color: red;">Severe</span>|
|35|0x5009|20489|Real-time layer communication error.|The hardware and software versions of the robotic arm do not match|Please contact our technical support promptly to re-flash the corresponding firmware.|<span style="color: red;">Severe</span>|

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
    .tableWrap tr th:nth-child(6),
    .tableWrap td:nth-child(6) {
        width: 256px;
    }
    .tableWrap tr th:nth-child(7),
    .tableWrap td:nth-child(7) {
        width: 32px;
    }
</style>

## Joint error code

System errors are divided into general and severe levels according to their severity, with definitions as follows:

- **General**: Overall system design issues, which can be normally used after troubleshooting and resolution; or after reconfiguring parameters/rebooting, the customer side can be used normally.
- **Severe**: Requires reprogramming the firmware or returning to the factory for repair.

<div class='tableWrap'>

<table>
    <tr>
        <th>S/N</th>
        <th>Error Code (Hexadecimal)</th>
        <th>Error Code (Decimal)</th>
        <th>Description</th>
        <th>Causes</th>
        <th>Suggested Actions</th>
        <th>Error Level</th>
    </tr>
    <tr>
        <td>1</td>
        <td>0x0000</td>
        <td>0</td>
        <td>Normal joint.</td>
        <td>-</td>
        <td>You can use our robotic arm normally.</td>
        <td>-</td>
    </tr>
    <tr>
        <td>2</td>
        <td>0x0001</td>
        <td>1</td>
        <td>FOC error.</td>
        <td>FOC frequency too high</td>
        <td>Please contact our technical support promptly.</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td>3</td>
        <td>0x0002</td>
        <td>2</td>
        <td>Overvoltage.</td>
        <td>Input voltage exceeds the joint's voltage rating</td>
        <td>Check if the voltage input is between 20-27V.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>4</td>
        <td>0x0004</td>
        <td>4</td>
        <td>Undervoltage.</td>
        <td>Input voltage is below the joint's voltage rating range</td>
        <td>1. Commonly occurs when the battery power supply is insufficient, such as during low battery levels, when starting the joints, or during rapid movements under high load conditions.<br>2. Check the power supply output. It is recommended to use a switch power supply with an output of 20-27V, over 600W of power, and with features like pulse mode and constant current output for 1 second, to allow the robotic arm to perform self-inspection and self-calibration after powering up.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>5</td>
        <td>0x0008</td>
        <td>8</td>
        <td>Over-temperature.</td>
        <td>The joint temperature reaches the alarm temperature.</td>
        <td>1. The joint temperature reaches the overtemperature threshold of 85°C, please rest or power off to cool down.<br>2. It is recommended to check whether the joint is overloaded or has collided.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>6</td>
        <td>0x0010</td>
        <td>16</td>
        <td>Start failed.</td>
        <td>The joint did not start up normally</td>
        <td>Check the power supply output power. It is recommended to use a switch power supply with an output of 20-27V, over 600W of power, and with features like pulse mode, constant current output for 1 second, for self-inspection and self-calibration after powering on the robotic arm.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>7</td>
        <td>0x0020</td>
        <td>32</td>
        <td>Encoder error.</td>
        <td>The joint self-inspection fails or cannot recognize the current angle</td>
        <td>1. If multiple joints of the robotic arm show encoder errors, it is recommended to check the power supply output power and restart the robotic arm. The reason for this phenomenon is insufficient power supply output power, and the robotic arm cannot perform normal self-inspection and self-calibration.<br>2. A single joint shows encoder error, you can try to clear it; if it cannot be cleared it may be due to excessive load, error reported after startup, it is recommended to reduce the load and power on again to solve.<br>3. The encoder read position continuously deviates more than 1 degree from the last data (consider the flange position shift if there is no hard stop output).<br>4. Unable to eliminate and the drive board lights up in blue (not visible externally), encoder fault.<br>5. The target position sent by the upper machine exceeds the set limit position. </td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>8</td>
        <td>0x0040</td>
        <td>64</td>
        <td>Overcurrent.</td>
        <td>Instantaneous current is too high</td>
        <td>1. Check if the power supply and load are normal;<br>2. Check if there is a large position command step causing excessive instantaneous current. </td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>9</td>
        <td>0x0080</td>
        <td>128</td>
        <td>Software error.</td>
        <td>1. Hardware and software do not corresponding<br>2. Current detection error</td>
        <td>Please contact our technical support in time.<br>Re-recording the corresponding firmware can solve the problem of hardware and software not corresponding.</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td>10</td>
        <td>0x0100</td>
        <td>256</td>
        <td>Temperature Sensor Error.</td>
        <td>The temperature sensor fails to normally obtain the joint temperature</td>
        <td>Please contact our technical support in time.</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td>11</td>
        <td>0x0200</td>
        <td>512</td>
        <td>Position Limit Error.</td>
        <td>The current position of the joint exceeds the joint limit</td>
        <td>Solution ideas:<br>1. Check the current joint angle on the single joint upper machine;<br>2. Adjust the joint limit to be greater than the current angle;<br>3. Clear the joint error.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>12</td>
        <td>0x0400</td>
        <td>1024</td>
        <td>Invalid joint ID.</td>
        <td>Incorrect joint ID input</td>
        <td>Enter the correct joint ID information.<br>The correct setting range for joint ID is 1-7, if the joint ID is less than 1 or greater than 7, this error will occur.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>13</td>
        <td>0x0800</td>
        <td>2048</td>
        <td>Position Tracking Error.</td>
        <td>1. Position error tracking limit exceeded<br>2. The difference between the target position and the current position exceeds the threshold value</td>
        <td>The error angle is greater than the maximum angle following angle limit (the difference between the target motor position and the encoder read position is greater than 80 degrees).</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>14</td>
        <td>0x1000</td>
        <td>4096</td>
        <td>Current Detection Error.</td>
        <td>Current sensor detection error when powering on</td>
        <td>Please contact our technical support in time.<br>Circuit board detects current beyond the correct range (most likely circuit board issue).</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td rowspan="2">15</td>
        <td rowspan="2">0x2000</td>
        <td rowspan="2">8192</td>
        <td rowspan="2">Brake Release Failure.</td>
        <td>1. Joint brake did not release normally</td>
        <td> It is recommended to check the power supply output. It is suggested to use a switching power supply with an output of 20-27V, over 600W, and equipped with hiccup mode and constant current output for 1 second, for the robotic arm's self-inspection and self-calibration after powering up.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>2、The internal Hall signal is incorrect</td>
        <td>The motor is locked and unable to rotate, brake release failed.<br> Please contact our technical support in time.</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td>16</td>
        <td>0x4000</td>
        <td>16384</td>
        <td>Position Command Step Jump Warning.</td>
        <td>The current position and target position error is large</td>
        <td>which often occurs during transmission. It is recommended to check whether the transmission trajectory is smooth and whether the communication cycle is stable.<br>1. The target position sent by the upper machine and the current motor position angle is greater than 10 degrees.<br>2. FOC status error.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
    <tr>
        <td>17</td>
        <td>0x8000</td>
        <td>32768</td>
        <td>Multi-coil joint data loss.</td>
        <td>Encoder battery is low on power</td>
        <td>The end joint of the robotic arm uses a multi-turn encoder. Check whether the battery interface is loose and whether the battery power is insufficient.</td>
        <td><span style="color: red;">Severe</span></td>
    </tr>
    <tr>
        <td>18</td>
        <td>0xF000</td>
        <td>61440</td>
        <td>Communication frame loss.</td>
        <td>The joint cannot communicate normally</td>
        <td>Clear joint errors on the single joint upper machine, check the CAN line connection and 120 ohm shunt resistor.</td>
        <td><span style="color: #EC6102;">General</span></td>
    </tr>
</table>

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
    .tableWrap tr th:nth-child(7),
    .tableWrap td:nth-child(7) {
        width: 32px;
    }
</style>
