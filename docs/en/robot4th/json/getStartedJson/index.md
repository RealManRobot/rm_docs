# <p class="hidden">JSON protocol: </p>Getting Started of Robotic Arm JSON Protocol

## Overview

The RealMan robotic arm uses the JSON format for external data communication. Users can use Ethernet ports to send data in the required JSON format through the standard TCP/IP communication protocol to control the robotic arm.

Additionally, users can also send a string in JSON format through the RS485 port or RS232-USB (available in the basic series) of the controller to control the robotic arm. The defaults of the two ports are as follows: baud rate: 460800BPS; stop bit: 1; data bit: 8, and check bit: NULL.

All the above communication modes will be automatically identified by the robotic arm, without manual switching by users, so users only need to send the command in a specified format, and the robotic arm will return the command in the same format.

## Warning

(1) All data must be sent in new lines, that is, the command ends with "\r\n", otherwise the robotic arm will not respond.

(2) The above communication modes cannot be used simultaneously to avoid mutual interference of commands. Meanwhile, when the JSON is used for development and testing, it is prohibited to connect the teach pendant to prevent command conflict.

(3) For configuration commands of the basic robotic arm except for the joint configuration, the save interface must be called for their saving if necessary, otherwise they will be lost after restart. Additionally, do not power off during saving.

## Note

The Realman does not support WiFi (AP or STA) communication functions. Please use the Ethernet port to communicate via the standard TCP/IP protocol, and send data in the required JSON format to control the robotic arm.
