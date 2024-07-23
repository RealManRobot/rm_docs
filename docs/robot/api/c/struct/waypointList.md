# 全局路点列表`rm_waypoint_list_t`

## 类成员变量说明

- ### 页码 `page_num`

    ```C  
    int rm_waypoint_list_t::page_num
    ```

- ### 每页大小 `page_size`

    ```C  
    int rm_waypoint_list_t::page_size
    ```

- ### 列表长度 `total_size`

    ```C  
    int rm_waypoint_list_t::total_size
    ```

- ### 模糊搜索 `vague_search`

    ```C  
    char rm_waypoint_list_t::vague_search[32]
    ```

- ### 返回符合的全局路点列表长度 `list_len`

    ```C  
    int rm_waypoint_list_t::list_len
    ```

- ### 返回符合的全局路点列表 `points_list`

    ```C  
    rm_waypoint_t rm_waypoint_list_t::points_list[100]
    ```

    *可以跳转[rm_waypoint_t](../struct/waypoint)查阅结构体类型详细描述*
