# <p class="hidden">Python: </p>Robotic Arm DH Parameter Structure `rm_dh_t`

## Properties

|  Property  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `d`  |  `List[float]`  |  unit: m  |
|  `a`  |  `List[float]`  |  unit: m   |
|  `alpha`  |  `List[float]`  |  unit: °   |
|  `offset`  |  `List[float]`  |  unit: °   |

## Constructor

```Python
__init__(self, d: list[float] = None, a: list[float] = None, alpha: list[float] = None, offset: list[float] = None)
```

**Parameter description**:

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `d`  |  `List[float]`  |  unit: m |
|  `a`  |  `List[float]`  |  unit: m |
|  `alpha`  |  `List[float]`  |  unit: ° |
|  `offset`  |  `List[float]`  |  unit: ° |

## Member Function

```Python
dict[str, list[Any]] Robotic_Arm.rm_ctypes_wrap.rm_dh_t.to_dict(self)
```

Converts the rm_dh_t object to a dictionary representation.

**Parameter description**:

|  Parameter  |  Type  |  Description  |
| :--- | :--- | :--- |
|  `d`  |  `List[float]`  |  unit: m |
|  `a`  |  `List[float]`  |  unit: m |
|  `alpha`  |  `List[float]`  |  unit: ° |
|  `offset`  |  `List[float]`  |  unit: ° |
