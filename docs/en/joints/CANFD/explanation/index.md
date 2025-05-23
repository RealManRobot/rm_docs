# <p class="hidden">CANFD: </p>Introduction of CANFD Protocol

## Overview of communication protocol

Joint products employ the CANFD communication protocol, which is an ask-and-answer communication mode between the controller and module. The controller sends out a command package and the module returns a response package.
A CAN bus network can connect multiple modules, and each module is assigned with an ID number. The control command sent from the controller contain ID information, and only the module matching the ID number will receive this command completely and return the response information.

All query, control, and parameter modification commands will be completed through read-write operations on a **memory control table** stored inside the module's main control chip. The basic storage unit of the memory control table is 2-byte signed integer.

All data longer than 1 byte will be transmitted and stored with the lower byte first. In protocol analysis, the memcpy function in c programming language can be used in combination to realize the conversion from byte data to integer data or from integer data to byte data.

The command types include the following:

|Command|Function|Value|Data segment length|
|:-:|:-:|:-:|:-:|
|CMD_RD (read)|Query the data in the control table|0x01|1|
|CMD_RD (write)|Write data into the control table|0x02|2|

## Protocol format convention

Joints use the standard frame format of CANFD, where only data frames are used, and there is no response for remote frames. The data frame of the CANFD protocol is up to 64 bytes long, and the communication rate can reach 5M. The data length codes of the CANFD protocol are shown below.

<table>
  <tr>
    <th colspan="17">CANFD data field</th>
  </tr>
  <tr>
    <td>DLC</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
  </tr>
  <tr>
    <td>Data Bytes</td>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>12</td>
    <td>16</td>
    <td>20</td>
    <td>24</td>
    <td>32</td>
    <td>48</td>
    <td>64</td>
  </tr>
</table>

### Command package

The format of command package is as follows:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="5">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td>STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="5">Data（64Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
  </tr>
  <tr>
    <td>ID</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>Length</td>
    <td>CMD</td>
    <td>INDEX</td>
    <td>DATA</td>
    <td>DATA</td>
    <td>......</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
</table>

**Arbitration field**: Only the target ID segment needs arbitration. The arbitration field ID is the module ID. The module ID is 0x00 - 0x1E (0 - 30), and the broadcasting ID is 0x00 (0). Typically, ID0 is for the interface board. <br>
**Control field**: DLC length, i.e., the length of data field bytes, is up to 64 bytes. The data length table is as shown above; BRS stands for the variable rate, where 1 means variable, and 0 means not variable; ESI is temporarily set to 0, and the bus does not actively report errors. <br>
**Data field**: The first byte of the data field represents the command type, the second byte represents the control table index, and the third to fourth bytes represent the data sent together with the command. The read command has one byte of data representing the number of memory table registers to be read; and the write command consists of two bytes of data, which are the contents to be written to the memory table, with the lower bits coming first.

### Response package

The format of response package is as follows:

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="5">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td>STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="5">Data</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
  </tr>
  <tr>
    <td>ID+0x100</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>Length</td>
    <td>CMD</td>
    <td>INDEX</td>
    <td>DATA</td>
    <td>DATA</td>
    <td>......</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
</table>

The format of response package is substantially the same as that of the command package, except the following differences:

- If the module receives a read command, the returned data segment is the data of the specified length.
- If the module receives a write command, the returned data segment is whether the operation was successful, with 0x01- standing for success, and 0x00- standing for failure.
- The ID of the response package is ID+0x100.

::: tip

- When the issued CANFD control frame does not meet the protocol requirements, the actuator returns a CMD_ERR response package in the following format.

<table>
  <tr>
    <th colspan="2">Arbitration field</th>
    <th colspan="6">Control field</th>
    <th colspan="2">Data field</th>
    <th colspan="4">CRC and other fields</th>
  </tr>
  <tr>
    <td>STID/11</td>
    <td>R1</td>
    <td>IDE</td>
    <td>FDF</td>
    <td>R0</td>
    <td>BRS</td>
    <td>ESI</td>
    <td>DLC/4</td>
    <td colspan="2">Data（2Byte）</td>
    <td>CRC</td>
    <td>ACK</td>
    <td>EOF</td>
    <td>IFS</td>
  </tr>
  <tr>
    <td>ID+0x100</td>
    <td>0</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>1</td>
    <td>0</td>
    <td>2</td>
    <td>CMD_ERR</td>
    <td>ERR</td>
    <td> </td>
    <td> </td>
    <td> </td>
    <td> </td>
  </tr>
</table>

- ERR represents the error type, with the error codes shown as follows:

|Error bit|Definition|Description|
|:--|:--|:--|
|0x01|Format error|The control frame data does not meet the protocol format.|
|0x02|Authority error|The control frame has no operation authority.|
:::
