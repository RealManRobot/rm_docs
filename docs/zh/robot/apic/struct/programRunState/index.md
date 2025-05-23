# <p class="hidden">C、C++: </p>在线编程运行状态`rm_program_run_state_t`

## 类成员变量说明

- ### 运行状态`run_state`

    0 未开始 1运行中 2暂停中。

    ```C++
    int rm_program_run_state_t::run_state
    ```

- ### 运行轨迹编号`id`

    ```C++
    int rm_program_run_state_t::id
    ```

- ### 上次编辑的在线编程编号 id`edit_id`

    ```C++
    int rm_program_run_state_t::edit_id
    ```

- ### 运行行数`plan_num`

    ```C++
    int rm_program_run_state_t::plan_num
    ```

- ### 循环指令数量`total_loop`

    ```C++
    int rm_program_run_state_t::total_loop
    ```

- ### 单步模式`step_mode`

    1 为单步模式，0 为非单步模式。

    ```C++
    int rm_program_run_state_t::step_mode
    ```

- ### 全局规划速度比例`plan_speed`

    比例值1-100。

    ```C++
    int rm_program_run_state_t::plan_speed
    ```

- ### 循环行数`loop_num`

    比例值1-100。

    ```C++
    int rm_program_run_state_t::loop_num[100]
    ```

- ### 对应循环次数`loop_cont`

    比例值1-100。

    ```C++
    int rm_program_run_state_t::loop_cont[100]
    ```
