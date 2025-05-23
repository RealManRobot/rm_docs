import type { DefaultTheme } from "vitepress";

//第三代机械臂
const robotSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "Gen 3 Overview",
      link: "summarize/",
    },
    {
      text: "Version Description",
      collapsed: true,
      items: [
        {
          text: "Version Description",
          link: "releaseNotes/releaseNotes/",
        },
        {
          text: "Historical Version Correspondence",
          link: "releaseNotes/versionComparisonTable/",
        },
      ],
    },
    {
      text: "Getting Started",
      collapsed: true,
      items: [
        {
          text: "Hardware Preparation",
          link: "quickUseManual/",
        },
        {
          text: "Safety Guide",
          link: "safetyGuide/",
        },
        {
          text: "Hardware Interface",
          link: "quickUseManual/interfaceDescriptionArm/",
        },
        {
          text: "Parameter Description",
          collapsed: true,
          items: [
            {
              text: "RM65 Series",
              link: "robotParameter/RM65OntologyParameters/",
            },
            {
              text: "RM75 Series",
              link: "robotParameter/RM75OntologyParameters/",
            },
            {
              text: "RML63 Series",
              link: "robotParameter/RML63OntologyParameters/",
            },
            // {
            //   text: "ECO62 Series",
            //   link: "robotParameter/ECO62OntologyParameters",
            // },
            {
              text: "ECO63 Series",
              link: "robotParameter/ECO63OntologyParameters/",
            },
            {
              text: "ECO65 Series",
              link: "robotParameter/ECO65OntologyParameters/",
            },
            {
              text: "GEN72 Series",
              link: "robotParameter/GEN72OntologyParameters/",
            },
          ],
        },
        {
          text: "Teaching User Guide",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Teaching",
              link: "teachingPendant/armTeching/",
            },
            {
              text: "Online Programming",
              link: "teachingPendant/onlineCode/",
            },
            // {
            //   text: "Online Programming Example",
            //   link: "teachingPendant/onlineCodeExample",
            // },
            {
              text: "Robot Arm Configuration",
              link: "teachingPendant/setting/",
            },
            {
              text: "Robot Arm System Information",
              link: "teachingPendant/systemInformation/",
            },
            {
              text: "Robot Arm System Upgrade",
              link: "teachingPendant/systemUpgrade/",
            },
            {
              text: "Robot Arm Extension",
              link: "teachingPendant/extension/",
            },
            {
              text: "MODBUS-TCP Function",
              link: "teachingPendant/modbusTCP/",
            },
            {
              text: "External Interface Settings",
              link: "teachingPendant/externalInterface/",
            },
          ],
        },
        {
          text: "Optional Function",
          link: "optionalfunction/",
        },
      ],
    },
    {
      text: "Demo Presentation",
      collapsed: true,
      items: [
        {
          text: "API2(C、C++) Demo",
          collapsed: true,
          items: [
            {
              text: "Basic Demo",
              link: "demo/c/simpleProcess/",
            },
            {
              text: "Frame Operation Demo",
              link: "demo/c/coordinateSystem/",
            },
            {
              text: "Force-Position hybrid Control Demo",
              link: "demo/c/forceControl/",
            },
            {
              text: "End-effector Gripper Control Demo",
              link: "demo/c/gripper/",
            },
            {
              text: "Usage Demo of Controller IO Port",
              link: "demo/c/IOControl/",
            },
            {
              text: "Lifting Mechanism Control Demo",
              link: "demo/c/lift/",
            },
            {
              text: "Usage Demo of ModbusRTU",
              link: "demo/c/modbusRTU/",
            },
            {
              text: "Spline Curve Motion Demo",
              link: "demo/c/moves/",
            },
            {
              text: "Joint Angle Pass-through Demo",
              link: "demo/c/movejCANFD/",
            },
            {
              text: "Online Programming Demo",
              link: "demo/c/onlineProgram/",
            },
            {
              text: "Algorithm Demo",
              link: "demo/c/algoInterface/",
            },
            {
              text: "Test Tube Gripping Simulation",
              link: "demo/c/tubePicking/",
            },
          ],
        },
        {
          text: "API2(Python) Demo",
          collapsed: true,
          items: [
            {
              text: "Basic Demo",
              link: "demo/python/simpleProcess/",
            },
            {
              text: "Frame Operation Demo",
              link: "demo/python/coordinateSystem/",
            },
            {
              text: "Multi-Robot Arm Control Operations Demo",
              link: "demo/python/doubleRoboticArm/",
            },
            {
              text: "Robotic Arm Force Control Demo",
              link: "demo/python/forceControl/",
            },
            {
              text: "Robotic Arm Grasping Demo",
              link: "demo/python/gripper/",
            },
            {
              text: "Usage Demo of Controller IO Function",
              link: "demo/python/IOControl/",
            },
            {
              text: "Lift Control Demo",
              link: "demo/python/lift/",
            },
            {
              text: "ModbusRTU Demo",
              link: "demo/python/modbusRTU/",
            },
            {
              text: "Spline Curve Motion Demo",
              link: "demo/python/moves/",
            },
            {
              text: "Angle Pass-through Demo",
              link: "demo/python/movejCANFD/",
            },
            {
              text: "Online Programming Demo",
              link: "demo/python/onlineProgram/",
            },
            {
              text: "Algorithm Demo",
              link: "demo/python/algoInterface/",
            },
          ],
        },
        {
          text: "ROS Demo",
          collapsed: true,
          items: [
            {
              text: "Robot Arm Motion Control",
              link: "demo/ros/controlArmMove/",
            },
            {
              text: "Force-Position Hybrid Control Planning",
              link: "demo/ros/forcePositionControl/",
            },
            {
              text: "Get Robot Arm Status",
              link: "demo/ros/armState/",
            },
          ],
        },
        {
          text: "ROS2 Demo",
          collapsed: true,
          items: [
            {
              text: "Foxy",
              collapsed: true,
              items: [
                {
                  text: "Robot Arm Motion Control",
                  link: "demo/ros2/foxycontrolArmMove/",
                },
                {
                  text: "Force-Position Hybrid Control Planning",
                  link: "demo/ros2/foxyforcePositionControl/",
                },
                {
                  text: "Get Robot Arm Status",
                  link: "demo/ros2/foxygetArmState/",
                },
              ],
            },
            {
              text: "Humble",
              collapsed: true,
              items: [
                {
                  text: "Robot Arm Motion Control",
                  link: "demo/ros2/humblecontrolArmMove/",
                },
                {
                  text: "Force-Position Hybrid Control Planning",
                  link: "demo/ros2/humbleforcePositionControl/",
                },
                {
                  text: "Get Robot Arm Status",
                  link: "demo/ros2/humblegetArmState/",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      text: "JSON Protocol",
      collapsed: true,
      items: [
        {
          text: "Getting Started",
          link: "json/getStartedJson/",
        },
        {
          text: "Joint Parameter Command Set",
          link: "json/jointParameter/",
        },
        {
          text: "Motion Parameter Command Set",
          link: "json/armConfig/",
        },
        {
          text: "Motion Command Set",
          link: "json/motionConfig/",
        },
        {
          text: "Frame Command Set",
          link: "json/coordinate/",
        },
        {
          text: "State Query Command Set",
          link: "json/armState/",
        },
        {
          text: "System Command Set",
          link: "json/systemConfig/",
        },
        {
          text: "Network Configuration Command Set",
          link: "json/networkConfig/",
        },
        {
          text: "IO Configuration Command Set",
          link: "json/ioConfig/",
        },
        {
          text: "UDP Active Reporting Command Set",
          link: "json/udpConfig/",
        },
        {
          text: "Online Programming Command Set",
          link: "json/onlineProgram/",
        },
        {
          text: "Drag-and-Teach Command Set",
          link: "json/dragTech/",
        },
        {
          text: "Modbus Command Set",
          link: "json/modbus/",
        },
        {
          text: "Electronic Fence and Virtual Wall Command Set",
          link: "json/electronicFence/",
        },
        {
          text: "Self-Collision Safety Detection Command Set",
          link: "json/selfCollision/",
        },
        {
          text: "Force Sensor Command Set (Optional)",
          link: "json/forceSensor/",
        },
        {
          text: "End Effector Command set (optional)",
          link: "json/endTool/",
        },
        {
          text: "End-Effector Ecosystem Command Set (optional)",
          link: "json/endeffector/",
        },
        {
          text: "Controller Extension Device Command Set (Optional)",
          link: "json/expandControl/",
        },
        {
          text: "Appendix: Error Codes",
          link: "json/errorList/",
        },
      ],
    },
    {
      text: "API2(C、C++)",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "apic/getStarted/",
        },
        {
          text: "Interface Description",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Connection Configuration",
              link: "apic/classes/roboticArm/",
            },
            {
              text: "Robotic Arm Trajectory Command",
              link: "apic/classes/movePlan/",
            },
            {
              text: "Tool Frame Configuration",
              link: "apic/classes/toolCoordinateConfig/",
            },
            {
              text: "Work Frame Configuration",
              link: "apic/classes/workCoordinateConfig/",
            },
            {
              text: "Get the Robotic Arm State",
              link: "apic/classes/armState/",
            },
            {
              text: "End Effector Motion Parameter Configuration",
              link: "apic/classes/armTipVelocityParameters/",
            },
            {
              text: "Robotic Arm Teaching Command",
              link: "apic/classes/armTeachMove/",
            },
            {
              text: "Drag Teaching Configuration",
              link: "apic/classes/dragTeach/",
            },
            {
              text: "Motion State Control Command",
              link: "apic/classes/armMotionControl/",
            },
            {
              text: "Communication Configuration",
              link: "apic/classes/communicationConfig/",
            },
            {
              text: "System Configuration",
              link: "apic/classes/controllerConfig/",
            },
            {
              text: "System Installation Method Configuration",
              link: "apic/classes/installPos/",
            },
            {
              text: "General Extended Joint Configuration",
              link: "apic/classes/expandControl/",
            },
            {
              text: "Lifting Mechanism Configuration",
              link: "apic/classes/liftControl/",
            },
            {
              text: "End Effector 6-DoF Force Configuration",
              link: "apic/classes/force/",
            },
            {
              text: "Electronic Fence and Virtual Wall Configuration",
              link: "apic/classes/electronicFenceConfig/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Control Compensation Configuration",
              link: "apic/classes/forcePositionControl/",
            },
            {
              text: "Global Waypoint Management",
              link: "apic/classes/globalWaypointManage/",
            },
            {
              text: "End-Effector Tool gripper configuration",
              link: "apic/classes/gripperControl/",
            },
            {
              text: "Five-Finger Dexterous Hand Configuration",
              link: "apic/classes/handControl/",
            },
            {
              text: "End-Effector Ecosystem Protocol Configuration",
              link: "apic/classes/rmPlus/",
            },
            {
              text: "Controller IO Configuration and Query",
              link: "apic/classes/controllerIOConfig/",
            },
            {
              text: "End-Effector Tool IO configuration",
              link: "apic/classes/effectorIOConfig/",
            },
            {
              text: "Joint Configuration",
              link: "apic/classes/jointConfigSettings/",
            },
            {
              text: "Joint Configuration Query",
              link: "apic/classes/jointConfigRead/",
            },
            {
              text: "Modbus Configuration",
              link: "apic/classes/modbusConfig/",
            },
            {
              text: "Self-Collision Safety Detection Configuration",
              link: "apic/classes/selfCollision/",
            },
            {
              text: "Online Programming Configuration",
              link: "apic/classes/projectManagement/",
            },
            {
              text: "Algorithm Interface Configuration",
              link: "apic/classes/algo/",
            },
            {
              text: "UDP Active Reporting Configuration",
              link: "apic/classes/udpConfig/",
            },
          ],
        },
        {
          text: "Structure",
          collapsed: true,
          items: [
            {
              text: "All Robotic Arm State",
              link: "apic/struct/allState/",
            },
            {
              text: "Current State",
              link: "apic/struct/currentState/",
            },
            {
              text: "Joint Status",
              link: "apic/struct/jointStatus/",
            },
            {
              text: "Joint Version",
              link: "apic/struct/version/",
            },
            {
              text: "Basic Information",
              link: "apic/struct/robotInfo/",
            },
            {
              text: "Position And Orientation",
              link: "apic/struct/pose/",
            },
            {
              text: "Position Coordinates",
              link: "apic/struct/position/",
            },
            {
              text: "Controller Ctrl Layer Software Information",
              link: "apic/struct/ctrlversion/",
            },
            {
              text: "Frame",
              link: "apic/struct/frame/",
            },
            {
              text: "Frame Name",
              link: "apic/struct/frameName/",
            },
            {
              text: "Online Programming Running State",
              link: "apic/struct/programRunState/",
            },
            {
              text: "Online Programming List",
              link: "apic/struct/programTrajectorys/",
            },
            {
              text: "Online Programming Storage",
              link: "apic/struct/trajectoryData/",
            },
            {
              text: "Flowchart Program Run State",
              link: "apic/struct/flowchartstate/",
            },
            {
              text: "Global Waypoint List",
              link: "apic/struct/waypointList/",
            },
            {
              text: "Global Waypoint Storage",
              link: "apic/struct/waypoint/",
            },
            {
              text: "Software Version",
              link: "apic/struct/softwareVersion/",
            },
            {
              text: "Software Information",
              link: "apic/struct/softwarinfo/",
            },
            {
              text: "Gripper State",
              link: "apic/struct/gripperState/",
            },
            {
              text: "Envelope Ball Parameter Set",
              link: "apic/struct/envelopeBallsList/",
            },
            {
              text: "Envelope Ball",
              link: "apic/struct/envelopesBall/",
            },
            {
              text: "Online Programming File Sending",
              link: "apic/struct/sendProject/",
            },
            {
              text: "Lifting Mechanism And Expansion Joint State",
              link: "apic/struct/expandState/",
            },
            {
              text: "Electronic Fence/Virtual Wall Enabling State",
              link: "apic/struct/electronicFenceEnable/",
            },
            {
              text: "Dynamic Model Version",
              link: "apic/struct/dynamicVersion/",
            },
            {
              text: "Geometric Model",
              link: "apic/struct/fenceConfig/",
            },
            {
              text: "Geometric Model Cube",
              link: "apic/struct/fenceConfigCube/",
            },
            {
              text: "Geometric Model",
              link: "apic/struct/fenceConfigList/",
            },
            {
              text: "Geometric Model Plane",
              link: "apic/struct/fenceConfigPlane/",
            },
            {
              text: "Geometric Model Sphere",
              link: "apic/struct/fenceConfigSphere/",
            },
            {
              text: "Force Sensor Data",
              link: "apic/struct/forceSensor/",
            },
            {
              text: "6-DoF Force Sensor Data",
              link: "apic/struct/forceData/",
            },
            {
              text: "Robotic Arm Control Handle",
              link: "apic/struct/robotHandle/",
            },
            {
              text: "WiFi Network Information",
              link: "apic/struct/wifiNet/",
            },
            {
              text: "Peripheral Data Read and Write",
              link: "apic/struct/peripheralReadWriteParams/",
            },
            {
              text: "UDP-Based Custom Pushing Item",
              link: "apic/struct/udpCustomConfig/",
            },
            {
              text: "UDP Real-time Pushing Interface",
              link: "apic/struct/realtimePushConfig/",
            },
            {
              text: "UDP-Based Pushed Expansion Joint Data",
              link: "apic/struct/udpExpandState/",
            },
            {
              text: "UDP-Based Pushed Lifting Joint Data",
              link: "apic/struct/udpLiftState/",
            },
            {
              text: "UDP-Based Pushed Dexterous Hand Data",
              link: "apic/struct/udpHandState/",
            },
            {
              text: "UDP-Based Pushed Aloha State",
              link: "apic/struct/udpAlohaState/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing",
              link: "apic/struct/realtimeArmJointState/",
            },
            {
              text: "Algorithm Library Version",
              link: "apic/struct/algorithmVersion/",
            },
            {
              text: "Algorithm Envelope Parameter",
              link: "apic/struct/toolEnvelopeSphere/",
            },
            {
              text: "Euler Angles",
              link: "apic/struct/euler/",
            },
            {
              text: "Quaternion",
              link: "apic/struct/quat/",
            },
            {
              text: "Rotation Matrix",
              link: "apic/struct/matrix/",
            },
            {
              text: "Inverse Kinematics",
              link: "apic/struct/inverseKinematicsParams/",
            },
            {
              text: "Inverse Kinematics Full Solution",
              link: "apic/struct/inverseKinematicsAllParams/",
            },
            {
              text: "Compiling Instruction",
              link: "apic/struct/planinfo/",
            },
            {
              text: "Force-Position Hybrid Control",
              link: "apic/struct/forcePosition/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Compensation",
              link: "apic/struct/forcePositionMove/",
            },
            {
              text: "Multiple Drag Teaching",
              link: "apic/struct/multiDragTeach/",
            },
            {
              text: "Digital IO Configuration",
              link: "apic/struct/ioConfig/",
            },
            {
              text: "Digital IO Status Acquisition",
              link: "apic/struct/ioGetConfig/",
            },
            {
              text: "Angle Transparency Mode",
              link: "apic/struct/movejCanfdMode/",
            },
            {
              text: "Pose Transparency Mode",
              link: "apic/struct/movepCanfdMode/",
            },
            {
              text: "End-Effector Basic Information",
              link: "apic/struct/plusBase/",
            },
            {
              text: "End-Effector Real-Time Information",
              link: "apic/struct/plusState/",
            },
            {
              text: "Error Code Structure",
              link: "apic/struct/err/",
            },
          ],
        },
        {
          text: "Type description",
          link: "apic/type/",
        },
        {
          text: "API2 Error Codes",
          link: "apierrorList2/",
        },
      ],
    },
    {
      text: "API2(Python)",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "apipython/getStarted/",
        },
        {
          text: "Interface Description",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Connection Control",
              link: "apipython/classes/roboticArm/",
            },
            {
              text: "Robotic Arm Trajectory Control",
              link: "apipython/classes/movePlan/",
            },
            {
              text: "Tool Frame Configuration",
              link: "apipython/classes/toolCoordinateConfig/",
            },
            {
              text: "Work Frame Configuration",
              link: "apipython/classes/workCoordinateConfig/",
            },
            {
              text: "Get the Robotic Arm State",
              link: "apipython/classes/armState/",
            },
            {
              text: "Robotic Arm Motion Parameter Configuration",
              link: "apipython/classes/tipVelocityParameters/",
            },
            {
              text: "Teaching and Stepping Control of the Robotic Arm",
              link: "apipython/classes/teachMove/",
            },
            {
              text: "Drag Teaching Configuration",
              link: "apipython/classes/dragTeach/",
            },
            {
              text: "Robotic Arm Motion State Control",
              link: "apipython/classes/motionControl/",
            },
            {
              text: "Communication Configuration",
              link: "apipython/classes/communicationConfig/",
            },
            {
              text: "System Configuration",
              link: "apipython/classes/controllerConfig/",
            },
            {
              text: "System Installation Method Configuration",
              link: "apipython/classes/installPos/",
            },
            {
              text: "Universal Extended Joint Control",
              link: "apipython/classes/expandControl/",
            },
            {
              text: "Lifting Mechanism Configuration",
              link: "apipython/classes/liftControl/",
            },
            {
              text: "End 6-DoF Force Sensor Configuration",
              link: "apipython/classes/force/",
            },
            {
              text: "Electronic Fence and Virtual Wall Configuration",
              link: "apipython/classes/electronicFenceConfig/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Control Compensation Configuration",
              link: "apipython/classes/forcePositionControl/",
            },
            {
              text: "Global Waypoint Management",
              link: "apipython/classes/globalWaypointManage/",
            },
            {
              text: "Gripper Configuration",
              link: "apipython/classes/gripperControl/",
            },
            {
              text: "Five-Fingered Dexterous Hand Configuration",
              link: "apipython/classes/handControl/",
            },
            {
              text: "End-Effector Ecosystem Protocol Configuration",
              link: "apipython/classes/rmPlus/",
            },
            {
              text: "Controller IO Configuration and Query",
              link: "apipython/classes/controllerIOConfig/",
            },
            {
              text: "End Effector IO Configuration and Query",
              link: "apipython/classes/effectorIOConfig/",
            },
            {
              text: "Joint Configuration",
              link: "apipython/classes/jointsConfig/",
            },
            {
              text: "Joint Configuration Query",
              link: "apipython/classes/jointsConfigQuery/",
            },
            {
              text: "Modbus Configuration",
              link: "apipython/classes/modbusConfig/",
            },
            {
              text: "Self-Collision Safety Detection Configuration",
              link: "apipython/classes/selfCollision/",
            },
            {
              text: "Online Programming File Management",
              link: "apipython/classes/projectManagement/",
            },
            {
              text: "Algorithm Interface Configuration",
              link: "apipython/classes/algo/",
            },
            {
              text: "UDP Proactive Reporting Configuration",
              link: "apipython/classes/udpConfig/",
            },
          ],
        },
        {
          text: "Structure",
          collapsed: true,
          items: [
            {
              text: "Algorithm Library Version",
              link: "apipython/struct/algorithmVersion/",
            },
            {
              text: "Algorithm Envelope Parameter",
              link: "apipython/struct/algoToolEnvelope/",
            },
            {
              text: "All Robotic Arm State",
              link: "apipython/struct/armAllState/",
            },
            {
              text: "Robotic Arm Software Version",
              link: "apipython/struct/armSoftwareVersion/",
            },
            {
              text: "Software Information",
              link: "apipython/struct/softwarinfo/",
            },
            {
              text: "Controller Ctrl Layer Software Information",
              link: "apipython/struct/ctrlVersion/",
            },
            {
              text: "Current Robotic Arm State",
              link: "apipython/struct/currentArmState/",
            },
            {
              text: "Flowchart Program Run State",
              link: "apipython/struct/flowchartstate/",
            },
            {
              text: "Dynamic Model Version",
              link: "apipython/struct/dynamicVersion/",
            },
            {
              text: "Electronic Fence/Virtual Wall Enabling State",
              link: "apipython/struct/electronicFenceEnable/",
            },
            {
              text: "Tool Frame Envelope Ball",
              link: "apipython/struct/envelopesBall/",
            },
            {
              text: "Tool Frame Envelope Ball List",
              link: "apipython/struct/envelopeBallsList/",
            },
            {
              text: "Euler Angle",
              link: "apipython/struct/euler/",
            },
            {
              text: "Robotic Arm In-Position Event",
              link: "apipython/struct/eventPushData/",
            },
            {
              text: "Expansion Joint State",
              link: "apipython/struct/expandState/",
            },
            {
              text: "Electronic Fence",
              link: "apipython/struct/fenceConfig/",
            },
            {
              text: "Geometric Model Cube",
              link: "apipython/struct/fenceConfigCube/",
            },
            {
              text: "Geometric Model",
              link: "apipython/struct/fenceConfigList/",
            },
            {
              text: "Geometric Model Plane",
              link: "apipython/struct/fenceConfigPlane/",
            },
            {
              text: "Geometric Model Sphere",
              link: "apipython/struct/fenceConfigSphere/",
            },
            {
              text: "Geometric Model Name",
              link: "apipython/struct/fenceNames/",
            },
            {
              text: "6-DoF Force Sensor Data",
              link: "apipython/struct/forceData/",
            },
            {
              text: "Force Sensor Data",
              link: "apipython/struct/forceSensor/",
            },
            {
              text: "Robotic Arm Position and Orientation",
              link: "apipython/struct/frame/",
            },
            {
              text: "Frame Name",
              link: "apipython/struct/frameName/",
            },
            {
              text: "Gripper State",
              link: "apipython/struct/gripperState/",
            },
            {
              text: "Inverse Kinematics",
              link: "apipython/struct/inverseKinematicsParams/",
            },
            {
              text: "Inverse Kinematics Full Solution Parameter",
              link: "apipython/struct/inverseKinematicsAllSolve/",
            },
            {
              text: "Robotic Arm Joint State",
              link: "apipython/struct/jointStatus/",
            },
            {
              text: "Joint Version",
              link: "apipython/struct/version/",
            },
            {
              text: "Matrix",
              link: "apipython/struct/matrix/",
            },
            {
              text: "Peripheral Data Read and Write Parameter",
              link: "apipython/struct/peripheralReadWriteParams/",
            },
            {
              text: "Controller Plan Layer Software Information",
              link: "apipython/struct/planinfo/",
            },
            {
              text: "Pose",
              link: "apipython/struct/pose/",
            },
            {
              text: "Position",
              link: "apipython/struct/position/",
            },
            {
              text: "Robotic Arm Program Running State",
              link: "apipython/struct/programRunState/",
            },
            {
              text: "Query Online Programming List",
              link: "apipython/struct/programTrajectorys/",
            },
            {
              text: "Quaternion",
              link: "apipython/struct/quat/",
            },
            {
              text: "UDP-Based Custom Real-Time Pushing Item",
              link: "apipython/struct/udpCustomConfig/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing Interface Configuration",
              link: "apipython/struct/realtimePushConfig/",
            },
            {
              text: "UDP-Based Pushed Expansion Joint State",
              link: "apipython/struct/udpExpandState/",
            },
            {
              text: "UDP-Based Pushed Lifting Mechanism State",
              link: "apipython/struct/udpLiftState/",
            },
            {
              text: "UDP-Based Pushed Dexterous Hand State",
              link: "apipython/struct/udpHandState/",
            },
            {
              text: "UDP-Based Pushed Aloha State",
              link: "apipython/struct/udpAlohaState/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing",
              link: "apipython/struct/realtimeArmJointState/",
            },
            {
              text: "Robotic Arm Handle",
              link: "apipython/struct/robotHandle/",
            },
            {
              text: "Robotic Arm Information",
              link: "apipython/struct/robotInfo/",
            },
            {
              text: "Programming File Information Sending",
              link: "apipython/struct/sendProject/",
            },
            {
              text: "Online Programming Storage Information",
              link: "apipython/struct/trajectoryData/",
            },
            {
              text: "Global Waypoint",
              link: "apipython/struct/waypoint/",
            },
            {
              text: "Global Waypoint List",
              link: "apipython/struct/waypointList/",
            },
            {
              text: "WiFi Network Information",
              link: "apipython/struct/wifiNet/",
            },
            {
              text: "Force-Position Hybrid Control Parameter",
              link: "apipython/struct/forcePosition/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Compensation",
              link: "apipython/struct/forcePositionMove/",
            },
            {
              text: "Multiple Drag Teaching Parameter",
              link: "apipython/struct/multiDragTeach/",
            },
            {
              text: "End-Effector Basic Information",
              link: "apipython/struct/rmPlusBaseInfo/",
            },
            {
              text: "End-Effector Real-Time Information",
              link: "apipython/struct/rmPlusStateInfo/",
            },
            {
              text: "Error Code Structure",
              link: "apipython/struct/err/",
            },
          ],
        },
        {
          text: "Type description",
          link: "apipython/type/",
        },
        {
          text: "API2 Error Codes",
          link: "apierrorList2/",
        },
      ],
    },
    {
      text: "ROS Development",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "ros/getStarted/",
        },
        {
          text: "RM-Robotic Arm Driver Package",
          link: "ros/driver/",
        },
        {
          text: "RM-Quick Start Package",
          link: "ros/bringup/",
        },
        {
          text: "RM-Moveit Communication Package",
          link: "ros/control/",
        },
        {
          text: "RM-Robotic Arm Model Package",
          link: "ros/description/",
        },
        {
          text: "RM-Robotic Arm ROS Examples",
          link: "ros/example/",
        },
        {
          text: "RM-Gazebo Package",
          link: "ros/gazebo/",
        },
        {
          text: "RM-Moveit Control Package",
          link: "ros/moveitConfig/",
        },
        {
          text: "RM-Robotic Arm ROS Topic Description",
          link: "ros/driverDetailDescription/",
        },
        {
          text: "RM-ROS Package Message List",
          link: "ros/msg/",
        },
      ],
    },
    {
      text: "ROS2 Development",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "ros2/getStarted/",
        },
        {
          text: "RM-Robotic Arm Driver Package",
          link: "ros2/driver/",
        },
        {
          text: "RM-Quick Start Package",
          link: "ros2/bringup/",
        },
        {
          text: "RM-Moveit Communication Package",
          link: "ros2/control/",
        },
        {
          text: "RM-Robotic Arm Model Package",
          link: "ros2/description/",
        },
        {
          text: "RM-Robotic Arm ROS2 Examples",
          link: "ros2/example/",
        },
        {
          text: "RM-Gazebo Package",
          link: "ros2/gazebo/",
        },
        {
          text: "RM-Moveit2 Control Package",
          link: "ros2/moveit2Config/",
        },
        {
          text: "RM-Robotic Arm ROS2 Topic Description",
          link: "ros2/ros2Description/",
        },
        {
          text: "RM-Custom Message Description",
          link: "ros2/rosInterfaces/",
        },
      ],
    },
    {
      text: "Modbus",
      collapsed: true,
      items: [
        {
          text: "Modbus Slave Address Table",
          link: "modbus/",
        },
      ],
    },
    // {
    //   text: "End-effector Ecosystem",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "End-effector Ecosystem List",
    //       link: "appendix/endeffector/",
    //     },
    //   ],      
    // },
    {
      text: "FAQ",
      collapsed: true,
      items: [
        {
          text: "Quick Use FAQ",
          link: "FQA/nounConcept/",
        },
        {
          text: "Robotic Arm API Development FAQ",
          link: "FQA/sdk/",
        },
        {
          text: "API Error Codes",
          link: "apierrorList/",
        },
      ],
    },
    {
      text: "Related Downloads",
      collapsed: true,
      items: [
        {
          text: "Secondary Development Package",
          link: "download/redevelopment/",
        },
        {
          text: "Models and Dimensional Drawings",
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
      text: "Gen 4 Overview",
      link: "summarize/",
    },
    {
      text: "Version Description",
      link: "releaseNotes/releaseNotesfour/",
    },
    {
      text: "Getting Started",
      collapsed: true,
      items: [
        {
          text: "Hardware Preparation",
          link: "quickUseManual/",
        },
        {
          text: "Safety Guide",
          link: "safetyGuide/",
        },
        {
          text: "Hardware Interface",
          link: "quickUseManual/interfaceDescriptionArm/",
        },
        {
          text: "Parameter Description",
          collapsed: true,
          items: [
            {
              text: "RM65 Series",
              link: "robotParameter/RM65OntologyParameters/",
            },
            {
              text: "RM75 Series",
              link: "robotParameter/RM75OntologyParameters/",
            },
            {
              text: "RML63 Series",
              link: "robotParameter/RML63OntologyParameters/",
            },
            // {
            //   text: "ECO62 Series",
            //   link: "robotParameter/ECO62OntologyParameters",
            // },
            {
              text: "ECO63 Series",
              link: "robotParameter/ECO63OntologyParameters/",
            },
            {
              text: "ECO65 Series",
              link: "robotParameter/ECO65OntologyParameters/",
            },
            // {
            //   text: "GEN72 Series",
            //   link: "robotParameter/GEN72OntologyParameters/",
            // },
          ],
        },
        {
          text: "Teaching User Guide",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Teaching",
              link: "teachingPendantfour/armTeching/",
            },
            {
              text: "Teaching Pendant Operation Guide",
              link: "teachingPendantfour/onlineCode/",
            },
            {
              text: "Robot Arm Configuration",
              link: "teachingPendantfour/setting/",
            },
            {
              text: "Robot Arm State",
              link: "teachingPendantfour/systemInformation/",
            },
            {
              text: "Robot Arm Extension",
              link: "teachingPendantfour/extension/",
            },
          ],
        },
        {
          text: "Optional Function",
          link: "optionalfunction/",
        },
      ],
    },
    // {
    //   text: "Demo Presentation",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "API2(C、C++) Demo",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "Basic Demo",
    //           link: "demo/c/simpleProcess/",
    //         },
    //         {
    //           text: "Frame Operation Demo",
    //           link: "demo/c/coordinateSystem/",
    //         },
    //         {
    //           text: "Force-Position hybrid Control Demo",
    //           link: "demo/c/forceControl/",
    //         },
    //         {
    //           text: "End-effector Gripper Control Demo",
    //           link: "demo/c/gripper/",
    //         },
    //         {
    //           text: "Usage Demo of Controller IO Port",
    //           link: "demo/c/IOControl/",
    //         },
    //         {
    //           text: "Lifting Mechanism Control Demo",
    //           link: "demo/c/lift/",
    //         },
    //         {
    //           text: "Usage Demo of ModbusRTU",
    //           link: "demo/c/modbusRTU/",
    //         },
    //         {
    //           text: "Spline Curve Motion Demo",
    //           link: "demo/c/moves/",
    //         },
    //         {
    //           text: "Joint Angle Pass-through Demo",
    //           link: "demo/c/movejCANFD/",
    //         },
    //         {
    //           text: "Online Programming Demo",
    //           link: "demo/c/onlineProgram/",
    //         },
    //         {
    //           text: "Algorithm Demo",
    //           link: "demo/c/algoInterface/",
    //         },
    //         {
    //           text: "Test Tube Gripping Simulation",
    //           link: "demo/c/tubePicking/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "API2(Python) Demo",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "Basic Demo",
    //           link: "demo/python/simpleProcess/",
    //         },
    //         {
    //           text: "Frame Operation Demo",
    //           link: "demo/python/coordinateSystem/",
    //         },
    //         {
    //           text: "Multi-Robot Arm Control Operations Demo",
    //           link: "demo/python/doubleRoboticArm/",
    //         },
    //         {
    //           text: "Robotic Arm Force Control Demo",
    //           link: "demo/python/forceControl/",
    //         },
    //         {
    //           text: "Robotic Arm Grasping Demo",
    //           link: "demo/python/gripper/",
    //         },
    //         {
    //           text: "Usage Demo of Controller IO Function",
    //           link: "demo/python/IOControl/",
    //         },
    //         {
    //           text: "Lift Control Demo",
    //           link: "demo/python/lift/",
    //         },
    //         {
    //           text: "ModbusRTU Demo",
    //           link: "demo/python/modbusRTU/",
    //         },
    //         {
    //           text: "Spline Curve Motion Demo",
    //           link: "demo/python/moves/",
    //         },
    //         {
    //           text: "Angle Pass-through Demo",
    //           link: "demo/python/movejCANFD/",
    //         },
    //         {
    //           text: "Online Programming Demo",
    //           link: "demo/python/onlineProgram/",
    //         },
    //         {
    //           text: "Algorithm Demo",
    //           link: "demo/python/algoInterface/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "ROS Demo",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "Robot Arm Motion Control",
    //           link: "demo/ros/controlArmMove/",
    //         },
    //         {
    //           text: "Force-Position Hybrid Control Planning",
    //           link: "demo/ros/forcePositionControl/",
    //         },
    //         {
    //           text: "Get Robot Arm Status",
    //           link: "demo/ros/armState/",
    //         },
    //       ],
    //     },
    //     {
    //       text: "ROS2 Demo",
    //       collapsed: true,
    //       items: [
    //         {
    //           text: "Foxy",
    //           collapsed: true,
    //           items: [
    //             {
    //               text: "Robot Arm Motion Control",
    //               link: "demo/ros2/foxycontrolArmMove/",
    //             },
    //             {
    //               text: "Force-Position Hybrid Control Planning",
    //               link: "demo/ros2/foxyforcePositionControl/",
    //             },
    //             {
    //               text: "Get Robot Arm Status",
    //               link: "demo/ros2/foxygetArmState/",
    //             },
    //           ],
    //         },
    //         {
    //           text: "Humble",
    //           collapsed: true,
    //           items: [
    //             {
    //               text: "Robot Arm Motion Control",
    //               link: "demo/ros2/humblecontrolArmMove/",
    //             },
    //             {
    //               text: "Force-Position Hybrid Control Planning",
    //               link: "demo/ros2/humbleforcePositionControl/",
    //             },
    //             {
    //               text: "Get Robot Arm Status",
    //               link: "demo/ros2/humblegetArmState/",
    //             },
    //           ],
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      text: "JSON Protocol",
      collapsed: true,
      items: [
        {
          text: "Getting Started",
          link: "json/getStartedJson/",
        },
        {
          text: "Joint Parameter Command Set",
          link: "json/jointParameter/",
        },
        {
          text: "Motion Parameter Command Set",
          link: "json/armConfig/",
        },
        {
          text: "Motion Command Set",
          link: "json/motionConfig/",
        },
        {
          text: "Frame Command Set",
          link: "json/coordinate/",
        },
        {
          text: "State Query Command Set",
          link: "json/armState/",
        },
        {
          text: "System Command Set",
          link: "json/systemConfig/",
        },
        {
          text: "Network Configuration Command Set",
          link: "json/networkConfig/",
        },
        {
          text: "IO Configuration Command Set",
          link: "json/ioConfig/",
        },
        {
          text: "UDP Active Reporting Command Set",
          link: "json/udpConfig/",
        },
        {
          text: "Online Programming Command Set",
          link: "json/onlineProgram/",
        },
        {
          text: "Drag-and-Teach Command Set",
          link: "json/dragTech/",
        },
        {
          text: "Modbus Command Set",
          link: "json/modbusfour/",
        },
        {
          text: "Trajectory File Command Set",
          link: "json/trajectoryfile/",
        },
        // {
        //   text: "Electronic Fence and Virtual Wall Command Set",
        //   link: "json/electronicFence/",
        // },
        // {
        //   text: "Self-Collision Safety Detection Command Set",
        //   link: "json/selfCollision/",
        // },
        {
          text: "Force Sensor Command Set (Optional)",
          link: "json/forceSensor/",
        },
        {
          text: "End Effector Command set (optional)",
          link: "json/endTool/",
        },
        // {
        //   text: "End-Effector Ecosystem Command Set (optional)",
        //   link: "json/endeffector/",
        // },
        {
          text: "Controller Extension Device Command Set (Optional)",
          link: "json/expandControl/",
        },
        {
          text: "Appendix: Error Codes",
          link: "json/errorList/",
        },
      ],
    },
    {
      text: "API2(C、C++)",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "apic/getStarted/",
        },
        {
          text: "Interface Description",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Connection Configuration",
              link: "apic/classes/roboticArm/",
            },
            {
              text: "Robotic Arm Trajectory Command",
              link: "apic/classes/movePlan/",
            },
            {
              text: "Tool Frame Configuration",
              link: "apic/classes/toolCoordinateConfig/",
            },
            {
              text: "Work Frame Configuration",
              link: "apic/classes/workCoordinateConfig/",
            },
            {
              text: "Get the Robotic Arm State",
              link: "apic/classes/armState/",
            },
            {
              text: "End Effector Motion Parameter Configuration",
              link: "apic/classes/armTipVelocityParameters/",
            },
            {
              text: "Robotic Arm Teaching Command",
              link: "apic/classes/armTeachMove/",
            },
            {
              text: "Drag Teaching Configuration",
              link: "apic/classes/dragTeach/",
            },
            {
              text: "Motion State Control Command",
              link: "apic/classes/armMotionControl/",
            },
            {
              text: "Communication Configuration",
              link: "apic/classes/communicationConfig/",
            },
            {
              text: "System Configuration",
              link: "apic/classes/controllerConfig/",
            },
            {
              text: "System Installation Method Configuration",
              link: "apic/classes/installPos/",
            },
            {
              text: "General Extended Joint Configuration",
              link: "apic/classes/expandControl/",
            },
            {
              text: "Lifting Mechanism Configuration",
              link: "apic/classes/liftControl/",
            },
            {
              text: "End Effector 6-DoF Force Configuration",
              link: "apic/classes/force/",
            },
            // {
            //   text: "Electronic Fence and Virtual Wall Configuration",
            //   link: "apic/classes/electronicFenceConfig/",
            // },
            {
              text: "Pass-Through Force-Position Hybrid Control Compensation Configuration",
              link: "apic/classes/forcePositionControl/",
            },
            {
              text: "Global Waypoint Management",
              link: "apic/classes/globalWaypointManage/",
            },
            {
              text: "End-Effector Tool gripper configuration",
              link: "apic/classes/gripperControl/",
            },
            {
              text: "Five-Finger Dexterous Hand Configuration",
              link: "apic/classes/handControl/",
            },
            // {
            //   text: "End-Effector Ecosystem Protocol Configuration",
            //   link: "apic/classes/rmPlus/",
            // },
            {
              text: "Controller IO Configuration and Query",
              link: "apic/classes/controllerIOConfig/",
            },
            {
              text: "End-Effector Tool IO configuration",
              link: "apic/classes/effectorIOConfig/",
            },
            {
              text: "Joint Configuration",
              link: "apic/classes/jointConfigSettings/",
            },
            {
              text: "Joint Configuration Query",
              link: "apic/classes/jointConfigRead/",
            },
            {
              text: "Modbus Configuration",
              link: "apic/classes/modbusfour/",
            },
            {
              text: "Trajectory File",
              link: "apic/classes/trajectoryfile/",
            },
            // {
            //   text: "Self-Collision Safety Detection Configuration",
            //   link: "apic/classes/selfCollision/",
            // },
            {
              text: "Online Programming Configuration",
              link: "apic/classes/projectManagement/",
            },
            {
              text: "Algorithm Interface Configuration",
              link: "apic/classes/algo/",
            },
            {
              text: "UDP Active Reporting Configuration",
              link: "apic/classes/udpConfig/",
            },
          ],
        },
        {
          text: "Structure",
          collapsed: true,
          items: [
            {
              text: "All Robotic Arm State",
              link: "apic/struct/allState/",
            },
            {
              text: "Current State",
              link: "apic/struct/currentState/",
            },
            {
              text: "Joint Status",
              link: "apic/struct/jointStatus/",
            },
            {
              text: "Joint Version",
              link: "apic/struct/version/",
            },
            {
              text: "Basic Information",
              link: "apic/struct/robotInfo/",
            },
            {
              text: "Position And Orientation",
              link: "apic/struct/pose/",
            },
            {
              text: "Position Coordinates",
              link: "apic/struct/position/",
            },
            {
              text: "Controller Ctrl Layer Software Information",
              link: "apic/struct/ctrlversion/",
            },
            {
              text: "Frame",
              link: "apic/struct/frame/",
            },
            {
              text: "Frame Name",
              link: "apic/struct/frameName/",
            },
            {
              text: "Online Programming Running State",
              link: "apic/struct/programRunState/",
            },
            {
              text: "Online Programming List",
              link: "apic/struct/programTrajectorys/",
            },
            {
              text: "Online Programming Storage",
              link: "apic/struct/trajectoryData/",
            },
            {
              text: "Flowchart Program Run State",
              link: "apic/struct/flowchartstate/",
            },
            {
              text: "Global Waypoint List",
              link: "apic/struct/waypointList/",
            },
            {
              text: "Global Waypoint Storage",
              link: "apic/struct/waypoint/",
            },
            {
              text: "Software Version",
              link: "apic/struct/softwareVersion/",
            },
            {
              text: "Software Information",
              link: "apic/struct/softwarinfo/",
            },
            {
              text: "Gripper State",
              link: "apic/struct/gripperState/",
            },
            // {
            //   text: "Envelope Ball Parameter Set",
            //   link: "apic/struct/envelopeBallsList/",
            // },
            // {
            //   text: "Envelope Ball",
            //   link: "apic/struct/envelopesBall/",
            // },
            {
              text: "Online Programming File Sending",
              link: "apic/struct/sendProject/",
            },
            {
              text: "Lifting Mechanism And Expansion Joint State",
              link: "apic/struct/expandState/",
            },
            // {
            //   text: "Electronic Fence/Virtual Wall Enabling State",
            //   link: "apic/struct/electronicFenceEnable/",
            // },
            {
              text: "Dynamic Model Version",
              link: "apic/struct/dynamicVersion/",
            },
            // {
            //   text: "Geometric Model",
            //   link: "apic/struct/fenceConfig/",
            // },
            // {
            //   text: "Geometric Model Cube",
            //   link: "apic/struct/fenceConfigCube/",
            // },
            // {
            //   text: "Geometric Model",
            //   link: "apic/struct/fenceConfigList/",
            // },
            // {
            //   text: "Geometric Model Plane",
            //   link: "apic/struct/fenceConfigPlane/",
            // },
            // {
            //   text: "Geometric Model Sphere",
            //   link: "apic/struct/fenceConfigSphere/",
            // },
            {
              text: "Force Sensor Data",
              link: "apic/struct/forceSensor/",
            },
            {
              text: "6-DoF Force Sensor Data",
              link: "apic/struct/forceData/",
            },
            {
              text: "Robotic Arm Control Handle",
              link: "apic/struct/robotHandle/",
            },
            {
              text: "Peripheral Data Read and Write",
              link: "apic/struct/peripheralReadWriteParams/",
            },
            {
              text: "UDP-Based Custom Pushing Item",
              link: "apic/struct/udpCustomConfig/",
            },
            {
              text: "UDP Real-time Pushing Interface",
              link: "apic/struct/realtimePushConfig/",
            },
            {
              text: "UDP-Based Pushed Expansion Joint Data",
              link: "apic/struct/udpExpandState/",
            },
            {
              text: "UDP-Based Pushed Lifting Joint Data",
              link: "apic/struct/udpLiftState/",
            },
            {
              text: "UDP-Based Pushed Dexterous Hand Data",
              link: "apic/struct/udpHandState/",
            },
            {
              text: "UDP-Based Pushed Aloha State",
              link: "apic/struct/udpAlohaState/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing",
              link: "apic/struct/realtimeArmJointState/",
            },
            {
              text: "Algorithm Library Version",
              link: "apic/struct/algorithmVersion/",
            },
            {
              text: "Algorithm Envelope Parameter",
              link: "apic/struct/toolEnvelopeSphere/",
            },
            {
              text: "Euler Angles",
              link: "apic/struct/euler/",
            },
            {
              text: "Quaternion",
              link: "apic/struct/quat/",
            },
            {
              text: "Rotation Matrix",
              link: "apic/struct/matrix/",
            },
            {
              text: "Inverse Kinematics",
              link: "apic/struct/inverseKinematicsParams/",
            },
            {
              text: "Inverse Kinematics Full Solution",
              link: "apic/struct/inverseKinematicsAllParams/",
            },
            {
              text: "Compiling Instruction",
              link: "apic/struct/planinfo/",
            },
            {
              text: "Force-Position Hybrid Control",
              link: "apic/struct/forcePosition/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Compensation",
              link: "apic/struct/forcePositionMove/",
            },
            {
              text: "Multiple Drag Teaching",
              link: "apic/struct/multiDragTeach/",
            },
            {
              text: "Digital IO Configuration",
              link: "apic/struct/ioConfig/",
            },
            {
              text: "Digital IO Status Acquisition",
              link: "apic/struct/ioGetConfig/",
            },
            {
              text: "Angle Transparency Mode",
              link: "apic/struct/movejCanfdMode/",
            },
            {
              text: "Pose Transparency Mode",
              link: "apic/struct/movepCanfdMode/",
            },
            {
              text: "End-Effector Basic Information",
              link: "apic/struct/plusBase/",
            },
            {
              text: "End-Effector Real-Time Information",
              link: "apic/struct/plusState/",
            },
            {
              text: "Modbus TCP Write Data",
              link: "apic/struct/modbustcpswrite/",
            },
            {
              text: "Modbus TCP Master Information",
              link: "apic/struct/modbustcpmaster/",
            },
            {
              text: "Modbus TCP Master List",
              link: "apic/struct/modbustcpmasterlist/",
            },
            {
              text: "Modbus TCP Read Data Parameters",
              link: "apic/struct/modbustcpread/",
            },
            {
              text: "Modbus RTU Read Data Parameters",
              link: "apic/struct/modbusread/",
            },
            {
              text: "Modbus RTU Write Data",
              link: "apic/struct/modbuswrite/",
            },
            {
              text: "Trajectory Information",
              link: "apic/struct/trajectoryinfo/",
            },
            {
              text: "Trajectory List",
              link: "apic/struct/trajectoryinfolist/",
            },
            {
              text: "Error Code Structure",
              link: "apic/struct/err/",
            },
          ],
        },
        {
          text: "Type description",
          link: "apic/type/",
        },
        {
          text: "API2 Error Codes",
          link: "apierrorList2/",
        },
      ],
    },
    {
      text: "API2(Python)",
      collapsed: true,
      items: [
        {
          text: "Quick Start",
          link: "apipython/getStarted/",
        },
        {
          text: "Interface Description",
          collapsed: true,
          items: [
            {
              text: "Robotic Arm Connection Control",
              link: "apipython/classes/roboticArm/",
            },
            {
              text: "Robotic Arm Trajectory Control",
              link: "apipython/classes/movePlan/",
            },
            {
              text: "Tool Frame Configuration",
              link: "apipython/classes/toolCoordinateConfig/",
            },
            {
              text: "Work Frame Configuration",
              link: "apipython/classes/workCoordinateConfig/",
            },
            {
              text: "Get the Robotic Arm State",
              link: "apipython/classes/armState/",
            },
            {
              text: "Robotic Arm Motion Parameter Configuration",
              link: "apipython/classes/tipVelocityParameters/",
            },
            {
              text: "Teaching and Stepping Control of the Robotic Arm",
              link: "apipython/classes/teachMove/",
            },
            {
              text: "Drag Teaching Configuration",
              link: "apipython/classes/dragTeach/",
            },
            {
              text: "Robotic Arm Motion State Control",
              link: "apipython/classes/motionControl/",
            },
            {
              text: "Communication Configuration",
              link: "apipython/classes/communicationConfig/",
            },
            {
              text: "System Configuration",
              link: "apipython/classes/controllerConfig/",
            },
            {
              text: "System Installation Method Configuration",
              link: "apipython/classes/installPos/",
            },
            {
              text: "Universal Extended Joint Control",
              link: "apipython/classes/expandControl/",
            },
            {
              text: "Lifting Mechanism Configuration",
              link: "apipython/classes/liftControl/",
            },
            {
              text: "End 6-DoF Force Sensor Configuration",
              link: "apipython/classes/force/",
            },
            // {
            //   text: "Electronic Fence and Virtual Wall Configuration",
            //   link: "apipython/classes/electronicFenceConfig/",
            // },
            {
              text: "Pass-Through Force-Position Hybrid Control Compensation Configuration",
              link: "apipython/classes/forcePositionControl/",
            },
            {
              text: "Global Waypoint Management",
              link: "apipython/classes/globalWaypointManage/",
            },
            {
              text: "Gripper Configuration",
              link: "apipython/classes/gripperControl/",
            },
            {
              text: "Five-Fingered Dexterous Hand Configuration",
              link: "apipython/classes/handControl/",
            },
            // {
            //   text: "End-Effector Ecosystem Protocol Configuration",
            //   link: "apipython/classes/rmPlus/",
            // },
            {
              text: "Controller IO Configuration and Query",
              link: "apipython/classes/controllerIOConfig/",
            },
            {
              text: "End Effector IO Configuration and Query",
              link: "apipython/classes/effectorIOConfig/",
            },
            {
              text: "Joint Configuration",
              link: "apipython/classes/jointsConfig/",
            },
            {
              text: "Joint Configuration Query",
              link: "apipython/classes/jointsConfigQuery/",
            },
            {
              text: "Modbus Configuration",
              link: "apipython/classes/modbusfour/",
            },
            {
              text: "Trajectory File",
              link: "apipython/classes/trajectoryfile/",
            },
            // {
            //   text: "Self-Collision Safety Detection Configuration",
            //   link: "apipython/classes/selfCollision/",
            // },
            {
              text: "Online Programming File Management",
              link: "apipython/classes/projectManagement/",
            },
            {
              text: "Algorithm Interface Configuration",
              link: "apipython/classes/algo/",
            },
            {
              text: "UDP Proactive Reporting Configuration",
              link: "apipython/classes/udpConfig/",
            },
          ],
        },
        {
          text: "Structure",
          collapsed: true,
          items: [
            {
              text: "Algorithm Library Version",
              link: "apipython/struct/algorithmVersion/",
            },
            {
              text: "Algorithm Envelope Parameter",
              link: "apipython/struct/algoToolEnvelope/",
            },
            {
              text: "All Robotic Arm State",
              link: "apipython/struct/armAllState/",
            },
            {
              text: "Robotic Arm Software Version",
              link: "apipython/struct/armSoftwareVersion/",
            },
            {
              text: "Software Information",
              link: "apipython/struct/softwarinfo/",
            },
            {
              text: "Controller Ctrl Layer Software Information",
              link: "apipython/struct/ctrlVersion/",
            },
            {
              text: "Current Robotic Arm State",
              link: "apipython/struct/currentArmState/",
            },
            {
              text: "Flowchart Program Run State",
              link: "apipython/struct/flowchartstate/",
            },
            {
              text: "Dynamic Model Version",
              link: "apipython/struct/dynamicVersion/",
            },
            // {
            //   text: "Electronic Fence/Virtual Wall Enabling State",
            //   link: "apipython/struct/electronicFenceEnable/",
            // },
            // {
            //   text: "Tool Frame Envelope Ball",
            //   link: "apipython/struct/envelopesBall/",
            // },
            // {
            //   text: "Tool Frame Envelope Ball List",
            //   link: "apipython/struct/envelopeBallsList/",
            // },
            {
              text: "Euler Angle",
              link: "apipython/struct/euler/",
            },
            {
              text: "Robotic Arm In-Position Event",
              link: "apipython/struct/eventPushData/",
            },
            {
              text: "Expansion Joint State",
              link: "apipython/struct/expandState/",
            },
            // {
            //   text: "Electronic Fence",
            //   link: "apipython/struct/fenceConfig/",
            // },
            // {
            //   text: "Geometric Model Cube",
            //   link: "apipython/struct/fenceConfigCube/",
            // },
            // {
            //   text: "Geometric Model",
            //   link: "apipython/struct/fenceConfigList/",
            // },
            // {
            //   text: "Geometric Model Plane",
            //   link: "apipython/struct/fenceConfigPlane/",
            // },
            // {
            //   text: "Geometric Model Sphere",
            //   link: "apipython/struct/fenceConfigSphere/",
            // },
            // {
            //   text: "Geometric Model Name",
            //   link: "apipython/struct/fenceNames/",
            // },
            {
              text: "6-DoF Force Sensor Data",
              link: "apipython/struct/forceData/",
            },
            {
              text: "Force Sensor Data",
              link: "apipython/struct/forceSensor/",
            },
            {
              text: "Robotic Arm Position and Orientation",
              link: "apipython/struct/frame/",
            },
            {
              text: "Frame Name",
              link: "apipython/struct/frameName/",
            },
            {
              text: "Gripper State",
              link: "apipython/struct/gripperState/",
            },
            {
              text: "Inverse Kinematics",
              link: "apipython/struct/inverseKinematicsParams/",
            },
            {
              text: "Inverse Kinematics Full Solution Parameter",
              link: "apipython/struct/inverseKinematicsAllSolve/",
            },
            {
              text: "Robotic Arm Joint State",
              link: "apipython/struct/jointStatus/",
            },
            {
              text: "Joint Version",
              link: "apipython/struct/version/",
            },
            {
              text: "Matrix",
              link: "apipython/struct/matrix/",
            },
            {
              text: "Peripheral Data Read and Write Parameter",
              link: "apipython/struct/peripheralReadWriteParams/",
            },
            {
              text: "Controller Plan Layer Software Information",
              link: "apipython/struct/planinfo/",
            },
            {
              text: "Pose",
              link: "apipython/struct/pose/",
            },
            {
              text: "Position",
              link: "apipython/struct/position/",
            },
            {
              text: "Robotic Arm Program Running State",
              link: "apipython/struct/programRunState/",
            },
            {
              text: "Query Online Programming List",
              link: "apipython/struct/programTrajectorys/",
            },
            {
              text: "Quaternion",
              link: "apipython/struct/quat/",
            },
            {
              text: "UDP-Based Custom Real-Time Pushing Item",
              link: "apipython/struct/udpCustomConfig/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing Interface Configuration",
              link: "apipython/struct/realtimePushConfig/",
            },
            {
              text: "UDP-Based Pushed Expansion Joint State",
              link: "apipython/struct/udpExpandState/",
            },
            {
              text: "UDP-Based Pushed Lifting Mechanism State",
              link: "apipython/struct/udpLiftState/",
            },
            {
              text: "UDP-Based Pushed Dexterous Hand State",
              link: "apipython/struct/udpHandState/",
            },
            {
              text: "UDP-Based Pushed Aloha State",
              link: "apipython/struct/udpAlohaState/",
            },
            {
              text: "UDP-Based Real-Time Robotic Arm State Pushing",
              link: "apipython/struct/realtimeArmJointState/",
            },
            {
              text: "Robotic Arm Handle",
              link: "apipython/struct/robotHandle/",
            },
            {
              text: "Robotic Arm Information",
              link: "apipython/struct/robotInfo/",
            },
            {
              text: "Programming File Information Sending",
              link: "apipython/struct/sendProject/",
            },
            {
              text: "Online Programming Storage Information",
              link: "apipython/struct/trajectoryData/",
            },
            {
              text: "Global Waypoint",
              link: "apipython/struct/waypoint/",
            },
            {
              text: "Global Waypoint List",
              link: "apipython/struct/waypointList/",
            },
            {
              text: "Force-Position Hybrid Control Parameter",
              link: "apipython/struct/forcePosition/",
            },
            {
              text: "Pass-Through Force-Position Hybrid Compensation",
              link: "apipython/struct/forcePositionMove/",
            },
            {
              text: "Multiple Drag Teaching Parameter",
              link: "apipython/struct/multiDragTeach/",
            },
            {
              text: "End-Effector Basic Information",
              link: "apipython/struct/rmPlusBaseInfo/",
            },
            {
              text: "End-Effector Real-Time Information",
              link: "apipython/struct/rmPlusStateInfo/",
            },
            {
              text: "Modbus TCP Write Data",
              link: "apipython/struct/modbustcpswrite/",
            },
            {
              text: "Modbus TCP Master Information",
              link: "apipython/struct/modbustcpmaster/",
            },
            {
              text: "Modbus TCP Master List",
              link: "apipython/struct/modbustcpmasterlist/",
            },
            {
              text: "Modbus TCP Read Data Parameters",
              link: "apipython/struct/modbustcpread/",
            },
            {
              text: "Modbus RTU Read Data Parameters",
              link: "apipython/struct/modbusread/",
            },
            {
              text: "Modbus RTU Write Data",
              link: "apipython/struct/modbuswrite/",
            },
            {
              text: "Trajectory Information",
              link: "apipython/struct/trajectoryinfo/",
            },
            {
              text: "Trajectory List",
              link: "apipython/struct/trajectoryinfolist/",
            },
            {
              text: "Error Code Structure",
              link: "apipython/struct/err/",
            },
          ],
        },
        {
          text: "Type description",
          link: "apipython/type/",
        },
        {
          text: "API2 Error Codes",
          link: "apierrorList2/",
        },
      ],
    },
    // {
    //   text: "ROS Development",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Quick Start",
    //       link: "ros/getStarted/",
    //     },
    //     {
    //       text: "RM-Robotic Arm Driver Package",
    //       link: "ros/driver/",
    //     },
    //     {
    //       text: "RM-Quick Start Package",
    //       link: "ros/bringup/",
    //     },
    //     {
    //       text: "RM-Moveit Communication Package",
    //       link: "ros/control/",
    //     },
    //     {
    //       text: "RM-Robotic Arm Model Package",
    //       link: "ros/description/",
    //     },
    //     {
    //       text: "RM-Robotic Arm ROS Examples",
    //       link: "ros/example/",
    //     },
    //     {
    //       text: "RM-Gazebo Package",
    //       link: "ros/gazebo/",
    //     },
    //     {
    //       text: "RM-Moveit Control Package",
    //       link: "ros/moveitConfig/",
    //     },
    //     {
    //       text: "RM-Robotic Arm ROS Topic Description",
    //       link: "ros/driverDetailDescription/",
    //     },
    //     {
    //       text: "RM-ROS Package Message List",
    //       link: "ros/msg/",
    //     },
    //   ],
    // },
    // {
    //   text: "ROS2 Development",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "Quick Start",
    //       link: "ros2/getStarted/",
    //     },
    //     {
    //       text: "RM-Robotic Arm Driver Package",
    //       link: "ros2/driver/",
    //     },
    //     {
    //       text: "RM-Quick Start Package",
    //       link: "ros2/bringup/",
    //     },
    //     {
    //       text: "RM-Moveit Communication Package",
    //       link: "ros2/control/",
    //     },
    //     {
    //       text: "RM-Robotic Arm Model Package",
    //       link: "ros2/description/",
    //     },
    //     {
    //       text: "RM-Robotic Arm ROS2 Examples",
    //       link: "ros2/example/",
    //     },
    //     {
    //       text: "RM-Gazebo Package",
    //       link: "ros2/gazebo/",
    //     },
    //     {
    //       text: "RM-Moveit2 Control Package",
    //       link: "ros2/moveit2Config/",
    //     },
    //     {
    //       text: "RM-Robotic Arm ROS2 Topic Description",
    //       link: "ros2/ros2Description/",
    //     },
    //     {
    //       text: "RM-Custom Message Description",
    //       link: "ros2/rosInterfaces/",
    //     },
    //   ],
    // },
    {
      text: "Modbus",
      collapsed: true,
      items: [
        {
          text: "Modbus Slave Address Table",
          link: "modbus/",
        },
      ],
    },
    // {
    //   text: "End-effector Ecosystem",
    //   collapsed: true,
    //   items: [
    //     {
    //       text: "End-effector Ecosystem List",
    //       link: "appendix/endeffector/",
    //     },
    //   ],      
    // },
    {
      text: "FAQ",
      collapsed: true,
      items: [
        {
          text: "Quick Use FAQ",
          link: "FQA/nounConcept/",
        },
        {
          text: "Robotic Arm API Development FAQ",
          link: "FQA/sdk/",
        },
      ],
    },
    {
      text: "Related Downloads",
      collapsed: true,
      items: [
        {
          text: "Secondary Development Package",
          link: "download/redevelopment/",
        },
        {
          text: "Models and Dimensional Drawings",
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
      text: "Overview",
      link: "summarize",
    },
    {
      text: "Getting Started",
      collapsed: false,
      items: [
        {
          text: "Introduction of WHJ Series Joint",
          link: "parameter/",
        },
        {
          text: "Electrical Description of Joints",
          link: "electricalInstructions/",
        },
        {
          text: "Detailed Parameters of Joints in Each Series",
          collapsed: false,
          items: [
            {
              text: "WHJ03 series",
              link: "parameter/WHJ03/",
            },
            {
              text: "WHJ10 series",
              link: "parameter/WHJ10/",
            },
            {
              text: "WHJ30 series",
              link: "parameter/WHJ30/",
            },
            {
              text: "WHJ60 series",
              link: "parameter/WHJ60/",
            },
            {
              text: "WHJ120 series",
              link: "parameter/WHJ120/",
            },
          ],
        },
        {
          text: "Single-Joint Host Computer",
          collapsed: false,
          items: [
            {
              text: "Environment Preparation",
              link: "guide/SinglejointToolUserManual/singlejointTool/",
            },
            {
              text: "Main page Navigation",
              link: "guide/SinglejointToolUserManual/realtimeNavigation/",
            },
            {
              text: "Waveform Navigation",
              link: "guide/SinglejointToolUserManual/waveformNavigation/",
            },
            {
              text: "Information Navigation",
              link: "guide/SinglejointToolUserManual/informationNavigation/",
            },
            {
              text: "CAN Pro Navigation",
              link: "guide/SinglejointToolUserManual/caninformation/",
            },
          ],
        },
      ],
    },
    {
      text: "Joint CANFD Communication Protocol",
      collapsed: false,
      items: [
        {
          text: "Introduction of CANFD Protocol",
          link: "CANFD/explanation/",
        },
        {
          text: "Memory Control Table",
          link: "CANFD/memoryControlTable/",
        },
        {
          text: "Usage Demo",
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
      text: "Overview",
      link: "summarize/",
    },
    {
      text: "Getting Started",
      collapsed: false,
      items: [
        {
          text: "Install Conda and Python environment",
          link: "getStarted/environment/",
        },
        {
          text: "Install Nvidia GPU driver",
          link: "getStarted/nivdia/",
        },
      ],
    },
    {
      text: "SDK Development Guide",
      collapsed: false,
      items: [
        {
          text: "Vertical Grasping",
          link: "developerGuide/verticalGrab/",
        },
        {
          text: "Multi-modal Recognition",
          link: "developerGuide/multimodalRecognition/",
        },
        {
          text: "Item Segmentation",
          link: "developerGuide/itemSegmentation/",
        },
        {
          text: "Item Tracking",
          link: "developerGuide/itemTracking/",
        },
        {
          text: "Item Pose",
          link: "developerGuide/itemPosture/",
        },
        {
          text: "Visual Servo",
          link: "developerGuide/visualServo/",
        },
      ],
    },
    {
      text: "End-effector Hardware Adaptation Guide",
      collapsed: false,
      items: [
        {
          text: "Hand-Eye Calibration",
          link: "developerGuide/hand/",
        },
      ],
    },
  ];
};

//案例
const exampleSide = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "Robotic Arm Integration Application Cases",
      collapsed: false,
      items: [
        // {
        //   text: "新零售",
        //   link: "demo/newRetail/newRetail",
        // },
        {
          text: "Robotic Dog",
          link: "demo/robotDog/",
        },
        {
          text: "Detection Model Training",
          link: "demo/yolodetecttrain/",
        },
        {
          text: "YOLOv8 Visual Recognition",
          link: "demo/YOLOV8VisualRecognition/",
        },
        {
          text: "Autonomous Polishing Workstation",
          link: "demo/selfServicePolishing/",
        },
        {
          text: "Touch Teleoperation",
          link: "demo/touchteleoperation/",
        },
      ],
    },
    {
      text: "Embodied AI Robot",
      collapsed: false,
      items: [
        {
          text: "URDF to XACRO",
          link: "demo/URDFmodelassembly/",
        },
        {
          text: "Warehouse Handling Robot",
          link: "demo/warehousehandlingrobot/",
        },
      ],
    },
    {
      text: "Open Source Projects",
      collapsed: false,
      items: [
        {
          text: "Two-Finger Parallel Gripper",
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
      text: "Overview",
      link: "getStarted/",
    },
    {
      text: "Ultra-lightweight Humanoid Robotic Arm",
      collapsed: false,
      items: [
        {
          text: "Upgrade of Robotic Arm Controller and End Interface Board",
          link: "arm/controllerEndInterfaceBoardUpgrade/",
        },
        {
          text: "The Impact of Robotic Arm Zero Position and Its Settings",
          link: "arm/robotZeroPosition/",
        },
        {
          text: "Singular Point Analysis and Avoidance Methods",
          link: "arm/roboticSingularity/",
        },
        {
          text: "Virtual Machine Cannot Ping the Robotic Arm",
          link: "arm/virtualMachinesPing/",
        },
        {
          text: "External Emergency Stop Button Box",
          link: "arm/ExternalEmergencyStopButtonBox/",
        },
        {
          text: "Debugging Methods for Force and Position Hybrid Control Parameters",
          link: "arm/ForceandPositionHybridControl/",
        },
      ],
    },
    {
      text: "RealMan Ecosystem",
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
          text: "Solutions for Port Conflict",
          link: "RealMan/Solutionsforthe98AddressalreadyinuseError/",
        },
        {
          text: "Implementing Robotic Arm UDP Feedback via Serial Port",
          link: "RealMan/UsingserialporttoimplementUDPfeedbackfortheroboticarm/",
        },
        {
          text: "Solutions for Large Pointing Errors and Long Obstacle Avoidance Distances in Shuidi 2",
          link: "RealMan/Solutionsforlargeerrorsandlongobstacleavoidancedistances/",
        },
      ],
    },
  ];
};
export {
  robotSide,
  robotSide4th,
  jointSide,
  AISide,
  exampleSide,
  blogSide
}
