# <p class="hidden">Python: </p>WiFi Network Information Structure `rm_wifi_net_t`

## Parameter description

|Parameter|Type|Description|
|:--|:--|:--|
|`channel`|`int`|Available only in AP mode, which is the physical channel number that identifies a WiFi hotspot. |
|`ip`|`str`|IP address. |
|`mac`|`str`|MAC address. |
|`mask`|`str`|Subnet mask. |
|`mode`|`str`|'ap': hotspot mode, 'sta': connected mode, 'off': disable wireless mode. |
|`password`|`str`|Password. |
|`ssid`|`str`|SSID. |

## Member function

```Python
rm_ctypes_wrap.rm_wifi_net_t.to_dict(self,recurse = True)
```

Return the class variables as dictionaries and, if the recurse is True, process the structure fields recursively through ctypes.
