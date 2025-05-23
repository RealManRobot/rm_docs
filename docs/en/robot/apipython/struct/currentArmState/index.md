# <p class="hidden">Python: </p>Current Robotic Arm State Structure `rm_current_arm_state_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`pose`|[`rm_pose_t`](../pose/index.md)|Current pose of the robotic arm. |
|`joint`|`List[float]`|Current joint angle of the robotic arm, in °. |
|`err`|[`rm_err_t`](../err/index.md)|Error code. |

::: warning

- These fields are usually provided by an external system or hardware and populated through the appropriate interface.
- When clearing error codes, refer to the relevant error code documentation or enumeration.
:::

## Member function

```Python
rm_ctypes_wrap.rm_current_arm_state_t.to_dictionary(self,arm_dof)
```
