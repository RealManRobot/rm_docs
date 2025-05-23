# <p class="hidden">C, C++: </p>Online Programming Running State `rm_program_run_state_t`

## Class member variable description

- ### Running state `run_state`

    0: not started, 1: running, 2: paused.

    ```C++
    int rm_program_run_state_t::run_state
    ```

- ### ID of running trajectory `id`

    ```C++
    int rm_program_run_state_t::id
    ```

- ### ID of previously edited online programming `edit_id`

    ```C++
    int rm_program_run_state_t::edit_id
    ```

- ### Number of running lines `plan_num`

    ```C++
    int rm_program_run_state_t::plan_num
    ```

- ### Number of loop commands `total_loop`

    ```C++
    int rm_program_run_state_t::total_loop
    ```

- ### Single step mode `step_mode`

    1: single step mode, 0: non-single step mode.

    ```C++
    int rm_program_run_state_t::step_mode
    ```

- ### Global planned speed ratio `plan_speed`

    Ratio: 1−100.

    ```C++
    int rm_program_run_state_t::plan_speed
    ```

- ### Number of loop lines `loop_num`

    Ratio: 1−100.

    ```C++
    int rm_program_run_state_t::loop_num[100]
    ```

- ### Loop count `loop_cont`

    Ratio: 1−100.

    ```C++
    int rm_program_run_state_t::loop_cont[100]
    ```
