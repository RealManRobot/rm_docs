# <p class="hidden">C, C++: </p>Flowchart Program Run State `rm_flowchart_run_state_t`

## Class member variable description

- ### Run State `run_state`

    0: Not Started, 1: Running, 2: Paused.

    ```C++
    int rm_flowchart_run_state_t::run_state
    ```

- ### ID of the Currently Enabled File `id`

    ```C++
    int rm_flowchart_run_state_t::id
    ```

- ### Name of the Currently Enabled File `name`

    ```C++
    char rm_flowchart_run_state_t::name
    ```

- ### Global Planning Speed Ratio of the Currently Enabled File `plan_speed`

    Range: 1 - 100.

    ```C++
    int rm_flowchart_run_state_t::plan_speed
    ```

- ### Step by Step Mode `step_mode`

    0: None, 1: Normal, 2: Step - by - Step.

    ```C++
    int rm_flowchart_run_state_t::step_mode
    ```

- ### ID of the Flowchart Block Currently Being Executed `modal_id`

    Not returned if not running.

    ```C++
    char rm_flowchart_run_state_t::modal_id[50]
    ```
