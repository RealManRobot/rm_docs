# <p class="hidden">CANFD: </p>Usage Demo

## 1. Environment Configuration

- Arbitration domain baud rate: 1Mbps 80%.
- Data and baud rate: 5Mbps 75%.

## 2. Basic demo

### Read the current position of the module whose ID is 1

Command = CMD_RD; Current position low 16-bit address = 0x14, read the data of two registers;

Command package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">Byte1</th>
    <th colspan="1">Byte2</th>
    <th colspan="1">Byte3</th>
  </tr>
  <tr>
    <td rowspan="2">0x01</td>
    <td rowspan="2">0x03</td>
    <td>0x01</td>
    <td>0x14</td>
    <td>0x02</td>
  </tr>
  <tr>
    <td colspan="3">Current position query</td>
  </tr>
</table>

Response package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">Byte1</th>
    <th colspan="1">Byte2</th>
    <th colspan="1">Byte3</th>
    <th colspan="1">Byte4</th>
    <th colspan="1">Byte5</th>
    <th colspan="1">Byte6</th>
  </tr>
  <tr>
    <td rowspan="2">0x101</td>
    <td rowspan="2">0x06</td>
    <td>0x01</td>
    <td>0x14</td>
    <td>0x10</td>
    <td>0x27</td>
    <td>0x00</td>
    <td>0x00</td>
  </tr>
  <tr>
    <td colspan="6">Current position</td>
  </tr>
</table>

Current position: position = 0x00002710/10000 = 1°

### Set the target position of the module whose ID is 1 to 1°

Command = CMD_WR; address = 0x36; data = 10000 = 0x00002710;

**(1) Normal mode:**

Command package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">Byte1</th>
    <th colspan="1">Byte2</th>
    <th colspan="1">Byte3</th>
    <th colspan="1">Byte4</th>
    <th colspan="1">Byte5</th>
    <th colspan="1">Byte6</th>
  </tr>
  <tr>
    <td rowspan="2">0x01</td>
    <td rowspan="2">0x06</td>
    <td>0x02</td>
    <td>0x36</td>
    <td>0x10</td>
    <td>0x27</td>
    <td>0x00</td>
    <td>0x00</td>
  </tr>
  <tr>
    <td colspan="6">Set the target position</td>
  </tr>
</table>

Response package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">Byte1</th>
    <th colspan="1">Byte2</th>
    <th colspan="1">Byte3</th>
  </tr>
  <tr>
    <td rowspan="2">0x101</td>
    <td rowspan="2">0x03</td>
    <td>0x02</td>
    <td>0x36</td>
    <td>0x01</td>
  </tr>
  <tr>
    <td colspan="6">Target position set successfully</td>
  </tr>
</table>

**(2) Servo mode:**

Command package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">Byte1</th>
    <th colspan="1">Byte2</th>
    <th colspan="1">Byte3</th>
    <th colspan="1">Byte4</th>
  </tr>
  <tr>
    <td rowspan="2">0x201</td>
    <td rowspan="2">0x04</td>
    <td>0x10</td>
    <td>0x27</td>
    <td>0x00</td>
    <td>0x00</td>
  </tr>
  <tr>
    <td colspan="4">Set the target position</td>
  </tr>
</table>

Response package:

<table>
  <tr>
    <th colspan="1">CAN-ID</th>
    <th colspan="1">DLC</th>
    <th colspan="1">1</th>
    <th colspan="1">2</th>
    <th colspan="1">3</th>
    <th colspan="1">4</th>
    <th colspan="1">5</th>
    <th colspan="1">6</th>
    <th colspan="1">7</th>
    <th colspan="1">8</th>
    <th colspan="1">9</th>
    <th colspan="1">10</th>
    <th colspan="1">11</th>
    <th colspan="1">12</th>
  </tr>
  <tr>
    <td rowspan="5">0x501</td>
    <td rowspan="5">0x10</td>
    <td>0x64</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x10</td>
    <td>0x20</td>
    <td>0x00</td>
    <td>0x00</td>
  </tr>
  <tr>
    <td colspan="4">Current current (100 mA)</td>
    <td colspan="4">Current speed (0)</td>
    <td colspan="4">Current position</td>
  </tr>
  <tr>
    <td colspan="3">13</td>
    <td colspan="3">14</td>
    <td colspan="3">15</td>
    <td colspan="3">15</td>
  </tr>
  <tr>
    <td colspan="3">0x01</td>
    <td colspan="3">0x00</td>
    <td colspan="3">0x00</td>
    <td colspan="3">0x00</td>
  </tr>
  <tr>
    <td colspan="6">Enable status (Enable status)</td>
    <td colspan="6">Error code (no error)</td>
  </tr>
