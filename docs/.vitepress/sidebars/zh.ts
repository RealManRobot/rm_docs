import type { DefaultTheme } from "vitepress";

//第三代机械臂
const robotSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "第三代控制器概述",
      link: "summarize/",
    },
    {
      text: "版本变更说明",
      collapsed: true,
      items: [
        {
          text: "版本变更说明",
          link: "releaseNotes/releaseNotes/",
        },
        {
          text: "历史版本对应关系",
          link: "releaseNotes/versionComparisonTable/",
        },
      ],
    },
    {
      text: "入门指南",
      collapsed: true,
      items: [
        {
          text: "硬件准备",
          link: "quickUseManual/",
        },
        {
          text: "安全指南",
          link: "safetyGuide/",
        },
        {
          text: "硬件接口",
          link: "quickUseManual/interfaceDescriptionArm/",
        },
        {
          text: "参数说明",
          collapsed: true,
          items: [
            {
              text: "RM65系列参数",
              link: "robotParameter/RM65OntologyParameters/",
            },
            {
              text: "RM75系列参数",
              link: "robotParameter/RM75OntologyParameters/",
            },
            {
              text: "RML63系列参数",
              link: "robotParameter/RML63OntologyParameters/",
            },
            // {
            //   text: "ECO62系列参数",
            //   link: "robotParameter/ECO62OntologyParameters",
            // },
            {
              text: "ECO63系列参数",
              link: "robotParameter/ECO63OntologyParameters/",
            },
            {
              text: "ECO65系列参数",
              link: "robotParameter/ECO65OntologyParameters/",
            },
            {
              text: "GEN72系列参数",
              link: "robotParameter/GEN72OntologyParameters/",
            },
          ],
        },
        {
          text: "示教器使用说明",
          collapsed: true,
          items: [
            {
              text: "机械臂示教",
              link: "teachingPendant/armTeching/",
            },
            {
              text: "在线编程",
              link: "teachingPendant/onlineCode/",
            },
            // {
            //   text: "在线编程示例",
            //   link: "teachingPendant/onlineCodeExample",
            // },
            {
              text: "机械臂配置",
              link: "teachingPendant/setting/",
            },
            {
              text: "机械臂系统信息",
              link: "teachingPendant/systemInformation/",
            },
            {
              text: "机械臂系统升级",
              link: "teachingPendant/systemUpgrade/",
            },
            {
              text: "机械臂扩展",
              link: "teachingPendant/extension/",
            },
            {
              text: "MODBUS-TCP功能",
              link: "teachingPendant/modbusTCP/",
            },
            {
              text: "外部接口设置",
              link: "teachingPendant/externalInterface/",
            },
          ],
        },
        {
          text: "选配功能",
          link: "optionalfunction/",
        },
      ],
    },
    {
      text: "Demo演示",
      collapsed: true,
      items: [
        {
          text: "API2(C、C++)示例",
          collapsed: true,
          items: [
            {
              text: "基础示例",
              link: "demo/c/simpleProcess/",
            },
            {
              text: "坐标系操作示例",
              link: "demo/c/coordinateSystem/",
            },
            {
              text: "力位混合控制示例",
              link: "demo/c/forceControl/",
            },
            {
              text: "末端控制夹爪示例",
              link: "demo/c/gripper/",
            },
            {
              text: "IO端口使用示例",
              link: "demo/c/IOControl/",
            },
            {
              text: "升降机控制示例",
              link: "demo/c/lift/",
            },
            {
              text: "Modbus RTU使用示例",
              link: "demo/c/modbusRTU/",
            },
            {
              text: "样条曲线运动示例",
              link: "demo/c/moves/",
            },
            {
              text: "关节角度透传示例",
              link: "demo/c/movejCANFD/",
            },
            {
              text: "在线编程示例",
              link: "demo/c/onlineProgram/",
            },
            {
              text: "算法示例",
              link: "demo/c/algoInterface/",
            },
            {
              text: "试管夹取模拟",
              link: "demo/c/tubePicking/",
            },
          ],
        },
        {
          text: "API2(Python)示例",
          collapsed: true,
          items: [
            {
              text: "基础示例",
              link: "demo/python/simpleProcess/",
            },
            {
              text: "坐标系操作示例",
              link: "demo/python/coordinateSystem/",
            },
            {
              text: "多机械臂控制操作示例",
              link: "demo/python/doubleRoboticArm/",
            },
            {
              text: "机械臂力控示例",
              link: "demo/python/forceControl/",
            },
            {
              text: "末端控制夹爪示例",
              link: "demo/python/gripper/",
            },
            {
              text: "IO功能使用示例",
              link: "demo/python/IOControl/",
            },
            {
              text: "升降机控制示例",
              link: "demo/python/lift/",
            },
            {
              text: "Modbus RTU示例",
              link: "demo/python/modbusRTU/",
            },
            {
              text: "样条曲线运动示例",
              link: "demo/python/moves/",
            },
            {
              text: "角度透传示例",
              link: "demo/python/movejCANFD/",
            },
            {
              text: "在线编程示例",
              link: "demo/python/onlineProgram/",
            },
            {
              text: "算法示例",
              link: "demo/python/algoInterface/",
            },
          ],
        },
        {
          text: "ROS示例",
          collapsed: true,
          items: [
            {
              text: "机械臂运动控制",
              link: "demo/ros/controlArmMove/",
            },
            {
              text: "力位混合控制规划",
              link: "demo/ros/forcePositionControl/",
            },
            {
              text: "机械臂状态",
              link: "demo/ros/armState/",
            },
          ],
        },
        {
          text: "ROS2示例",
          collapsed: true,
          items: [
            {
              text: "Foxy",
              collapsed: true,
              items: [
                {
                  text: "机械臂运动控制",
                  link: "demo/ros2/foxycontrolArmMove/",
                },
                {
                  text: "力位混合控制规划",
                  link: "demo/ros2/foxyforcePositionControl/",
                },
                {
                  text: "获取机械臂状态",
                  link: "demo/ros2/foxygetArmState/",
                },
              ],
            },
            {
              text: "Humble",
              collapsed: true,
              items: [
                {
                  text: "机械臂运动控制",
                  link: "demo/ros2/humblecontrolArmMove/",
                },
                {
                  text: "力位混合控制规划",
                  link: "demo/ros2/humbleforcePositionControl/",
                },
                {
                  text: "获取机械臂状态",
                  link: "demo/ros2/humblegetArmState/",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "JSON协议",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "json/getStartedJson/",
        },
        {
          text: "关节参数指令集",
          link: "json/jointParameter/",
        },
        {
          text: "运动参数指令集",
          link: "json/armConfig/",
        },
        {
          text: "运动指令集",
          link: "json/motionConfig/",
        },
        {
          text: "坐标系指令集",
          link: "json/coordinate/",
        },
        {
          text: "状态查询指令集",
          link: "json/armState/",
        },
        {
          text: "系统指令集",
          link: "json/systemConfig/",
        },
        {
          text: "网络配置指令集",
          link: "json/networkConfig/",
        },
        {
          text: "IO配置指令集",
          link: "json/ioConfig/",
        },
        {
          text: "UDP 主动上报指令集",
          link: "json/udpConfig/",
        },
        {
          text: "在线编程指令集",
          link: "json/onlineProgram/",
        },
        {
          text: "拖动示教指令集",
          link: "json/dragTech/",
        },
        {
          text: "Modbus指令集",
          link: "json/modbus/",
        },
        {
          text: "电子围栏与虚拟墙指令集",
          link: "json/electronicFence/",
        },
        {
          text: "自碰撞安全检测配置",
          link: "json/selfCollision/",
        },
        {
          text: "力传感器指令集（选配）",
          link: "json/forceSensor/",
        },
        {
          text: "末端工具指令集（选配）",
          link: "json/endTool/",
        },
        {
          text: "末端生态指令集（选配）",
          link: "json/endeffector/",
        },
        {
          text: "控制器扩展设备指令集（选配）",
          link: "json/expandControl/",
        },
        {
          text: "附录：错误代码",
          link: "json/errorList/",
        },
      ],
    },
    {
      text: "API2(C、C++)",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "apic/getStarted/",
        },
        {
          text: "接口说明",
          collapsed: true,
          items: [
            {
              text: "机械臂连接配置",
              link: "apic/classes/roboticArm/",
            },
            {
              text: "机械臂轨迹控制",
              link: "apic/classes/movePlan/",
            },
            {
              text: "工具坐标系配置",
              link: "apic/classes/toolCoordinateConfig/",
            },
            {
              text: "工作坐标系配置",
              link: "apic/classes/workCoordinateConfig/",
            },
            {
              text: "机械臂状态查询",
              link: "apic/classes/armState/",
            },
            {
              text: "末端运动参数配置",
              link: "apic/classes/armTipVelocityParameters/",
            },
            {
              text: "机械臂示教指令",
              link: "apic/classes/armTeachMove/",
            },
            {
              text: "拖动示教配置",
              link: "apic/classes/dragTeach/",
            },
            {
              text: "机械臂运动状态控制",
              link: "apic/classes/armMotionControl/",
            },
            {
              text: "通讯内容配置",
              link: "apic/classes/communicationConfig/",
            },
            {
              text: "系统配置",
              link: "apic/classes/controllerConfig/",
            },
            {
              text: "系统安装方式配置",
              link: "apic/classes/installPos/",
            },
            {
              text: "通用扩展关节配置",
              link: "apic/classes/expandControl/",
            },
            {
              text: "升降机构配置",
              link: "apic/classes/liftControl/",
            },
            {
              text: "末端六维力配置",
              link: "apic/classes/force/",
            },
            {
              text: "电子围栏和虚拟墙配置",
              link: "apic/classes/electronicFenceConfig/",
            },
            {
              text: "透传力位混合控制补偿配置",
              link: "apic/classes/forcePositionControl/",
            },
            {
              text: "全局路点管理",
              link: "apic/classes/globalWaypointManage/",
            },
            {
              text: "末端工具夹爪配置",
              link: "apic/classes/gripperControl/",
            },
            {
              text: "五指灵巧手配置",
              link: "apic/classes/handControl/",
            },
            {
              text: "末端生态协议配置",
              link: "apic/classes/rmPlus/",
            },
            {
              text: "控制器IO配置及查询",
              link: "apic/classes/controllerIOConfig/",
            },
            {
              text: "末端工具IO配置",
              link: "apic/classes/effectorIOConfig/",
            },
            {
              text: "关节配置",
              link: "apic/classes/jointConfigSettings/",
            },
            {
              text: "关节配置查询",
              link: "apic/classes/jointConfigRead/",
            },
            {
              text: "Modbus 配置",
              link: "apic/classes/modbusConfig/",
            },
            {
              text: "自碰撞安全检测配置",
              link: "apic/classes/selfCollision/",
            },
            {
              text: "在线编程文件管理",
              link: "apic/classes/projectManagement/",
            },
            {
              text: "算法接口配置",
              link: "apic/classes/algo/",
            },
            {
              text: "UDP 主动上报配置",
              link: "apic/classes/udpConfig/",
            },
          ],
        },
        {
          text: "结构体",
          collapsed: true,
          items: [
            {
              text: "全部状态",
              link: "apic/struct/allState/",
            },
            {
              text: "当前状态",
              link: "apic/struct/currentState/",
            },
            {
              text: "关节状态",
              link: "apic/struct/jointStatus/",
            },
            {
              text: "关节软件版本",
              link: "apic/struct/version/",
            },
            {
              text: "机械臂基本信息",
              link: "apic/struct/robotInfo/",
            },
            {
              text: "位置姿态",
              link: "apic/struct/pose/",
            },
            {
              text: "位置坐标",
              link: "apic/struct/position/",
            },
            {
              text: "控制器ctrl层软件信息",
              link: "apic/struct/ctrlversion/",
            },
            {
              text: "坐标系",
              link: "apic/struct/frame/",
            },
            {
              text: "坐标系名称",
              link: "apic/struct/frameName/",
            },
            {
              text: "在线编程运行状态",
              link: "apic/struct/programRunState/",
            },
            {
              text: "在线编程列表",
              link: "apic/struct/programTrajectorys/",
            },
            {
              text: "在线编程储存",
              link: "apic/struct/trajectoryData/",
            },
            {
              text: "流程图程序运行状态",
              link: "apic/struct/flowchartstate/",
            },
            {
              text: "全局点位列表",
              link: "apic/struct/waypointList/",
            },
            {
              text: "全局点位储存",
              link: "apic/struct/waypoint/",
            },
            {
              text: "软件版本",
              link: "apic/struct/softwareVersion/",
            },
            {
              text: "软件信息",
              link: "apic/struct/softwarinfo/",
            },
            {
              text: "夹爪状态",
              link: "apic/struct/gripperState/",
            },
            {
              text: "包络球参数列表",
              link: "apic/struct/envelopeBallsList/",
            },
            {
              text: "包络球参数",
              link: "apic/struct/envelopesBall/",
            },
            {
              text: "下发在线编程文件",
              link: "apic/struct/sendProject/",
            },
            {
              text: "升降机/扩展关节状态",
              link: "apic/struct/expandState/",
            },
            {
              text: "电子围栏/虚拟墙使能状态",
              link: "apic/struct/electronicFenceEnable/",
            },
            {
              text: "动力学模型",
              link: "apic/struct/dynamicVersion/",
            },
            {
              text: "几何体模型参数",
              link: "apic/struct/fenceConfig/",
            },
            {
              text: "几何体模型长方体",
              link: "apic/struct/fenceConfigCube/",
            },
            {
              text: "几何模型参数列表",
              link: "apic/struct/fenceConfigList/",
            },
            {
              text: "几何体模型矢量平面",
              link: "apic/struct/fenceConfigPlane/",
            },
            {
              text: "几何体模型球体",
              link: "apic/struct/fenceConfigSphere/",
            },
            {
              text: "力传感器数据",
              link: "apic/struct/forceSensor/",
            },
            {
              text: "六维力传感器数据",
              link: "apic/struct/forceData/",
            },
            {
              text: "机械臂控制句柄",
              link: "apic/struct/robotHandle/",
            },
            {
              text: "无线网络信息",
              link: "apic/struct/wifiNet/",
            },
            {
              text: "外设数据读写",
              link: "apic/struct/peripheralReadWriteParams/",
            },
            {
              text: "UDP主动上报自定义项",
              link: "apic/struct/udpCustomConfig/",
            },
            {
              text: "UDP主动上报接口配置",
              link: "apic/struct/realtimePushConfig/",
            },
            {
              text: "UDP主动上报扩展关节状态",
              link: "apic/struct/udpExpandState/",
            },
            {
              text: "UDP主动上报升降机构状态",
              link: "apic/struct/udpLiftState/",
            },
            {
              text: "UDP主动上报灵巧手状态",
              link: "apic/struct/udpHandState/",
            },
            {
              text: "UDP主动上报aloha主臂状态",
              link: "apic/struct/udpAlohaState/",
            },
            {
              text: "UDP机械臂实时状态推送",
              link: "apic/struct/realtimeArmJointState/",
            },
            {
              text: "算法库版本",
              link: "apic/struct/algorithmVersion/",
            },
            {
              text: "算法包络参数结构体",
              link: "apic/struct/toolEnvelopeSphere/",
            },
            {
              text: "欧拉角",
              link: "apic/struct/euler/",
            },
            {
              text: "四元数",
              link: "apic/struct/quat/",
            },
            {
              text: "旋转矩阵",
              link: "apic/struct/matrix/",
            },
            {
              text: "逆解参数",
              link: "apic/struct/inverseKinematicsParams/",
            },
            {
              text: "逆解求全解参数结构体",
              link: "apic/struct/inverseKinematicsAllParams/",
            },
            {
              text: "编译说明",
              link: "apic/struct/planinfo/",
            },
            {
              text: "力位混合控制",
              link: "apic/struct/forcePosition/",
            },
            {
              text: "透传力位混合补偿",
              link: "apic/struct/forcePositionMove/",
            },
            {
              text: "复合模式拖动示教",
              link: "apic/struct/multiDragTeach/",
            },
            {
              text: "数字IO配置",
              link: "apic/struct/ioConfig/",
            },
            {
              text: "数字IO状态获取",
              link: "apic/struct/ioGetConfig/",
            },
            {
              text: "角度透传模式配置参数",
              link: "apic/struct/movejCanfdMode/",
            },
            {
              text: "姿态透传模式配置参数",
              link: "apic/struct/movepCanfdMode/",
            },
            {
              text: "末端设备基础信息",
              link: "apic/struct/plusBase/",
            },
            {
              text: "末端设备实时信息",
              link: "apic/struct/plusState/",
            },            
            {
              text: "错误代码结构体",
              link: "apic/struct/err/",
            },
          ],
        },
        {
          text: "枚举",
          link: "apic/type/",
        },
        {
          text: "API2错误代码",
          link: "apierrorList2/",
        },
      ],
    },
    {
      text: "API2(Python)",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "apipython/getStarted/",
        },
        {
          text: "接口说明",
          collapsed: true,
          items: [
            {
              text: "机械臂连接控制",
              link: "apipython/classes/roboticArm/",
            },
            {
              text: "机械臂轨迹控制",
              link: "apipython/classes/movePlan/",
            },
            {
              text: "工具坐标系配置",
              link: "apipython/classes/toolCoordinateConfig/",
            },
            {
              text: "工作坐标系配置",
              link: "apipython/classes/workCoordinateConfig/",
            },
            {
              text: "机械臂状态查询",
              link: "apipython/classes/armState/",
            },
            {
              text: "机械臂运动参数配置",
              link: "apipython/classes/tipVelocityParameters/",
            },
            {
              text: "机械臂示教及步进运动控制",
              link: "apipython/classes/teachMove/",
            },
            {
              text: "拖动示教配置",
              link: "apipython/classes/dragTeach/",
            },
            {
              text: "机械臂运动状态控制",
              link: "apipython/classes/motionControl/",
            },
            {
              text: "通讯内容配置",
              link: "apipython/classes/communicationConfig/",
            },
            {
              text: "系统配置",
              link: "apipython/classes/controllerConfig/",
            },
            {
              text: "系统安装方式配置",
              link: "apipython/classes/installPos/",
            },
            {
              text: "通用扩展关节配置",
              link: "apipython/classes/expandControl/",
            },
            {
              text: "升降机构配置",
              link: "apipython/classes/liftControl/",
            },
            {
              text: "末端六维力配置",
              link: "apipython/classes/force/",
            },
            {
              text: "电子围栏和虚拟墙配置",
              link: "apipython/classes/electronicFenceConfig/",
            },
            {
              text: "透传力位混合控制补偿配置",
              link: "apipython/classes/forcePositionControl/",
            },
            {
              text: "全局路点管理",
              link: "apipython/classes/globalWaypointManage/",
            },
            {
              text: "末端工具夹爪配置",
              link: "apipython/classes/gripperControl/",
            },
            {
              text: "五指灵巧手配置",
              link: "apipython/classes/handControl/",
            },
            {
              text: "末端生态协议配置",
              link: "apipython/classes/rmPlus/",
            },
            {
              text: "控制器IO配置及查询",
              link: "apipython/classes/controllerIOConfig/",
            },
            {
              text: "末端工具IO配置",
              link: "apipython/classes/effectorIOConfig/",
            },
            {
              text: "关节配置",
              link: "apipython/classes/jointsConfig/",
            },
            {
              text: "关节配置查询",
              link: "apipython/classes/jointsConfigQuery/",
            },
            {
              text: "Modbus 配置",
              link: "apipython/classes/modbusConfig/",
            },
            {
              text: "自碰撞安全检测接口配置",
              link: "apipython/classes/selfCollision/",
            },
            {
              text: "在线编程文件管理",
              link: "apipython/classes/projectManagement/",
            },
            {
              text: "算法接口配置",
              link: "apipython/classes/algo/",
            },
            {
              text: "UDP 主动上报配置",
              link: "apipython/classes/udpConfig/",
            },
          ],
        },
        {
          text: "结构体",
          collapsed: true,
          items: [
            {
              text: "算法库信息",
              link: "apipython/struct/algorithmVersion/",
            },
            {
              text: "算法包络参数结构体",
              link: "apipython/struct/algoToolEnvelope/",
            },
            {
              text: "机械臂所有状态参数",
              link: "apipython/struct/armAllState/",
            },
            {
              text: "机械臂软件版本信息",
              link: "apipython/struct/armSoftwareVersion/",
            },
            {
              text: "控制器ctrl层软件信息",
              link: "apipython/struct/ctrlVersion/",
            },
            {
              text: "软件信息",
              link: "apipython/struct/softwarinfo/",
            },
            {
              text: "机械臂当前状态",
              link: "apipython/struct/currentArmState/",
            },
            {
              text: "流程图程序运行状态",
              link: "apipython/struct/flowchartstate/",
            },
            {
              text: "动力学版本信息",
              link: "apipython/struct/dynamicVersion/",
            },
            {
              text: "电子围栏/虚拟墙",
              link: "apipython/struct/electronicFenceEnable/",
            },
            {
              text: "工具坐标系包络参数",
              link: "apipython/struct/envelopesBall/",
            },
            {
              text: "工具坐标系包络参数列表",
              link: "apipython/struct/envelopeBallsList/",
            },
            {
              text: "欧拉角",
              link: "apipython/struct/euler/",
            },
            {
              text: "机械臂到位事件",
              link: "apipython/struct/eventPushData/",
            },
            {
              text: "扩展关节状态",
              link: "apipython/struct/expandState/",
            },
            {
              text: "电子围栏参数",
              link: "apipython/struct/fenceConfig/",
            },
            {
              text: "几何模型长方体参数",
              link: "apipython/struct/fenceConfigCube/",
            },
            {
              text: "几何模型参数列表",
              link: "apipython/struct/fenceConfigList/",
            },
            {
              text: "几何模型点面矢量平面参数",
              link: "apipython/struct/fenceConfigPlane/",
            },
            {
              text: "几何模型球体参数",
              link: "apipython/struct/fenceConfigSphere/",
            },
            {
              text: "几何模型名称",
              link: "apipython/struct/fenceNames/",
            },
            {
              text: "六维力传感器数据",
              link: "apipython/struct/forceData/",
            },
            {
              text: "力控数据",
              link: "apipython/struct/forceSensor/",
            },
            {
              text: "机械臂位置姿态",
              link: "apipython/struct/frame/",
            },
            {
              text: "坐标系名称",
              link: "apipython/struct/frameName/",
            },
            {
              text: "夹爪状态",
              link: "apipython/struct/gripperState/",
            },
            {
              text: "逆运动学参数",
              link: "apipython/struct/inverseKinematicsParams/",
            },
            {
              text: "逆运动学全解参数结构体",
              link: "apipython/struct/inverseKinematicsAllSolve/",
            },
            {
              text: "机械臂关节状态",
              link: "apipython/struct/jointStatus/",
            },
            {
              text: "关节软件版本",
              link: "apipython/struct/version/",
            },
            {
              text: "矩阵",
              link: "apipython/struct/matrix/",
            },
            {
              text: "读写外设数据参数",
              link: "apipython/struct/peripheralReadWriteParams/",
            },
            {
              text: "控制器plan层软件信息",
              link: "apipython/struct/planinfo/",
            },
            {
              text: "坐标系",
              link: "apipython/struct/pose/",
            },
            {
              text: "位置",
              link: "apipython/struct/position/",
            },
            {
              text: "机械臂程序运行状态",
              link: "apipython/struct/programRunState/",
            },
            {
              text: "查询在线编程列表",
              link: "apipython/struct/programTrajectorys/",
            },
            {
              text: "四元数",
              link: "apipython/struct/quat/",
            },
            {
              text: "UDP主动上报自定义项",
              link: "apipython/struct/udpCustomConfig/",
            },
            {
              text: "UDP主动上报机械臂配置",
              link: "apipython/struct/realtimePushConfig/",
            },
            {
              text: "UDP主动上报扩展关节状态",
              link: "apipython/struct/udpExpandState/",
            },
            {
              text: "UDP主动上报升降机构状态",
              link: "apipython/struct/udpLiftState/",
            },
            {
              text: "UDP主动上报灵巧手状态",
              link: "apipython/struct/udpHandState/",
            },
            {
              text: "UDP主动上报aloha主臂状态",
              link: "apipython/struct/udpAlohaState/",
            },
            {
              text: "UDP机械臂实时状态推送",
              link: "apipython/struct/realtimeArmJointState/",
            },
            {
              text: "句柄",
              link: "apipython/struct/robotHandle/",
            },
            {
              text: "机械臂基本信息",
              link: "apipython/struct/robotInfo/",
            },
            {
              text: "发送编程文件信息",
              link: "apipython/struct/sendProject/",
            },
            {
              text: "在线编程存储信息",
              link: "apipython/struct/trajectoryData/",
            },
            {
              text: "全局路点",
              link: "apipython/struct/waypoint/",
            },
            {
              text: "全局路点列表",
              link: "apipython/struct/waypointList/",
            },
            {
              text: "无线网络信息",
              link: "apipython/struct/wifiNet/",
            },
            {
              text: "力位混合控制",
              link: "apipython/struct/forcePosition/",
            },
            {
              text: "透传力位混合补偿",
              link: "apipython/struct/forcePositionMove/",
            },
            {
              text: "复合模式拖动示教",
              link: "apipython/struct/multiDragTeach/",
            },
            {
              text: "末端设备基础信息",
              link: "apipython/struct/rmPlusBaseInfo/",
            },
            {
              text: "末端设备实时信息",
              link: "apipython/struct/rmPlusStateInfo/",
            },
            {
              text: "错误代码结构体",
              link: "apipython/struct/err/",
            },
          ],
        },
        {
          text: "枚举",
          link: "apipython/type/",
        },
        {
          text: "API2错误代码",
          link: "apierrorList2",
        },
      ],
    },
    {
      text: "ROS开发",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "ros/getStarted/",
        },
        {
          text: "RM-机械臂驱动功能包",
          link: "ros/driver/",
        },
        {
          text: "RM-快速启动功能包",
          link: "ros/bringup/",
        },
        {
          text: "RM-Moveit通信功能包",
          link: "ros/control/",
        },
        {
          text: "RM-机械臂模型功能包",
          link: "ros/description/",
        },
        {
          text: "RM-机械臂ROS示例",
          link: "ros/example/",
        },
        {
          text: "RM-Gazebo功能包",
          link: "ros/gazebo/",
        },
        {
          text: "RM-Moveit控制功能包",
          link: "ros/moveitConfig/",
        },
        {
          text: "RM-机械臂ROS话题说明",
          link: "ros/driverDetailDescription/",
        },
        {
          text: "RM-ROS包消息列表",
          link: "ros/msg/",
        },
      ],
    },
    {
      text: "ROS2开发",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "ros2/getStarted/",
        },
        {
          text: "RM-机械臂驱动功能包",
          link: "ros2/driver/",
        },
        {
          text: "RM-快速启动功能包",
          link: "ros2/bringup/",
        },
        {
          text: "RM-Moveit通信功能包",
          link: "ros2/control/",
        },
        {
          text: "RM-机械臂模型功能包",
          link: "ros2/description/",
        },
        {
          text: "RM-机械臂ROS2示例",
          link: "ros2/example/",
        },
        {
          text: "RM-Gazebo功能包",
          link: "ros2/gazebo/",
        },
        {
          text: "RM-Moveit2控制功能包",
          link: "ros2/moveit2Config/",
        },
        {
          text: "RM-机械臂ROS2话题说明",
          link: "ros2/ros2Description/",
        },
        {
          text: "RM-自定义消息说明",
          link: "ros2/rosInterfaces/",
        },
      ],
    },
    {
      text: "Modbus",
      collapsed: true,
      items: [
        {
          text: "Modbus从站地址表",
          link: "modbus/",
        },
      ],
    },
    // {
    //   text: "末端生态",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "末端生态列表",
    //       link: "appendix/endeffector/",
    //     },
    //   ],
    // },
    {
      text: "常见问题",
      collapsed: true,
      items: [
        {
          text: "快速使用常见问题",
          link: "FQA/nounConcept/",
        },
        {
          text: "机械臂API开发常见问题",
          link: "FQA/sdk/",
        },
        {
          text: "API错误代码",
          link: "apierrorList/",
        },
      ],
    },
    {
      text: "相关下载",
      collapsed: true,
      items: [
        {
          text: "二次开发包",
          link: "download/redevelopment/",
        },
        {
          text: "模型和尺寸图",
          link: "download/model/",
        },
      ],
    },
  ];
};
//第四代机械臂
const robotSide4th = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "第四代控制器概述",
      link: "summarize/",
    },
    {
      text: "版本变更说明",
      link: "releaseNotes/releaseNotesfour/",
    },
    {
      text: "入门指南",
      collapsed: true,
      items: [
        {
          text: "硬件准备",
          link: "quickUseManual/",
        },
        {
          text: "安全指南",
          link: "safetyGuide/",
        },
        {
          text: "硬件接口",
          link: "quickUseManual/interfaceDescriptionArm/",
        },
        {
          text: "参数说明",
          collapsed: true,
          items: [
            {
              text: "RM65系列参数",
              link: "robotParameter/RM65OntologyParameters/",
            },
            {
              text: "RM75系列参数",
              link: "robotParameter/RM75OntologyParameters/",
            },
            {
              text: "RML63系列参数",
              link: "robotParameter/RML63OntologyParameters/",
            },
            // {
            //   text: "ECO62系列参数",
            //   link: "robotParameter/ECO62OntologyParameters",
            // },
            {
              text: "ECO63系列参数",
              link: "robotParameter/ECO63OntologyParameters/",
            },
            {
              text: "ECO65系列参数",
              link: "robotParameter/ECO65OntologyParameters/",
            },
            // {
            //   text: "GEN72系列参数",
            //   link: "robotParameter/GEN72OntologyParameters/",
            // },
          ],
        },
        {
          text: "示教器使用说明",
          collapsed: true,
          items: [
            {
              text: "机械臂示教",
              link: "teachingPendantfour/armTeching/",
            },
            {
              text: "示教器操作指导",
              link: "teachingPendantfour/onlineCode/",
            },
            // {
            //   text: "在线编程示例",
            //   link: "teachingPendant/onlineCodeExample",
            // },
            {
              text: "机械臂配置",
              link: "teachingPendantfour/setting/",
            },
            {
              text: "机械臂状态",
              link: "teachingPendantfour/systemInformation/",
            },
            {
              text: "机械臂扩展",
              link: "teachingPendantfour/extension/",
            },
          ],
        },
        {
          text: "选配功能",
          link: "optionalfunction/",
        },
      ],
    },
    // {
    //   text: "Demo演示",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "API2(C、C++)示例",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "基础示例",
    //           link: "demo/c/simpleProcess/",
    //         },
    //         {
    //           text: "坐标系操作示例",
    //           link: "demo/c/coordinateSystem/",
    //         },
    //         {
    //           text: "力位混合控制示例",
    //           link: "demo/c/forceControl/",
    //         },
    //         {
    //           text: "末端控制夹爪示例",
    //           link: "demo/c/gripper/",
    //         },
    //         {
    //           text: "IO端口使用示例",
    //           link: "demo/c/IOControl/",
    //         },
    //         {
    //           text: "升降机控制示例",
    //           link: "demo/c/lift/",
    //         },
    //         {
    //           text: "Modbus RTU使用示例",
    //           link: "demo/c/modbusRTU/",
    //         },
    //         {
    //           text: "样条曲线运动示例",
    //           link: "demo/c/moves/",
    //         },
    //         {
    //           text: "关节角度透传示例",
    //           link: "demo/c/movejCANFD/",
    //         },
    //         {
    //           text: "在线编程示例",
    //           link: "demo/c/onlineProgram/",
    //         },
    //         {
    //           text: "算法示例",
    //           link: "demo/c/algoInterface/",
    //         },
    //         {
    //           text: "试管夹取模拟",
    //           link: "demo/c/tubePicking/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "API2(Python)示例",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "基础示例",
    //           link: "demo/python/simpleProcess/",
    //         },
    //         {
    //           text: "坐标系操作示例",
    //           link: "demo/python/coordinateSystem/",
    //         },
    //         {
    //           text: "多机械臂控制操作示例",
    //           link: "demo/python/doubleRoboticArm/",
    //         },
    //         {
    //           text: "机械臂力控示例",
    //           link: "demo/python/forceControl/",
    //         },
    //         {
    //           text: "末端控制夹爪示例",
    //           link: "demo/python/gripper/",
    //         },
    //         {
    //           text: "IO功能使用示例",
    //           link: "demo/python/IOControl/",
    //         },
    //         {
    //           text: "升降机控制示例",
    //           link: "demo/python/lift/",
    //         },
    //         {
    //           text: "Modbus RTU示例",
    //           link: "demo/python/modbusRTU/",
    //         },
    //         {
    //           text: "样条曲线运动示例",
    //           link: "demo/python/moves/",
    //         },
    //         {
    //           text: "角度透传示例",
    //           link: "demo/python/movejCANFD/",
    //         },
    //         {
    //           text: "在线编程示例",
    //           link: "demo/python/onlineProgram/",
    //         },
    //         {
    //           text: "算法示例",
    //           link: "demo/python/algoInterface/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "ROS示例",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "机械臂运动控制",
    //           link: "demo/ros/controlArmMove/",
    //         },
    //         {
    //           text: "力位混合控制规划",
    //           link: "demo/ros/forcePositionControl/",
    //         },
    //         {
    //           text: "机械臂状态",
    //           link: "demo/ros/armState/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "ROS2示例",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "Foxy",
    //           collapsed: true,
    //           items: [
    //             {
    //               text: "机械臂运动控制",
    //               link: "demo/ros2/foxycontrolArmMove/",
    //             },
    //             {
    //               text: "力位混合控制规划",
    //               link: "demo/ros2/foxyforcePositionControl/",
    //             },
    //             {
    //               text: "获取机械臂状态",
    //               link: "demo/ros2/foxygetArmState/",
    //             },
    //           ],
    //         },
    //         {
    //           text: "Humble",
    //           collapsed: true,
    //           items: [
    //             {
    //               text: "机械臂运动控制",
    //               link: "demo/ros2/humblecontrolArmMove/",
    //             },
    //             {
    //               text: "力位混合控制规划",
    //               link: "demo/ros2/humbleforcePositionControl/",
    //             },
    //             {
    //               text: "获取机械臂状态",
    //               link: "demo/ros2/humblegetArmState/",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      text: "JSON协议",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "json/getStartedJson/",
        },
        {
          text: "关节参数指令集",
          link: "json/jointParameter/",
        },
        {
          text: "运动参数指令集",
          link: "json/armConfig/",
        },
        {
          text: "运动指令集",
          link: "json/motionConfig/",
        },
        {
          text: "坐标系指令集",
          link: "json/coordinate/",
        },
        {
          text: "状态查询指令集",
          link: "json/armState/",
        },
        {
          text: "系统指令集",
          link: "json/systemConfig/",
        },
        {
          text: "网络配置指令集",
          link: "json/networkConfig/",
        },
        {
          text: "IO配置指令集",
          link: "json/ioConfig/",
        },
        {
          text: "UDP 主动上报指令集",
          link: "json/udpConfig/",
        },
        {
          text: "在线编程指令集",
          link: "json/onlineProgram/",
        },
        {
          text: "拖动示教指令集",
          link: "json/dragTech/",
        },
        {
          text: "Modbus指令集",
          link: "json/modbusfour/",
        },
        {
          text: "轨迹文件指令集",
          link: "json/trajectoryfile/",
        },
        // {
        //   text: "电子围栏与虚拟墙指令集",
        //   link: "json/electronicFence/",
        // },
        // {
        //   text: "自碰撞安全检测配置",
        //   link: "json/selfCollision/",
        // },
        {
          text: "力传感器指令集（选配）",
          link: "json/forceSensor/",
        },
        {
          text: "末端工具指令集（选配）",
          link: "json/endTool/",
        },
        // {
        //   text: "末端生态指令集",
        //   link: "json/endeffector/",
        // },
        {
          text: "控制器扩展设备指令集（选配）",
          link: "json/expandControl/",
        },
        {
          text: "附录：错误代码",
          link: "json/errorList/",
        },
      ],
    },
    {
      text: "API2(C、C++)",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "apic/getStarted/",
        },
        {
          text: "接口说明",
          collapsed: true,
          items: [
            {
              text: "机械臂连接配置",
              link: "apic/classes/roboticArm/",
            },
            {
              text: "机械臂轨迹控制",
              link: "apic/classes/movePlan/",
            },
            {
              text: "工具坐标系配置",
              link: "apic/classes/toolCoordinateConfig/",
            },
            {
              text: "工作坐标系配置",
              link: "apic/classes/workCoordinateConfig/",
            },
            {
              text: "机械臂状态查询",
              link: "apic/classes/armState/",
            },
            {
              text: "末端运动参数配置",
              link: "apic/classes/armTipVelocityParameters/",
            },
            {
              text: "机械臂示教指令",
              link: "apic/classes/armTeachMove/",
            },
            {
              text: "拖动示教配置",
              link: "apic/classes/dragTeach/",
            },
            {
              text: "机械臂运动状态控制",
              link: "apic/classes/armMotionControl/",
            },
            {
              text: "通讯内容配置",
              link: "apic/classes/communicationConfig/",
            },
            {
              text: "系统配置",
              link: "apic/classes/controllerConfig/",
            },
            {
              text: "系统安装方式配置",
              link: "apic/classes/installPos/",
            },
            {
              text: "通用扩展关节配置",
              link: "apic/classes/expandControl/",
            },
            {
              text: "升降机构配置",
              link: "apic/classes/liftControl/",
            },
            {
              text: "末端六维力配置",
              link: "apic/classes/force/",
            },
            // {
            //   text: "电子围栏和虚拟墙配置",
            //   link: "apic/classes/electronicFenceConfig/",
            // },
            {
              text: "透传力位混合控制补偿配置",
              link: "apic/classes/forcePositionControl/",
            },
            {
              text: "全局路点管理",
              link: "apic/classes/globalWaypointManage/",
            },
            {
              text: "末端工具夹爪配置",
              link: "apic/classes/gripperControl/",
            },
            {
              text: "五指灵巧手配置",
              link: "apic/classes/handControl/",
            },
            // {
            //   text: "末端生态协议配置",
            //   link: "apic/classes/rmPlus/",
            // },
            {
              text: "控制器IO配置及查询",
              link: "apic/classes/controllerIOConfig/",
            },
            {
              text: "末端工具IO配置",
              link: "apic/classes/effectorIOConfig/",
            },
            {
              text: "关节配置",
              link: "apic/classes/jointConfigSettings/",
            },
            {
              text: "关节配置查询",
              link: "apic/classes/jointConfigRead/",
            },
            {
              text: "Modbus 配置",
              link: "apic/classes/modbusfour/",
            },
            {
              text: "轨迹文件",
              link: "apic/classes/trajectoryfile/",
            },
            // {
            //   text: "自碰撞安全检测配置",
            //   link: "apic/classes/selfCollision/",
            // },
            {
              text: "在线编程文件管理",
              link: "apic/classes/projectManagement/",
            },
            {
              text: "算法接口配置",
              link: "apic/classes/algo/",
            },
            {
              text: "UDP 主动上报配置",
              link: "apic/classes/udpConfig/",
            },
          ],
        },
        {
          text: "结构体",
          collapsed: true,
          items: [
            {
              text: "全部状态",
              link: "apic/struct/allState/",
            },
            {
              text: "当前状态",
              link: "apic/struct/currentState/",
            },
            {
              text: "关节状态",
              link: "apic/struct/jointStatus/",
            },
            {
              text: "关节软件版本",
              link: "apic/struct/version/",
            },
            {
              text: "机械臂基本信息",
              link: "apic/struct/robotInfo/",
            },
            {
              text: "位置姿态",
              link: "apic/struct/pose/",
            },
            {
              text: "位置坐标",
              link: "apic/struct/position/",
            },
            {
              text: "控制器ctrl层软件信息",
              link: "apic/struct/ctrlversion/",
            },
            {
              text: "坐标系",
              link: "apic/struct/frame/",
            },
            {
              text: "坐标系名称",
              link: "apic/struct/frameName/",
            },
            {
              text: "在线编程运行状态",
              link: "apic/struct/programRunState/",
            },
            {
              text: "在线编程列表",
              link: "apic/struct/programTrajectorys/",
            },
            {
              text: "在线编程储存",
              link: "apic/struct/trajectoryData/",
            },
            {
              text: "流程图程序运行状态",
              link: "apic/struct/flowchartstate/",
            },
            {
              text: "全局点位列表",
              link: "apic/struct/waypointList/",
            },
            {
              text: "全局点位储存",
              link: "apic/struct/waypoint/",
            },
            {
              text: "软件版本",
              link: "apic/struct/softwareVersion/",
            },
            {
              text: "软件信息",
              link: "apic/struct/softwarinfo/",
            },
            {
              text: "夹爪状态",
              link: "apic/struct/gripperState/",
            },
            // {
            //   text: "包络球参数列表",
            //   link: "apic/struct/envelopeBallsList/",
            // },
            // {
            //   text: "包络球参数",
            //   link: "apic/struct/envelopesBall/",
            // },
            {
              text: "下发在线编程文件",
              link: "apic/struct/sendProject/",
            },
            {
              text: "升降机/扩展关节状态",
              link: "apic/struct/expandState/",
            },
            // {
            //   text: "电子围栏/虚拟墙使能状态",
            //   link: "apic/struct/electronicFenceEnable/",
            // },
            {
              text: "动力学模型",
              link: "apic/struct/dynamicVersion/",
            },
            // {
            //   text: "几何体模型参数",
            //   link: "apic/struct/fenceConfig/",
            // },
            // {
            //   text: "几何体模型长方体",
            //   link: "apic/struct/fenceConfigCube/",
            // },
            // {
            //   text: "几何模型参数列表",
            //   link: "apic/struct/fenceConfigList/",
            // },
            // {
            //   text: "几何体模型矢量平面",
            //   link: "apic/struct/fenceConfigPlane/",
            // },
            // {
            //   text: "几何体模型球体",
            //   link: "apic/struct/fenceConfigSphere/",
            // },
            {
              text: "力传感器数据",
              link: "apic/struct/forceSensor/",
            },
            {
              text: "六维力传感器数据",
              link: "apic/struct/forceData/",
            },
            {
              text: "机械臂控制句柄",
              link: "apic/struct/robotHandle/",
            },
            {
              text: "外设数据读写",
              link: "apic/struct/peripheralReadWriteParams/",
            },
            {
              text: "UDP主动上报自定义项",
              link: "apic/struct/udpCustomConfig/",
            },
            {
              text: "UDP主动上报接口配置",
              link: "apic/struct/realtimePushConfig/",
            },
            {
              text: "UDP主动上报扩展关节状态",
              link: "apic/struct/udpExpandState/",
            },
            {
              text: "UDP主动上报升降机构状态",
              link: "apic/struct/udpLiftState/",
            },
            {
              text: "UDP主动上报灵巧手状态",
              link: "apic/struct/udpHandState/",
            },
            {
              text: "UDP主动上报aloha主臂状态",
              link: "apic/struct/udpAlohaState/",
            },
            {
              text: "UDP机械臂实时状态推送",
              link: "apic/struct/realtimeArmJointState/",
            },
            {
              text: "算法库版本",
              link: "apic/struct/algorithmVersion/",
            },
            {
              text: "算法包络参数结构体",
              link: "apic/struct/toolEnvelopeSphere/",
            },
            {
              text: "欧拉角",
              link: "apic/struct/euler/",
            },
            {
              text: "四元数",
              link: "apic/struct/quat/",
            },
            {
              text: "旋转矩阵",
              link: "apic/struct/matrix/",
            },
            {
              text: "逆解参数",
              link: "apic/struct/inverseKinematicsParams/",
            },
            {
              text: "逆解求全解参数结构体",
              link: "apic/struct/inverseKinematicsAllParams/",
            },
            {
              text: "编译说明",
              link: "apic/struct/planinfo/",
            },
            {
              text: "力位混合控制",
              link: "apic/struct/forcePosition/",
            },
            {
              text: "透传力位混合补偿",
              link: "apic/struct/forcePositionMove/",
            },
            {
              text: "复合模式拖动示教",
              link: "apic/struct/multiDragTeach/",
            },
            {
              text: "数字IO配置",
              link: "apic/struct/ioConfig/",
            },
            {
              text: "数字IO状态获取",
              link: "apic/struct/ioGetConfig/",
            },
            {
              text: "角度透传模式配置参数",
              link: "apic/struct/movejCanfdMode/",
            },
            {
              text: "姿态透传模式配置参数",
              link: "apic/struct/movepCanfdMode/",
            },
            {
              text: "末端设备基础信息",
              link: "apic/struct/plusBase/",
            },
            {
              text: "末端设备实时信息",
              link: "apic/struct/plusState/",
            },            
            {
              text: "Modbus TCP写数据",
              link: "apic/struct/modbustcpswrite/",
            },
            {
              text: "Modbus TCP主站信息",
              link: "apic/struct/modbustcpmaster/",
            },
            {
              text: "Modbus TCP主站列表",
              link: "apic/struct/modbustcpmasterlist/",
            },
            {
              text: "Modbus TCP读数据参数",
              link: "apic/struct/modbustcpread/",
            },
            {
              text: "Modbus RTU读数据参数",
              link: "apic/struct/modbusread/",
            },
            {
              text: "Modbus RTU写数据",
              link: "apic/struct/modbuswrite/",
            },
            {
              text: "轨迹信息",
              link: "apic/struct/trajectoryinfo/",
            },
            {
              text: "轨迹列表",
              link: "apic/struct/trajectoryinfolist/",
            },
            {
              text: "错误代码结构体",
              link: "apic/struct/err/",
            },
          ],
        },
        {
          text: "枚举",
          link: "apic/type/",
        },
        {
          text: "API2错误代码",
          link: "apierrorList2/",
        },
      ],
    },
    {
      text: "API2(Python)",
      collapsed: true,
      items: [
        {
          text: "快速开始",
          link: "apipython/getStarted/",
        },
        {
          text: "接口说明",
          collapsed: true,
          items: [
            {
              text: "机械臂连接控制",
              link: "apipython/classes/roboticArm/",
            },
            {
              text: "机械臂轨迹控制",
              link: "apipython/classes/movePlan/",
            },
            {
              text: "工具坐标系配置",
              link: "apipython/classes/toolCoordinateConfig/",
            },
            {
              text: "工作坐标系配置",
              link: "apipython/classes/workCoordinateConfig/",
            },
            {
              text: "机械臂状态查询",
              link: "apipython/classes/armState/",
            },
            {
              text: "机械臂运动参数配置",
              link: "apipython/classes/tipVelocityParameters/",
            },
            {
              text: "机械臂示教及步进运动控制",
              link: "apipython/classes/teachMove/",
            },
            {
              text: "拖动示教配置",
              link: "apipython/classes/dragTeach/",
            },
            {
              text: "机械臂运动状态控制",
              link: "apipython/classes/motionControl/",
            },
            {
              text: "通讯内容配置",
              link: "apipython/classes/communicationConfig/",
            },
            {
              text: "系统配置",
              link: "apipython/classes/controllerConfig/",
            },
            {
              text: "系统安装方式配置",
              link: "apipython/classes/installPos/",
            },
            {
              text: "通用扩展关节配置",
              link: "apipython/classes/expandControl/",
            },
            {
              text: "升降机构配置",
              link: "apipython/classes/liftControl/",
            },
            {
              text: "末端六维力配置",
              link: "apipython/classes/force/",
            },
            // {
            //   text: "电子围栏和虚拟墙配置",
            //   link: "apipython/classes/electronicFenceConfig/",
            // },
            {
              text: "透传力位混合控制补偿配置",
              link: "apipython/classes/forcePositionControl/",
            },
            {
              text: "全局路点管理",
              link: "apipython/classes/globalWaypointManage/",
            },
            {
              text: "末端工具夹爪配置",
              link: "apipython/classes/gripperControl/",
            },
            {
              text: "五指灵巧手配置",
              link: "apipython/classes/handControl/",
            },
            // {
            //   text: "末端生态协议配置",
            //   link: "apipython/classes/rmPlus/",
            // },
            {
              text: "控制器IO配置及查询",
              link: "apipython/classes/controllerIOConfig/",
            },
            {
              text: "末端工具IO配置",
              link: "apipython/classes/effectorIOConfig/",
            },
            {
              text: "关节配置",
              link: "apipython/classes/jointsConfig/",
            },
            {
              text: "关节配置查询",
              link: "apipython/classes/jointsConfigQuery/",
            },
            {
              text: "Modbus 配置",
              link: "apipython/classes/modbusfour/",
            },
            {
              text: "轨迹文件",
              link: "apipython/classes/trajectoryfile/",
            },
            // {
            //   text: "自碰撞安全检测接口配置",
            //   link: "apipython/classes/selfCollision/",
            // },
            {
              text: "在线编程文件管理",
              link: "apipython/classes/projectManagement/",
            },
            {
              text: "算法接口配置",
              link: "apipython/classes/algo/",
            },
            {
              text: "UDP 主动上报配置",
              link: "apipython/classes/udpConfig/",
            },
          ],
        },
        {
          text: "结构体",
          collapsed: true,
          items: [
            {
              text: "算法库信息",
              link: "apipython/struct/algorithmVersion/",
            },
            {
              text: "算法包络参数结构体",
              link: "apipython/struct/algoToolEnvelope/",
            },
            {
              text: "机械臂所有状态参数",
              link: "apipython/struct/armAllState/",
            },
            {
              text: "机械臂软件版本信息",
              link: "apipython/struct/armSoftwareVersion/",
            },
            {
              text: "控制器ctrl层软件信息",
              link: "apipython/struct/ctrlVersion/",
            },
            {
              text: "软件信息",
              link: "apipython/struct/softwarinfo/",
            },
            {
              text: "机械臂当前状态",
              link: "apipython/struct/currentArmState/",
            },
            {
              text: "流程图程序运行状态",
              link: "apipython/struct/flowchartstate/",
            },
            {
              text: "动力学版本信息",
              link: "apipython/struct/dynamicVersion/",
            },
            // {
            //   text: "电子围栏/虚拟墙",
            //   link: "apipython/struct/electronicFenceEnable/",
            // },
            // {
            //   text: "工具坐标系包络参数",
            //   link: "apipython/struct/envelopesBall/",
            // },
            // {
            //   text: "工具坐标系包络参数列表",
            //   link: "apipython/struct/envelopeBallsList/",
            // },
            {
              text: "欧拉角",
              link: "apipython/struct/euler/",
            },
            {
              text: "机械臂到位事件",
              link: "apipython/struct/eventPushData/",
            },
            {
              text: "扩展关节状态",
              link: "apipython/struct/expandState/",
            },
            // {
            //   text: "电子围栏参数",
            //   link: "apipython/struct/fenceConfig/",
            // },
            // {
            //   text: "几何模型长方体参数",
            //   link: "apipython/struct/fenceConfigCube/",
            // },
            // {
            //   text: "几何模型参数列表",
            //   link: "apipython/struct/fenceConfigList/",
            // },
            // {
            //   text: "几何模型点面矢量平面参数",
            //   link: "apipython/struct/fenceConfigPlane/",
            // },
            // {
            //   text: "几何模型球体参数",
            //   link: "apipython/struct/fenceConfigSphere/",
            // },
            // {
            //   text: "几何模型名称",
            //   link: "apipython/struct/fenceNames/",
            // },
            {
              text: "六维力传感器数据",
              link: "apipython/struct/forceData/",
            },
            {
              text: "力控数据",
              link: "apipython/struct/forceSensor/",
            },
            {
              text: "机械臂位置姿态",
              link: "apipython/struct/frame/",
            },
            {
              text: "坐标系名称",
              link: "apipython/struct/frameName/",
            },
            {
              text: "夹爪状态",
              link: "apipython/struct/gripperState/",
            },
            {
              text: "逆运动学参数",
              link: "apipython/struct/inverseKinematicsParams/",
            },
            {
              text: "逆运动学全解参数结构体",
              link: "apipython/struct/inverseKinematicsAllSolve/",
            },
            {
              text: "机械臂关节状态",
              link: "apipython/struct/jointStatus/",
            },
            {
              text: "关节软件版本",
              link: "apipython/struct/version/",
            },
            {
              text: "矩阵",
              link: "apipython/struct/matrix/",
            },
            {
              text: "读写外设数据参数",
              link: "apipython/struct/peripheralReadWriteParams/",
            },
            {
              text: "控制器plan层软件信息",
              link: "apipython/struct/planinfo/",
            },
            {
              text: "坐标系",
              link: "apipython/struct/pose/",
            },
            {
              text: "位置",
              link: "apipython/struct/position/",
            },
            {
              text: "机械臂程序运行状态",
              link: "apipython/struct/programRunState/",
            },
            {
              text: "查询在线编程列表",
              link: "apipython/struct/programTrajectorys/",
            },
            {
              text: "四元数",
              link: "apipython/struct/quat/",
            },
            {
              text: "UDP主动上报自定义项",
              link: "apipython/struct/udpCustomConfig/",
            },
            {
              text: "UDP主动上报机械臂配置",
              link: "apipython/struct/realtimePushConfig/",
            },
            {
              text: "UDP主动上报扩展关节状态",
              link: "apipython/struct/udpExpandState/",
            },
            {
              text: "UDP主动上报升降机构状态",
              link: "apipython/struct/udpLiftState/",
            },
            {
              text: "UDP主动上报灵巧手状态",
              link: "apipython/struct/udpHandState/",
            },
            {
              text: "UDP主动上报aloha主臂状态",
              link: "apipython/struct/udpAlohaState/",
            },
            {
              text: "UDP机械臂实时状态推送",
              link: "apipython/struct/realtimeArmJointState/",
            },
            {
              text: "句柄",
              link: "apipython/struct/robotHandle/",
            },
            {
              text: "机械臂基本信息",
              link: "apipython/struct/robotInfo/",
            },
            {
              text: "发送编程文件信息",
              link: "apipython/struct/sendProject/",
            },
            {
              text: "在线编程存储信息",
              link: "apipython/struct/trajectoryData/",
            },
            {
              text: "全局路点",
              link: "apipython/struct/waypoint/",
            },
            {
              text: "全局路点列表",
              link: "apipython/struct/waypointList/",
            },
            {
              text: "力位混合控制",
              link: "apipython/struct/forcePosition/",
            },
            {
              text: "透传力位混合补偿",
              link: "apipython/struct/forcePositionMove/",
            },
            {
              text: "复合模式拖动示教",
              link: "apipython/struct/multiDragTeach/",
            },
            {
              text: "末端设备基础信息",
              link: "apipython/struct/rmPlusBaseInfo/",
            },
            {
              text: "末端设备实时信息",
              link: "apipython/struct/rmPlusStateInfo/",
            },
            {
              text: "Modbus TCP写数据",
              link: "apipython/struct/modbustcpswrite/",
            },
            {
              text: "Modbus TCP主站信息",
              link: "apipython/struct/modbustcpmaster/",
            },
            {
              text: "Modbus TCP主站列表",
              link: "apipython/struct/modbustcpmasterlist/",
            },
            {
              text: "Modbus TCP读数据参数",
              link: "apipython/struct/modbustcpread/",
            },
            {
              text: "Modbus RTU读数据参数",
              link: "apipython/struct/modbusread/",
            },
            {
              text: "Modbus RTU写数据",
              link: "apipython/struct/modbuswrite/",
            },
            {
              text: "轨迹信息",
              link: "apipython/struct/trajectoryinfo/",
            },
            {
              text: "轨迹列表",
              link: "apipython/struct/trajectoryinfolist/",
            },
            {
              text: "错误代码结构体",
              link: "apipython/struct/err/",
            },
          ],
        },
        {
          text: "枚举",
          link: "apipython/type/",
        },
        {
          text: "API2错误代码",
          link: "apierrorList2",
        },
      ],
    },
    // {
    //   text: "ROS开发",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "快速开始",
    //       link: "ros/getStarted/",
    //     },
    //     {
    //       text: "RM-机械臂驱动功能包",
    //       link: "ros/driver/",
    //     },
    //     {
    //       text: "RM-快速启动功能包",
    //       link: "ros/bringup/",
    //     },
    //     {
    //       text: "RM-Moveit通信功能包",
    //       link: "ros/control/",
    //     },
    //     {
    //       text: "RM-机械臂模型功能包",
    //       link: "ros/description/",
    //     },
    //     {
    //       text: "RM-机械臂ROS示例",
    //       link: "ros/example/",
    //     },
    //     {
    //       text: "RM-Gazebo功能包",
    //       link: "ros/gazebo/",
    //     },
    //     {
    //       text: "RM-Moveit控制功能包",
    //       link: "ros/moveitConfig/",
    //     },
    //     {
    //       text: "RM-机械臂ROS话题说明",
    //       link: "ros/driverDetailDescription/",
    //     },
    //     {
    //       text: "RM-ROS包消息列表",
    //       link: "ros/msg/",
    //     },
    //   ],
    // },
    // {
    //   text: "ROS2开发",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "快速开始",
    //       link: "ros2/getStarted/",
    //     },
    //     {
    //       text: "RM-机械臂驱动功能包",
    //       link: "ros2/driver/",
    //     },
    //     {
    //       text: "RM-快速启动功能包",
    //       link: "ros2/bringup/",
    //     },
    //     {
    //       text: "RM-Moveit通信功能包",
    //       link: "ros2/control/",
    //     },
    //     {
    //       text: "RM-机械臂模型功能包",
    //       link: "ros2/description/",
    //     },
    //     {
    //       text: "RM-机械臂ROS2示例",
    //       link: "ros2/example/",
    //     },
    //     {
    //       text: "RM-Gazebo功能包",
    //       link: "ros2/gazebo/",
    //     },
    //     {
    //       text: "RM-Moveit2控制功能包",
    //       link: "ros2/moveit2Config/",
    //     },
    //     {
    //       text: "RM-机械臂ROS2话题说明",
    //       link: "ros2/ros2Description/",
    //     },
    //     {
    //       text: "RM-自定义消息说明",
    //       link: "ros2/rosInterfaces/",
    //     },
    //   ],
    // },
    {
      text: "Modbus",
      collapsed: true,
      items: [
        {
          text: "Modbus从站地址表",
          link: "modbus/",
        },
      ],
    },
    // {
    //   text: "末端生态",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "末端生态列表",
    //       link: "appendix/endeffector/",
    //     },
    //   ],
    // },
    {
      text: "常见问题",
      collapsed: true,
      items: [
        {
          text: "快速使用常见问题",
          link: "FQA/nounConcept/",
        },
        {
          text: "机械臂API开发常见问题",
          link: "FQA/sdk/",
        },
      ],
    },
    {
      text: "相关下载",
      collapsed: true,
      items: [
        {
          text: "二次开发包",
          link: "download/redevelopment/",
        },
        {
          text: "模型和尺寸图",
          link: "download/model/",
        },
      ],
    },
  ];
};
//关节
const jointSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "概述",
      link: "summarize/",
    },
    {
      text: "入门指南",
      collapsed: false,
      items: [
        {
          text: "WHJ关节简述",
          link: "parameter/",
        },
        {
          text: "关节电气说明",
          link: "electricalInstructions/",
        },
        {
          text: "各系列关节详细参数",
          collapsed: false,
          items: [
            {
              text: "03系列关节规格参数",
              link: "parameter/WHJ03/",
            },
            {
              text: "10系列关节规格参数",
              link: "parameter/WHJ10/",
            },
            {
              text: "30系列关节规格参数",
              link: "parameter/WHJ30/",
            },
            {
              text: "60系列关节规格参数",
              link: "parameter/WHJ60/",
            },
            {
              text: "120系列关节规格参数",
              link: "parameter/WHJ120/",
            },
          ],
        },
        {
          text: "单关节上位机",
          collapsed: false,
          items: [
            {
              text: "环境准备",
              link: "guide/SinglejointToolUserManual/singlejointTool/",
            },
            {
              text: "实时导航",
              link: "guide/SinglejointToolUserManual/realtimeNavigation/",
            },
            {
              text: "波形导航",
              link: "guide/SinglejointToolUserManual/waveformNavigation/",
            },
            {
              text: "信息导航",
              link: "guide/SinglejointToolUserManual/informationNavigation/",
            },
            {
              text: "CAN信息导航",
              link: "guide/SinglejointToolUserManual/caninformation/",
            },
          ],
        },
      ],
    },
    {
      text: "关节CANFD通信协议",
      collapsed: false,
      items: [
        {
          text: "CANFD协议说明",
          link: "CANFD/explanation/",
        },
        {
          text: "内存控制表",
          link: "CANFD/memoryControlTable/",
        },
        {
          text: "使用示例",
          link: "CANFD/usageDemo/",
        },
      ],
    },
  ];
};
//AI
const AISide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "概述",
      link: "summarize/",
    },
    {
      text: "快速开始",
      collapsed: false,
      items: [
        {
          text: "安装conda和python环境",
          link: "getStarted/environment/",
        },
        {
          text: "安装Nvidia显卡环境",
          link: "getStarted/nivdia/",
        },
      ],
    },
    {
      text: "SDK开发指南",
      collapsed: false,
      items: [
        {
          text: "垂直抓取",
          link: "developerGuide/verticalGrab/",
        },
        {
          text: "多模态识别",
          link: "developerGuide/multimodalRecognition/",
        },
        {
          text: "任意物品分割",
          link: "developerGuide/itemSegmentation/",
        },
        {
          text: "任意物品追踪",
          link: "developerGuide/itemTracking/",
        },
        {
          text: "任意物品姿态",
          link: "developerGuide/itemPosture/",
        },
        {
          text: "视觉伺服",
          link: "developerGuide/visualServo",
        },
      ],
    },
    {
      text: "末端工具硬件适配指南",
      collapsed: false,
      items: [
        {
          text: "手眼标定",
          link: "developerGuide/hand/",
        },
      ],
    },
  ];
};
//案列
const exampleSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "机械臂集成应用案例",
      collapsed: false,
      items: [
        // {
        //   text: "新零售",
        //   link: "demo/newRetail/newRetail",
        // },
        {
          text: "机器狗",
          link: "demo/robotDog/",
        },
        {
          text: "检测模型训练",
          link: "demo/yolodetecttrain/",
        },
        {
          text: "YOLOV8视觉识别",
          link: "demo/YOLOV8VisualRecognition/",
        },
        {
          text: "自主打磨工作站",
          link: "demo/selfServicePolishing/",
        },
        {
          text: "Touch遥操",
          link: "demo/touchteleoperation/",
        },
      ],
    },
    {
      text: "具身智能机器人",
      collapsed: false,
      items: [
        {
          text: "URDF转XACRO",
          link: "demo/URDFmodelassembly/",
        },
        {
          text: "仓储搬运机器人",
          link: "demo/warehousehandlingrobot/",
        },
      ],
    },
    {
      text: "开源项目",
      collapsed: false,
      items: [
        {
          text: "两指平行夹爪",
          link: "demo/twofingergripper/",
        },
      ],
    },
  ];
};
//博客
const blogSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "概述",
      link: "getStarted/",
    },
    {
      text: "超轻量仿人机械臂",
      collapsed: false,
      items: [
        {
          text: "机械臂控制器及末端接口板升级",
          link: "arm/controllerEndInterfaceBoardUpgrade/",
        },
        {
          text: "机械臂零位的影响及其设置",
          link: "arm/robotZeroPosition/",
        },
        {
          text: "奇异点分析及规避办法",
          link: "arm/roboticSingularity/",
        },
        {
          text: "虚拟机连接机械臂ping不通",
          link: "arm/virtualMachinesPing/",
        },
        {
          text: "外置急停按钮盒",
          link: "arm/ExternalEmergencyStopButtonBox/",
        },
        {
          text: "力位混合控制参数调试方法",
          link: "arm/ForceandPositionHybridControl/",
        },
      ],
    },
    {
      text: "RealMan生态",
      collapsed: false,
      items: [
        // {
        //   text: "api设置机械臂udp回传",
        //   link: "RealMan/SettingupRobotArmUDPFeedbackUsingPythonAPI/SettingupRobotArmUDPFeedbackUsingPythonAPI",
        // },
        // {
        //   text: "连接机械臂时正逆解接口函数调用例程",
        //   link: "RealMan/CallingtheForwardandInverseKinematicsInterfaceFunctionsoftheRobotArm/CallingtheForwardandInverseKinematicsInterfaceFunctionsoftheRobotArm",
        // },
        // {
        //   text: "虚拟墙的设置方法及注意事项",
        //   link: "RealMan/VirtualWallSetupMethodsandPrecautions/VirtualWallSetupMethodsandPrecautions",
        // },
        {
          text: "端口冲突解决方法",
          link: "RealMan/Solutionsforthe98AddressalreadyinuseError/",
        },
        {
          text: "使用串口实现机械臂UDP回传",
          link: "RealMan/UsingserialporttoimplementUDPfeedbackfortheroboticarm/",
        },
        {
          text: "水滴2到点误差大以及避障距离过长解决方法",
          link: "RealMan/Solutionsforlargeerrorsandlongobstacleavoidancedistances/",
        },
      ],
    },
  ];
};

export { robotSide,robotSide4th, jointSide, AISide, exampleSide, blogSide };
