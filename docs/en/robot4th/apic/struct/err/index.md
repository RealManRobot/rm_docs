# <p class="hidden">C、C++: </p>Error Code Structure`rm_err_t`

## Class member variable description

- ### Number of Error Codes `err_len`

    ```C++
    uint8_t rm_err_t::err_len
    ```

- ### Error Code Array `err`

    No more than 10 bytes, supporting letters, numbers, and underscores.

    ```C++
    int rm_err_t::err[24]
    ```
