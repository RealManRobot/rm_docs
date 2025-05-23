# <p class="hidden">C、C++: </p>错误代码结构体`rm_err_t`

## 类成员变量说明

- ### 错误代码个数`err_len`

    ```C++
    uint8_t rm_err_t::err_len
    ```

- ### 错误代码数组`err`

    不超过 10 个字节，支持字母、数字、下划线。

    ```C++
    int rm_err_t::err[24]
    ```
