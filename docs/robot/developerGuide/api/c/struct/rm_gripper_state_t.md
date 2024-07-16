# 夹爪状态结构体`rm_gripper_state_t`

## 类成员变量说明

- ### 夹爪使能标志`enable_state`

0 表示未使能，1 表示使能

    ```C  
    int rm_gripper_state_t::enable_state
    ```

- ### 夹爪在线状态`status`

0 表示离线， 1表示在线

    ```C  
    int rm_gripper_state_t::status
    ```

- ### 夹爪错误信息`error`

低8位表示夹爪内部的错误信息bit5-7</br>保留bit4</br>内部通bit3</br>驱动器bit2</br>过流 bit1</br>过温bit0 </br>堵转

    ```C  
    int rm_gripper_state_t::error
    ```

- ### 夹爪当前的压力，单位g`current_force`

    ```C  
    int rm_gripper_state_t::current_force
    ```

- ### 当前温度，单位℃`temperature`

    ```C  
    int rm_gripper_state_t::temperature
    ```

- ### 夹爪开口度`actpos`

    ```C  
    int rm_gripper_state_t::actpos
    ```
