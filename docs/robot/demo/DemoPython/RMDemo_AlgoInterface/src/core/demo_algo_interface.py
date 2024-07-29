import sys
import os
import time

# Add the parent directory of src to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

from src.Robotic_Arm.rm_robot_interface import *


def main():
    # Initialize the algorithm controller without connecting to the robotic arm
    arm_model = rm_robot_arm_model_e.RM_MODEL_RM_65_E  # Set the robotic arm model
    force_type = rm_force_type_e.RM_MODEL_RM_B_E  # Set the end-effector type
    algo_handle = Algo(arm_model, force_type)

    # Get API version
    print("\nAPI Version: ", rm_api_version(), "\n")

    # Set the installation pose
    algo_handle.rm_algo_set_angle(0, 0, 0)
    print("\ninstallation pose set successfully\n")

    # Set the work frame
    frame = rm_frame_t(pose=(0.0, 0.0, 0.0, 0.0, 0.0, 0.0))
    algo_handle.rm_algo_set_workframe(frame)
    print("\nWork frame set successfully\n")

    # Set the tool frame
    frame = rm_frame_t(None,(0.0, 0.0, 0.0, 0.0, 0.0, 0.0), 0, 0, 0, 0)
    algo_handle.rm_algo_set_toolframe(frame)
    print("\nTool frame set successfully\n")

    # Perform forward kinematics
    joint = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    flag_eul = 1
    flag_qua = 0
    pose = algo_handle.rm_algo_forward_kinematics(joint, flag_eul)# Euler angles
    print("\nForward Kinematics (flag={}): {}\n".format(flag_eul, pose))
    pose = algo_handle.rm_algo_forward_kinematics(joint, flag_qua)# Quaternion
    print("\nForward Kinematics (flag={}): {}\n".format(flag_qua, flag_qua))

    # Perform inverse kinematics
    q_in_joint = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
    q_in_pose = [0.3, 0.0, 0.3, 3.14, 0.0, 0.0]
    flag_eul = 1
    params = rm_inverse_kinematics_params_t(q_in_joint, q_in_pose, flag_eul)
    joint_angle = algo_handle.rm_algo_inverse_kinematics(params)
    if joint_angle[0] == 0:
        print("\nInverse Kinematics: {}\n".format(joint_angle[1]))
    else:
        print("\nInverse Kinematics failed, error code: ", joint_angle[0], "\n")

    # Convert Euler angles to Quaternion
    eul = [3.141, 0.0, 0.0]
    quaternion = algo_handle.rm_algo_euler2quaternion(eul)
    print("\nEuler to Quaternion: {}\n".format(quaternion))

    # Convert Quaternion to Euler angles
    qua = [0.0, 0.0, 0.0, 1.0]
    euler_angle = algo_handle.rm_algo_quaternion2euler(qua)
    print("\nQuaternion to Euler: {}\n".format(euler_angle))

    time.sleep(1)


if __name__ == "__main__":
    main()
