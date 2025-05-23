# <p class="hidden">Python: </p>Multiple Drag Teaching Parameter Structure `rm_multi_drag_teach_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `free_axes`    | `List[int]` | Free driving directions [x, y, z, rx, ry, rz], 0: non-draggable on the corresponding axis of the reference frame, 1: draggable on the corresponding axis of the reference frame.   |
| `frame`   | `int`  | Reference frame, 0: work frame, 1: tool frame. |
| `singular_wall`    | `int`   | Available only for the drag teaching in the 6-DoF force mode to enable or disable the drag singular wall, 0: disable drag singular wall, 1: enable drag singular wall, default: enable drag singular wall if no settings. |
