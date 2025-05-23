# <p class="hidden">CANFD: </p>使用示例

## 1. 环境配置

- 仲裁域波特率：1Mbps 80%。
- 数据与波特率：5Mbps 75%。

## 2. 基础示例

### 读取 ID 为 1 的当前位置

指令 = CMD_RD；当前位置低 16 位地址 = 0x14，读取两个寄存器的数据；

指令包：

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
    <td colspan="3">当前位置查询</td>
  </tr>
</table>

应答包：

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
    <td colspan="6">当前位置</td>
  </tr>
</table>

当前位置为：position = 0x00002710/10000 = 1°

### 设置 ID 为 1 的模块目标位置为 1°

指令 = CMD_WR；地址 = 0x36; 数据 = 10000 = 0x00002710；

**（1）正常模式：**

指令包：

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
    <td colspan="6">设置目标位置</td>
  </tr>
</table>

应答包：

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
    <td colspan="6">目标位置设置成功</td>
  </tr>
</table>

**（2）伺服模式：**

指令包：

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
    <td colspan="4">设置目标位置</td>
  </tr>
</table>

应答包：

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
    <td colspan="4">当前电流（100mA）</td>
    <td colspan="4">当前速度（0）</td>
    <td colspan="4">当前位置</td>
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
    <td colspan="6">使能状态（上使能状态）</td>
    <td colspan="6">错误代码（无错误）</td>
  </tr>
</table>

## 3. 常用指令包示例

### 位置伺服指令包

当关节处于位置伺服模式下，关节进入周期性位置伺服控制阶段，控制器向各个关节模块发送位置指令帧，各个关节模块在收到指令帧之后进行相应的位置伺服控制，并将当前的位置信息、电流信息、速度信息、使能状态和错误代码通过一帧反馈帧发送给控制器。<br>如果一个总线上有 7 个模块参与周期性伺服控制，那么一个控制周期之内，总线上将会产生 14 帧的通讯，以此降低总线负载。

**位置伺服指令帧**：

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="6">控制域</th>
    <th colspan="4">数据域</th>
    <th colspan="4">CRC及其他域</th>
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
    <td colspan="4">目前位置</td>
  </tr>
</table>

**伺服反馈帧：**

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="2">控制域</th>
    <th colspan="5">数据域</th>
    <th colspan="1">CRC及其他域</th>
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
    <td>当前电流</td>
    <td>当前速度</td>
    <td>当前位置</td>
    <td>使能状态</td>
    <td>错误代码</td>
    <td>......</td>
  </tr>
</table>

### 速度伺服指令包

当关节处于速度伺服模式下，关节进入周期性速度伺服控制阶段，控制器向各个关节模块发送速度指令帧，各个关节模块在收到指令帧之后进行相应的速度伺服控制，并将当前的位置信息、电流信息、速度信息、使能状态和错误代码通过一帧反馈帧发送给控制器。

**速度伺服指令帧**：

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="6">控制域</th>
    <th colspan="4">数据域</th>
    <th colspan="4">CRC及其他域</th>
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
    <td colspan="4">目标速度</td>
  </tr>
</table>

**伺服反馈帧：**

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="2">控制域</th>
    <th colspan="5">数据域</th>
    <th colspan="1">CRC及其他域</th>
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
    <td>当前电流</td>
    <td>当前速度</td>
    <td>当前位置</td>
    <td>使能状态</td>
    <td>错误代码</td>
    <td>......</td>
  </tr>
</table>

### 电流伺服指令包

控制关节的电流，每下发一帧电流伺服指令帧，返回一帧伺服反馈帧。

**电流伺服指令帧**：

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="6">控制域</th>
    <th colspan="4">数据域</th>
    <th colspan="4">CRC及其他域</th>
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
    <td colspan="4">目标速度</td>
  </tr>
</table>

**伺服反馈帧：**

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="2">控制域</th>
    <th colspan="5">数据域</th>
    <th colspan="1">CRC及其他域</th>
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
    <td>当前电流</td>
    <td>当前速度</td>
    <td>当前位置</td>
    <td>使能状态</td>
    <td>错误代码</td>
    <td>......</td>
  </tr>
</table>

### 关节状态查询指令包

周期性的查询关节的状态，为了提高总线利用率，将常用的关节数据通过一帧指令进行查询，关节收到该指令帧后，将错误代码、系统电压、系统温度、使能状态和当前位置放到一帧关节状态反馈帧内进行反馈。

**关节状态查询指令帧**：

<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="6">控制域</th>
    <th>数据域</th>
    <th colspan="4">CRC及其他域</th>
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

