# 控制器plan 层软件信息的结构体`rm_planinfo_t`

## 属性

|属性名|类型|说明|
|:--|:--|:--|
|`build_time`|`bytes`|编译时间。|
|`version`|`bytes`|版本号。|

## 成员函数

```Python
rm_ctypes_wrap.rm_planinfo_t.to_dict(self,recurse = True)
```

将类的变量返回为字典，如果recurse为True，则递归处理ctypes结构字段。