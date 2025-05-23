# <p class="hidden">Python: </p>Robotic Arm Software Version Structure `rm_arm_software_version_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`product_version`|`bytes`|Robotic arm model. |
|`algorithm_info`|[`rm_algorithm_version_t`](../algorithmVersion/index.md)|Algorithm library information. |
|`ctrl_info`|[`rm_software_build_info_t`](../softwarinfo/index.md)|ctrl layer software information. |
|`dynamic_info`|[`rm_dynamic_version_t`](../dynamicVersion/index.md)|Dynamic model version. |
|`plan_info`|[`rm_software_build_info_t`](../softwarinfo/index.md)|Plan layer software information. |

## Member function

```Python
rm_arm_software_version_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
