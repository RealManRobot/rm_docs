# <p class="hidden">C, C++: </p>Multiple Drag Teaching Parameters `rm_multi_drag_teach_t`

## Class member variable description

### `free_axes`

Free driving directions [x, y, z, rx, ry, rz], 0: non-draggable on the corresponding axis of the reference frame, 1: draggable on the corresponding axis of the reference frame.

```C++
int rm_multi_drag_teach_t::free_axes[6]
```

### `frame`

Reference frame, 0: work frame, 1: tool frame.

```C++
int rm_multi_drag_teach_t::frame
```

### `singular_wall`

Available only for the drag teaching in the 6-DoF force mode to enable or disable the drag singular wall, 0: disable drag singular wall, 1: enable drag singular wall, default: enable drag singular wall if no settings.

```C++
int rm_multi_drag_teach_t::singular_wall
```
