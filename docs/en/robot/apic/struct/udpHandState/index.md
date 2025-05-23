# <p class="hidden">C, C++: </p>UDP-Based Pushed Dexterous Hand Data `rm_udp_hand_state_t`

## Class member variable description

- ### Dexterous hand position `hand_pos`

    Dexterous hand position

    ```C++
    int rm_udp_hand_state_t::hand_pos[6]
    ```

- ### Dexterous hand angle `hand_angle`

    Dexterous hand angle

    ```C++
    int rm_udp_hand_state_t::hand_angle[6]
    ```

- ### Dexterous hand DoF force `hand_force`

    Dexterous hand DoF force, in mN

    ```C++
    int rm_udp_hand_state_t::hand_force[6]
    ```

- ### Dexterous hand DoF state `hand_state`

    Dexterous hand DoF state, defined by the dexterous hand manufacturer

    ```C++
    int rm_udp_hand_state_t::hand_state[6]
    ```

- ### Dexterous hand system error `hand_err`

    Dexterous hand system error, defined by the dexterous hand manufacturer. For example, the INSPIRE-ROBOTS state codes are as follows: 1: error, 0: no error

    ```C++
    int rm_udp_hand_state_t::hand_err
    ```
