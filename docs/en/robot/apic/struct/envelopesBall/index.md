# <p class="hidden">C, C++: </p>Envelope Ball Parameters `rm_envelopes_ball_t`

## Class member variable description

- ### Name of the tool envelope ball `name`

    1 to 10 bytes, supporting letters, numbers, and underscores.

    ```C++
    char rm_envelopes_ball_t::name[12]
    ```

- ### Radius of the tool envelope ball `radius`

    Unit: 0.001 m.

    ```C++
    float rm_envelopes_ball_t::radius
    ```

- ### X-coordinate of the tool envelope ball center based on the end flange frame `x`

    Unit: m.

    ```C++
    float rm_envelopes_ball_t::x
    ```

- ### Y-coordinate of the tool envelope ball center based on the end flange frame `y`

    Unit: m.

    ```C++
    float rm_envelopes_ball_t::y
    ```

- ### Z-coordinate of the tool envelope ball center based on the end flange frame `z`

    Unit: m.

    ```C++
    float rm_envelopes_ball_t::z
    ```