</table>

## 3. Demo of common command package

### Position servo command package

When the joint is in the position servo mode, it enters the cyclic position servo control stage. At this stage, the controller sends position command frames to each joint module, and each joint module that has received the command frames performs corresponding position servo control and sends the current position information, current information, speed information, enable status, and error code to the controller through a feedback frame. <br>If 7 modules on a bus participate in cyclic servo control, 14 frames of communication will be generated on the bus within one control cycle to reduce the bus load.

**Position servo command frame**:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="4">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="4">Data（4Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x200</td>
    <td rowspan="2">0</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td>Length</td>
    <td>D0</td>
    <td>D1</td>
    <td>D2</td>
    <td>D3</td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
  </tr>
  <tr>
    <td>4</td>
    <td colspan="4">Current position</td>
  </tr>
</table>

**Servo feedback frame:**

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="2">Control field</th>
    <th colspan="5">Data field</th>
    <th colspan="1">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>......</td>
    <td>DLC/4</td>
    <td colspan="5">Data（16Byte）</td>
    <td>......</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x500</td>
    <td rowspan="2">0</td>
    <td rowspan="2">......</td>
    <td>Length</td>
    <td>D0~D3</td>
    <td>D4~D7</td>
    <td>D8~D11</td>
    <td>D12~D13</td>
    <td>D14~D15</td>
    <td>......</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Current current</td>
    <td>Current speed</td>
    <td>Current position</td>
    <td>Enable status</td>
    <td>Error code</td>
    <td>......</td>
  </tr>
</table>

### Speed servo command package

When the joint is in the speed servo mode, it enters the cyclic speed servo control stage. At this stage, the controller sends speed command frames to each joint module, and each joint module that has received the command frames performs corresponding speed servo control and sends the current position information, current information, speed information, enable status, and error code to the controller through a feedback frame.

**Speed servo command frame**:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="4">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="4">Data（4Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x300</td>
    <td rowspan="2">0</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td>Length</td>
    <td>D0</td>
    <td>D1</td>
    <td>D2</td>
    <td>D3</td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
  </tr>
  <tr>
    <td>4</td>
    <td colspan="4">Target speed</td>
  </tr>
</table>

**Servo feedback frame:**

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="2">Control field</th>
    <th colspan="5">Data field</th>
    <th colspan="1">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>......</td>
    <td>DLC/4</td>
    <td colspan="5">Data（16Byte）</td>
    <td>......</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x500</td>
    <td rowspan="2">0</td>
    <td rowspan="2">......</td>
    <td>Length</td>
    <td>D0~D3</td>
    <td>D4~D7</td>
    <td>D8~D11</td>
    <td>D12~D13</td>
    <td>D14~D15</td>
    <td>......</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Current current</td>
    <td>Current speed</td>
    <td>Current position</td>
    <td>Enable status</td>
    <td>Error code</td>
    <td>......</td>
  </tr>
</table>

### Current servo command package

To control the joint current. Once a current servo command frame is issued, a servo feedback frame is returned.

**Current servo command frame**:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="4">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="4">Data（4Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x400</td>
    <td rowspan="2">0</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td>Length</td>
    <td>D0</td>
    <td>D1</td>
    <td>D2</td>
    <td>D3</td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
  </tr>
  <tr>
    <td>4</td>
    <td colspan="4">Target speed</td>
  </tr>
</table>

**Servo feedback frame:**

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="2">Control field</th>
    <th colspan="5">Data field</th>
    <th colspan="1">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>......</td>
    <td>DLC/4</td>
    <td colspan="5">Data（16Byte）</td>
    <td>......</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x500</td>
    <td rowspan="2">0</td>
    <td rowspan="2">......</td>
    <td>Length</td>
    <td>D0~D3</td>
    <td>D4~D7</td>
    <td>D8~D11</td>
    <td>D12~D13</td>
    <td>D14~D15</td>
    <td>......</td>
  </tr>
  <tr>
    <td>16</td>
    <td>Current current</td>
    <td>Current speed</td>
    <td>Current position</td>
    <td>Enable status</td>
    <td>Error code</td>
    <td>......</td>
  </tr>
</table>

### Joint status query command package

To query the joint status in cycles. To improve the bus utilization, the common joint data is queried through a command frame, and after the joint receives the command frame, it integrates the error code, system voltage, system temperature, enable status, and current position into a joint status feedback frame for feedback.

