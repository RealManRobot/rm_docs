# <p class="hidden">Python: </p>Electronic Fence/Virtual Wall Enabling State Structure `rm_electronic_fence_enable_t`

## Constructor function

```Python
rm_ctypes_wrap.rm_electronic_fence_enable_t.__init__(self, bool enable_state = None, int in_out_side = None, int effective_region = None)
```

**Parameter description:**

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
| `enable_state`   | `bool, optional`      | Electronic fence/virtual wall enabling state, true: enable, false: disable. |
| `in_out_side`    | `int, optional`       | 0: robot inside the electronic fence/virtual wall, 1: robot outside the electronic fence.     |
| `effective_region`| `int, optional`      | 0: electronic fence effective for the entire robotic arm, 1: virtual wall effective for the end effector.     |

## Member function

```Python
rm_ctypes_wrap.rm_electronic_fence_enable_t.to_dict(self, recurse = True)
```

Output a dictionary as the result
