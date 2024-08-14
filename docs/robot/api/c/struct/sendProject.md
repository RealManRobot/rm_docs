# <p class="hidden">C、C++: </p>包络球参数集合结构体`rm_send_project_t`

## 类成员变量说明

- ### 下发文件路径文件名`project_pat`

    每个工具最多支持 5 个包络球，可以没有包络。

    ```C++
    char rm_send_project_t::project_path[300]
    ```

- ### 名称长度`project_path_len`

    ```C++
    int rm_send_project_t::project_path_len
    ```

- ### 规划速度比例系数`tool_nplan_speedame`

    ```C++
    int rm_send_project_t::plan_speed
    ```

- ### 0-运行文件，1-仅保存文件，不运行`only_save`

    ```C++
    int rm_send_project_t::only_save
    ```

- ### 保存到控制器中的编号`save_id`

    ```C++
    int rm_send_project_t::only_save
    ```

- ### 设置单步运行方式模式，1-设置单步模式 0-设置正常运动模式`step_flag`

    ```C++
    int rm_send_project_t::step_flag
    ```