**Joint status query command frame**:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th>Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td rowspan="1">STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td>Data（0Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x600</td>
    <td rowspan="2">0</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td rowspan="2">1</td>
    <td rowspan="2">0</td>
    <td>Length</td>
    <td> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
    <td rowspan="2"> </td>
  </tr>
  <tr>
    <td>0</td>
    <td> </td>
  </tr>
</table>

**Joint status feedback frame**:
<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="2">Control field</th>
    <th colspan="6">Data field</th>
    <th>CRC and other fields</th>
  </tr>
  <tr>
    <td>STID/11</td>
    <td>R1</td>
    <td>......</td>
    <td>DLC/4</td>
    <td colspan="6">Data（16Byte）</td>
    <td>......</td>
   </tr>
  <tr>
    <td rowspan="2">ID+0x700</td>
    <td rowspan="2">0</td>
    <td rowspan="2">.......</td>
    <td>Length</td>
    <td>D0~D1</td>
    <td>D2~D3</td>
    <td>D4~D5</td>
    <td>D6~D7</td>
    <td>D8~D11</td>
    <td>D12~D15</td>
    <td>.......</td>
  </tr>
  <tr>
    <td>12</td>
    <td>Error code</td>
    <td>System voltage</td>
    <td>System temperature</td>
    <td>D6 Enable status <br> D7 Brake status</td>
    <td>Current position</td>
    <td>Current current</td>
    <td>......</td>
  </tr>
</table>

## 4. Usage Examples

### IAP Online Update Flag (Required Operation)

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x49|0x00|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x49|0x01|

### Get Current Joint Status

Command package:

|CAN-ID|DLC|
|:-:|:-:|
|0x601|0x00|

Response package:

<table>
  <tr>
    <th>CAN-ID</th>
    <th>DLC</th>
    <th>D0</th>
    <th>D1</th>
    <th>D2</th>
    <th>D3</th>
    <th>D4</th>
    <th>D5</th>
    <th>D6</th>
    <th>D7</th>
  </tr>
  <tr>
    <td rowspan="5">0x701</td>
    <td rowspan="5">0x10</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0xFC</td>
    <td>0x08</td>
    <td>0xEA</td>
    <td>0x01</td>
    <td>0x01</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="2">Error Code</td>
    <td colspan="2">System Voltage</td>
    <td colspan="2">System Temperature</td>
    <td>Enable Status</td>
    <td>Brake Status</td>
  </tr>
  <tr>
    <th>D8</th>
    <th>D9</th>
    <th>D10</th>
    <th>D11</th>
    <th>D12</th>
    <th>D13</th>
    <th>D14</th>
    <th>D15</th>
  </tr>
  <tr>
    <td>0x61</td>
    <td>0x0D</td>
    <td>0x03</td>
    <td>0x00</td>
    <td>0xFA</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0xFF</td>
   </tr>
  <tr>
    <td colspan="4">Current Position</td>
    <td colspan="4">Current Current</td>
  </tr>
</table>

### Position Mode Control

**(1) Set Working Mode to Position Mode**:

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x03|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**(2) Joint Movement via Position Servo Command**:

After querying the current angle using the joint status query command, send a position servo command to move the joint within ±10°. For example, if the current angle is 20°, move the joint to 30°.

Command package:

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x201|0x04|0xE0|0x93|0x04|0x00|

Response package:

<table>
  <tr>
    <th>CAN-ID</th>
    <th>DLC</th>
    <th>D0</th>
    <th>D1</th>
    <th>D2</th>
    <th>D3</th>
    <th>D4</th>
    <th>D5</th>
    <th>D6</th>
    <th>D7</th>
  </tr>
  <tr>
    <td rowspan="5">0x501</td>
    <td rowspan="6">0x10</td>
    <td>0xC0</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Current</td>
    <td colspan="4">Current Speed</td>
  </tr>
  <tr>
    <th>D8</th>
    <th>D9</th>
    <th>D10</th>
    <th>D11</th>
    <th>D12</th>
    <th>D13</th>
    <th>D14</th>
    <th>D15</th>
  </tr>
  <tr>
    <td>0x40</td>
    <td>0x0D</td>
    <td>0x03</td>
    <td>0x00</td>
    <td>0x01</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Position (Position before movement)</td>
    <td colspan="2">Enable Status</td>
    <td colspan="2">Error Code</td>
  </tr>
</table>

After obtaining the joint status again, the current joint angle should be within ±10° of the initial position.

