# <p class="hidden">Python: </p>Robotic Arm's Global Waypoint Structure `rm_waypoint_t`

## Constructor function

```Python
rm_ctypes_wrap.rm_waypoint_t.__init__(self, point_name: str = None, joint: list[float] = None, pose: list[float] = None, work_frame: str = None, tool_frame: str = None, time: str = ''):
```

**Parameter description:**

| Parameter           | Type                | Description                                       |
| :------------ | :------------------ | :--------------------------------------- |
| `point_name`   | `str, optional`     | Waypoint name, default: None.                    |
| `joint`        | `list[float], optional` | Joint angle list, length: 7, unit: °, default: None. |
| `pose`         | `list[float], optional` | Pose, including position and Euler angle, default: None. The list should be generated in the format of [x, y, z, rx, ry, rz], where [x, y, z] is the position and [rx, ry, rz] is the Euler angle. |
| `work_frame`   | `str, optional`     | Work frame name, default: None.            |
| `tool_frame`   | `str, optional`     | Tool frame name, default: None.         |
| `time`         | `str, optional`     | Waypoint addition or modification time, default: None.     |

## Member function

```Python
rm_ctypes_wrap.rm_waypoint_t.to_dict (self)
```

Return the class variables as dictionaries
