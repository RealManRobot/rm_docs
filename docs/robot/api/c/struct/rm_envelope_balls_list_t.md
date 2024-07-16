# 包络球参数集合结构体`rm_envelope_balls_list_t`

## 类成员变量说明

- ### 包络参数列表`balls`

    每个工具最多支持 5 个包络球，可以没有包络。

    ```C  
    rm_envelopes_ball_t rm_envelope_balls_list_t::balls[5]
    ```

    *可以跳转[rm_envelopes_ball_t](../struct/rm_envelopes_ball_t.md)查阅结构体详细描述*

- ### 包络球数量`size`

    ```C  
    int rm_envelope_balls_list_t::size
    ```

- ### 工具坐标系名称`tool_name`

    控制器中已存在的工具坐标系名称，如果不存在该字段，则为临时设置当前包络参数

    ```C  
    char rm_envelope_balls_list_t::tool_name[12]
    ```