### Current Mode Control

**(1) Set Working Mode to Current Mode**:

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x01|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**(2) Joint Movement via Current Servo Command**:

Send a current servo command to move the joint in the positive or negative direction based on the current value (the joint moves in the opposite direction if the data is negative, and in the positive direction if the data is positive), for example, a current of 500 mA.

Command package:

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x401|0x04|0xF4|0x01|0x00|0x00|

Response package:

<table>
  <tr>
    <th>CAN-ID</th>
    <th>DLC</th>
    <th>D0</th>
    <th>D1</th>
    <th>D2</th>
    <th>D3</th>
    <th>D4</th>
    <th>D5</th>
    <th>D6</th>
    <th>D7</th>
  </tr>
  <tr>
    <td rowspan="5">0x501</td>
    <td rowspan="6">0x10</td>
    <td>0xF3</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0x02</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Current</td>
    <td colspan="4">Current Speed</td>
  </tr>
  <tr>
    <th>D8</th>
    <th>D9</th>
    <th>D10</th>
    <th>D11</th>
    <th>D12</th>
    <th>D13</th>
    <th>D14</th>
    <th>D15</th>
  </tr>
  <tr>
    <td>0xBB</td>
    <td>0xB0</td>
    <td>0x09</td>
    <td>0x00</td>
    <td>0x01</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Position (Position before movement)</td>
    <td colspan="2">Enable Status</td>
    <td colspan="2">Error Code</td>
  </tr>
</table>

### Speed Mode Control

**(1) Set Working Mode to Speed Mode**:

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x02|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**(2) Joint Movement via Speed Servo Command**:

Send a speed servo command to move the joint in the positive or negative direction based on the speed value (the joint moves in the opposite direction if the data is negative, and in the positive direction if the data is positive), for example, a speed of 5 RPM.

Command package:

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x301|0x04|0xC4|0x09|0x00|0x00|

Response package:

<table>
  <tr>
    <th>CAN-ID</th>
    <th>DLC</th>
    <th>D0</th>
    <th>D1</th>
    <th>D2</th>
    <th>D3</th>
    <th>D4</th>
    <th>D5</th>
    <th>D6</th>
    <th>D7</th>
  </tr>
  <tr>
    <td rowspan="5">0x501</td>
    <td rowspan="6">0x10</td>
    <td>0xC0</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0xFF</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Current</td>
    <td colspan="4">Current Speed</td>
  </tr>
  <tr>
    <th>D8</th>
    <th>D9</th>
    <th>D10</th>
    <th>D11</th>
    <th>D12</th>
    <th>D13</th>
    <th>D14</th>
    <th>D15</th>
  </tr>
  <tr>
    <td>0x76</td>
    <td>0x14</td>
    <td>0x03</td>
    <td>0x00</td>
    <td>0x01</td>
    <td>0x00</td>
    <td>0x00</td>
    <td>0x00</td>
   </tr>
  <tr>
    <td colspan="4">Current Position (Position before movement)</td>
    <td colspan="2">Enable Status</td>
    <td colspan="2">Error Code</td>
  </tr>
</table>

### Clear Joint Error

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0F|0x01|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0F|0x01|

::: warning
After clearing the joint error, switch the working mode to position servo mode, send an enable command, and the joint will be successfully enabled.
:::

### Set Joint Zero Position

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0E|0x01|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0E|0x01|

### Set Enable Status

**Enable**：

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0A|0x01|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0A|0x01|

**Disable**：

Command package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0A|0x00|

Response package:

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0A|0x01|

### Low-Power Mode Description

After enabling low-power mode, the maximum power consumption of each joint does not exceed 80W. Low-power mode is activated when the memory vector table address 0x69 is set to 1, and it is deactivated when set to 0 returning, to the normal joint state.

::: tip
Supported only for joints WHJ10N/WHJ30/WHJ60 with firmware version 519 and later versions.
:::

### End-Effector Mode Description

In end-effector mode, when the memory vector table address 0x79 is set to 0, the end-effector is non-joint; when set to 1, the end-effector is in joint mode, functioning as a joint.

::: tip
Supported only for joints WHJ10N/WHJ30/WHJ60 with firmware version 519 and later versions.
:::

### Time-Sharing Power-On Mode Description

In time-sharing power-on mode, when the memory vector table address 0x1f is set to 0, the joint power-on is delayed; when set to 1, the joint power-on is immediate without delay.

::: tip
Supported only for joints WHJ10N/WHJ30/WHJ60 with firmware version 519 and later versions.
:::
