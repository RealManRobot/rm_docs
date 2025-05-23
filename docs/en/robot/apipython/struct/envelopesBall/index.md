# <p class="hidden">Python: </p>Tool Frame Envelope Ball Parameters `rm_envelopes_ball_t`

## Constructor function

```Python
rm_ctypes_wrap.rm_envelopes_ball_t.__init__(self, str name = None, float radius = None, float x = None, float y = None, float z = None)
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `name` | `str, optional`       | Name of the tool envelope ball, 1 to 10 bytes, supporting letters, numbers, and underscores. Default: None. |
| `radius` | `float, optional`    | Radius of the tool envelope ball, in 0.001 m. Default: None.     |
| `x`    | `float, optional`     | X-coordinate of the tool envelope ball center based on the end flange frame, in m. Default: None. |
| `y`    | `float, optional`     | Y-coordinate of the tool envelope ball center based on the end flange frame, in m. Default: None. |
| `z`    | `float, optional`     | Z-coordinate of the tool envelope ball center based on the end flange frame, in m. Default: None. |

## Member function

```Python
rm_ctypes_wrap.rm_envelopes_ball_t.to_dict(self)
```

Output a dictionary as the result
