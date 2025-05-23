# <p class="hidden">C, C++: </p>Envelope Ball Parameter Set structure `rm_envelope_balls_list_t`

## Class member variable description

- ### Envelope ball parameter list `balls`

     Each tool supports 0−5 envelope balls.

    ```C++
    rm_envelopes_ball_t rm_envelope_balls_list_t::balls[5]
    ```

    *Jump to [rm_envelopes_ball_t](../../struct/envelopesBall/index.md) for details of the structure.*

- ### Envelope ball size `size`

    ```C++  
    int rm_envelope_balls_list_t::size
    ```

- ### Tool frame name `tool_name`

    Tool frame name that already exists in the controller. If it is NULL, set the current envelope parameters temporarily.

    ```C++  
    char rm_envelope_balls_list_t::tool_name[12]
    ```
