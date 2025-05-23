# <p class="hidden">JSON protocol: </p>Self-Collision Safety Detection Command Set

The Gen 3 robotic arm supports self-collision safety detection. With the self-collision safety detection is enabled, it can be ensured that all parts of the robotic arm will not collide with each other during trajectory planning, teaching and other motions.

## Set the enabling state of the self-collision safety detection `set_self_collision_enable`

- **Input parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`set_self_collision_enable`|`string` | Set the enabling state of the self-collision safety detection. |

- **Output parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
| `set_state` | `bool` | `true`: success, `false`: failure. |

- **Code demo**

**Input**

Set the current virtual wall parameters.

```json
{"command":"set_self_collision_enable","set_enable":false}
```

**Output**

```json
{
    "command": "set_self_collision_enable",
    "set_state": true
}
```

## Get the enabling state of the self-collision safety detection `get_self_collision_enable`

- **Input parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`get_self_collision_enable`|`string` | Get the enabling state of the self-collision safety detection. |

- **Output parameter**

|   Parameter    |  Type    |   Description    |
|   :--     |   :--     |   :--     |
|`enable_state`|`bool`|`true`: enable, `false`: disable. |

- **Code demo**

**Input**

Set the current virtual wall parameters.

```json
{"command":"get_self_collision_enable"}
```

**Output**

```json
{
    "command": "get_self_collision_enable",
    "enable_state": false
}
```
