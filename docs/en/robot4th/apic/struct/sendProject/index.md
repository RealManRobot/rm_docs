# <p class="hidden">C, C++: </p>Online Programming File Sending `rm_send_project_t`

## Class member variable description

- ### File path and name `project_pat`

    ```C++
    char rm_send_project_t::project_path[300]
    ```

- ### Name length `project_path_len`

    ```C++
    int rm_send_project_t::project_path_len
    ```

- ### Planned speed ratio `plan_speed`

    ```C++
    int rm_send_project_t::plan_speed
    ```

- ### 0: Run the file, 1: Save the file only, without running `only_save`

    ```C++
    int rm_send_project_t::only_save
    ```

- ### Saved file ID in the controller `save_id`

    ```C++
    int rm_send_project_t::only_save
    ```

- ### Single step mode, 1: single step mode, 0: normal motion mode `step_flag`

    ```C++
    int rm_send_project_t::step_flag
    ```

- ### File type 0: online programming file, 1: drag teaching trajectory file`project_type`

    ```C++
    int rm_send_project_t::project_type
    ```
