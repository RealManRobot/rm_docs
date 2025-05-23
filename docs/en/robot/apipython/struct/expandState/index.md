# <p class="hidden">Python: </p>Expansion Joint State Structure `rm_expand_state_t`

## Parameter description

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `pos`  |  `int`  |  Expansion joint angle, unit: °, accuracy: 0.001° (for the height of the lifting mechanism, unit: mm, accuracy: 1 mm, range: 0−2,300). |
|  `current`  |  `int`  |  Current drive current, unit: mA, accuracy: 1 mA.  |
|  `err_flag`  |  `int`  |  Drive error code, refer to joint error codes for details.  |
|  `mode`  |  `int`  |  Current state, <br>0: idle, <br>1: forward speed motion, <br>2: forward position motion, <br>3: backward speed motion, <br>4: backward position motion.  |

## Member function

```Python
rm_ctypes_wrap.rm_expand_state_t.to_dict (self, recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
