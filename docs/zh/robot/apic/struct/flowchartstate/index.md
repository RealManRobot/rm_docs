# <p class="hidden">C、C++: </p>流程图程序运行状态`rm_flowchart_run_state_t`

## 类成员变量说明

- ### 运行状态`run_state`

    0未开始，1运行中，2暂停中。

    ```C++
    int rm_flowchart_run_state_t::run_state
    ```

- ### 当前使能的文件id`id`

    ```C++
    int rm_flowchart_run_state_t::id
    ```

- ### 当前使能的文件名称`name`

    ```C++
    char rm_flowchart_run_state_t::name
    ```

- ### 当前使能的文件全局规划速度比例`plan_speed`

    取值范围1-100。

    ```C++
    int rm_flowchart_run_state_t::plan_speed
    ```

- ### 单步模式`step_mode`

    0为空，1为正常，2为单步。

    ```C++
    int rm_flowchart_run_state_t::step_mode
    ```

- ### 运行到的流程图块的id`modal_id`

    未运行则不返回。

    ```C++
    char rm_flowchart_run_state_t::modal_id[50]
    ```
