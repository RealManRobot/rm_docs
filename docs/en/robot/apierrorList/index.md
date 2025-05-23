# <p class="hidden">FAQ：</p>Appendix: List of Error Codes

This page is only for API error codes, for API2 error codes please refer to the corresponding communication protocol interface documentation.
RealMan will upgrade and maintain the API for you until the end of 2024. Since 2025, you can still use the API, except that RealMan will not upgrade and maintain it for you. Recommended to Use API2.

## API error codes

|S/N|Error Code (Hexadecimal)|Error Code (Decimal)|Description|Causes|Suggested Actions|
|:--|:--|:--|:--|:--|:--|
|1|0x0001|1|Message request returned FALSE|API error or other|1. Use a serial port assistant to send a JSON protocol for verification.<br>2. If the JSON protocol returns True, check for errors in the parameters entered in the API.|
|2|0x0002|2|Robot arm not initialized or illegal model input|Robot arm not initialized or illegal model input|Before making a connection, it is necessary to call the API initialization interface in advance.|
|3|0x0003|3|Illegal timeout period|Illegal timeout |The timeout period is set unreasonably.|
|4|0x0004|4|Socket initialization failed|Socket initialization failed|Check Socket settings.|
|5|0x0005|5|Socket connection failed|Unable to establish communication with the robot arm|Check communication settings for errors.|
|6|0x0006|6|Socket send failed|Unable to establish communication with the robot arm|Check communication settings for errors.|
|7|0x0007|7|Socket communication timeout|The API has not received return data for a long time, possibly due to no connection|1. Close the teach pendant when calling the API.<br>2. If using a wireless connection, an unstable connection may occasionally return error code 7; you can switch to a wired connection.<br>3. If multiple threads are calling the interface, it is recommended to set the query interval of the threads to more than 50ms.|
|8|0x0008|8|Unknown error|Unknown error|Restart the robotic arm and check the hardware and software connections as well as the environmental configuration.|
|9|0x0009|9|Data incomplete|The API checks that the returned data is missing some required fields, such as when getting the robot arm status, the controller's returned JSON string does not have pose|1. If multiple threads are calling the interface, it is recommended to set the query interval of the threads to more than 50ms.<br>2. You can contact Realman technical support to determine whether the API version and the controller software version need to be updated.|
|10|0x000A|10|Array length error|The length of the data obtained is incorrect, seven-axis robot arm vs six-axis data length|Please contact our technical support promptly.|
|11|0x000B|11|Data type error|Refers to the type of data being incorrect when parsing JSON data, for example, Joint should be an array, if a number is parsed, this error will be reported.|Please contact our technical support promptly.|
|12|0x000C|12|Model error|The model number of the robot arm is entered incorrectly|1. Enter the correct model number of the robotic arm.<br>2. Check if there have been any changes to the structure name `Pose` in the API. In versions after 4.2.2, the structure name `POSE` has been changed to `Pose`.|
|13|0x000D|13|Missing call function|Did not write a callback function when calling the interface|Add a callback function.|
|14|0x000E|14|Robot arm abnormal stop|During the robot arm movement, the API will continuously get the status of the robot arm to determine if it is moving|1. Check if the collision detection level is set too high.<br>2. Communicate with Realman technical support to confirm whether the API version and the controller software version need to be updated.|
|15|0x000F|15|Trajectory file name too long|The name of the trajectory file is too long|Reduce the length of the trajectory file name.|
|16|0x0010|16|Trajectory file verification failed|The trajectory file is corrupted or the format is incorrect|Verify that the trajectory file is complete and that the format is correct.|
|17|0x0011|17|Trajectory file read failed|The trajectory file does not exist, is corrupted, or the file location has changed|Check if the trajectory file exists, whether the file is complete, and if it is stored in the specified location.|
|18|0x0012|18|Controller busy, please try again later|The controller is busy|1. Wait for the controller to finish the current operation; if it is busy for an extended period, perform a restart of the robotic arm.<br>2. This usually occurs when sending online programming files.|
|19|0x0013|19|Illegal input|The API checks whether the pointer points to a valid memory address and whether the input parameters are legal|This error is often returned due to incorrect Python calls to the C interface previously.|
|20|0x0014|20|Data queue full|-|-|
|21|0x0015|21|Calculation failed|Algorithm interface calculation failed|The inverse kinematics interface indicates a failure if any value other than 0 is returned.|
|22|0x0016|22|File open failed|The file is missing, the file name is specified incorrectly, or the file is not in the specified location|检查轨迹文件是否存在、文件名是否正确、是否放在指定位置。|
|23|0x0017|23|Force control calibration manually stopped|The robot arm is not in a stationary state; the calibration process is interrupted; a collision occurs with external equipment during calibration|1. Keep the robotic arm in a stationary state.<br>2. Do not interrupt the calibration process.<br>3. Avoid collisions with external equipment during the calibration process.|
|24|0x0018|24|No trajectory to save|No trajectory operation has been performed|After the robotic arm executes motion commands, proceed to save the trajectory.|
|25|0x0019|25|UDP listening error|-|When the API connects, it will check the settings of the Gen 3 controller UDP interface and open a listening for the UDP interface. If the opening fails, there is no error message, but this error will be returned when attempting to retrieve real-time reported data.|
