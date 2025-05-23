# <p class="hidden">C、C++: </p>Digital IO Configuration Structure `rm_io_config_t`

## Explanation of Class Member Variables

- ### Digital IO Mode 0 to 14 `io_mode`

  0-general-purpose input mode

  1-general-purpose output mode

  2-input start function multiplexing mode

  3-input pause function multiplexing mode

  4-input resumption function multiplexing mode

  5-input emergency stop function multiplexing mode

  6-input to current loop drag multiplexing mode

  7-input to position-only drag mode (available for the 6-DoF force version)

  8-input to orientation-only drag mode (available for the 6-DoF force version)

  9-input to position-orientation drag multiplexing mode (available for the 6-DoF force version)

  10-input maximum external axis soft limit multiplexing mode (available for external axis mode)

  11-input minimum external axis soft limit multiplexing mode (available for external axis mode)

  12-input initial pose function multiplexing mode

  13-output collision function multiplexing mode

  14-real-time speed adjustment function multiplexing mode

  ```C++
  int rm_io_config_t::io_mode
  ```

- ### Real-Time Speed Adjustment Function Multiplexing Configuration `io_real_time_config_t`

  Takes effect when the IO mode is 14.

  ```C++
  struct
  {
      int speed;  // speed: the range of speed values is 0-100
      int mode;   // mode: mode: the range of mode values is 1 or 2
  }io_real_time_config_t;
  ```