**关节状态反馈帧：**
<table>
  <tr>
    <th colspan="2">仲裁域</th>
    <th colspan="2">控制域</th>
    <th colspan="6">数据域</th>
    <th>CRC及其他域</th>
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
    <td>错误代码</td>
    <td>系统电压</td>
    <td>系统温度</td>
    <td>D6使能状态 <br> D7抱闸状态</td>
    <td>当前位置</td>
    <td>当前电流</td>
    <td>......</td>
  </tr>
</table>

## 4. 使用示例

### IAP 在线更新标志位（必要操作）

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x49|0x00|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x49|0x01|

### 获取当前关节状态

指令包：

|CAN-ID|DLC|
|:-:|:-:|
|0x601|0x00|

应答包：

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
    <td colspan="2">错误代码</td>
    <td colspan="2">系统电压</td>
    <td colspan="2">系统温度</td>
    <td>使能状态</td>
    <td>抱闸状态</td>
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
    <td colspan="4">当前位置</td>
    <td colspan="4">当前电流</td>
  </tr>
</table>

### 位置模式控制

**（1）设置工作模式为位置模式**：

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x03|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**（2）关节通过位置伺服指令运动**：

通过关节状态查询指令查询到当前角度后，发送位置伺服指令，使关节运动±10°以内。例如当前角度为20°，关节运动到30°。

指令包：

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x201|0x04|0xE0|0x93|0x04|0x00|

应答包：

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
    <td colspan="4">当前电流</td>
    <td colspan="4">当前速度</td>
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
    <td colspan="4">当前位置（运动开始之前的位置）</td>
    <td colspan="2">使能状态</td>
    <td colspan="2">错误代码</td>
  </tr>
</table>

再次获取关节状态，当前关节角度相交于开始前的位置±10°。

### 电流模式控制

**（1）设置工作模式为电流模式**：

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x01|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**（2）关节通过电流伺服指令运动**：

发送电流伺服指令，关节根据电流值，正向或反向运动（数据为负值时关节反向运动，数据为正值时，关节正向运动）,例如电流为500MA。

指令包：

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x401|0x04|0xF4|0x01|0x00|0x00|

应答包：

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
    <td colspan="4">当前电流</td>
    <td colspan="4">当前速度</td>
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
    <td colspan="4">当前位置（运动开始之前的位置）</td>
    <td colspan="2">使能状态</td>
    <td colspan="2">错误代码</td>
  </tr>
</table>

### 速度模式控制

**（1）设置工作模式为速度模式**：

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x30|0x02|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x30|0x01|

**（2）关节通过速度伺服指令运动**：

发送速度伺服指令，关节根据速度值，正向或反向运动（数据为负值时关节反向运动，数据为正值时，关节正向运动），例如速度为：5RPM。

指令包：

|CAN-ID|DLC|DATA|DATA|DATA|DATA|
|:-:|:-:|:-:|:-:|:-:|:-:|
|0x301|0x04|0xC4|0x09|0x00|0x00|

应答包：

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
    <td colspan="4">当前电流</td>
    <td colspan="4">当前速度</td>
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
    <td colspan="4">当前位置（运动开始之前的位置）</td>
    <td colspan="2">使能状态</td>
    <td colspan="2">错误代码</td>
  </tr>
</table>

### 清除关节错误

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0F|0x01|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0F|0x01|

::: warning 注意
清除关节错误后，将工作模式切换到位置伺服模式，发送使能指令，关节使能成功。
:::

### 设置关节零位

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0E|0x01|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0E|0x01|

### 设置使能状态

**上使能**：

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0A|0x01|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0A|0x01|

**禁使能**：

指令包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x01|0x03|0x02|0x0A|0x00|

应答包：

|CAN-ID|DLC|CMD|INDEX|DATA|
|:-:|:-:|:-:|:-:|:-:|
|0x101|0x03|0x02|0x0A|0x01|

### 低功耗模式说明

低功耗模式开启后，每个关节的单个关节功耗最大不超过80W，当给内存向量表地址0x69写标志位为1时开始低功耗模式，写0时关闭低功耗模式进入正常关节状态。

::: tip 说明
仅支持关节WHJ10N/WHJ30/WHJ60固件版本519及后续版本。
:::

### 末端板模式说明

末端板模式，当内存向量表地址0x79为0时，表示末端板为非关节，当内存向量表地址0x79为1时，表示末端板为关节模式，此模式下末端板为关节。

::: tip 说明
仅支持关节WHJ10N/WHJ30/WHJ60固件版本519及后续版本。
:::

### 分时上电模式说明

关节分时模式，当内存向量表地址0x1f为0时，表示关节上电延时，当内存向量表地址0x1f为1时，表示表示关节上电无延时。

::: tip 说明
仅支持关节WHJ10N/WHJ30/WHJ60固件版本519及后续版本。
:::
