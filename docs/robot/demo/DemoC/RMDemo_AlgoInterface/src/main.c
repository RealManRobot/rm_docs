#include <stdio.h>
#include "rm_interface.h"
#include "string.h"
#include <stdarg.h>

int main(int argc, char *argv[]) {
    int result = -1;
    rm_robot_handle handle;
    char *api_version = rm_api_version();
    printf("API Version: %s.\n", api_version);

    rm_robot_arm_model_e Mode = RM_MODEL_RM_65_E;
    rm_force_type_e Type = RM_MODEL_RM_B_E;
    printf("Set robot arm model to %d, sensor model to %d: Success\n", Mode, Type);
    rm_algo_init_sys_data(Mode, Type);

    // # Set the installation pose
    rm_algo_set_angle(0, 0, 0);
    printf("Installation pose set successfully\n");

    // Set the work frame
    rm_frame_t coord_work;
    coord_work.pose.position.x = 0.0f;
    coord_work.pose.position.y = 0.0f;
    coord_work.pose.position.z = 0.0f;
    coord_work.pose.quaternion.w = 0.0f;
    coord_work.pose.quaternion.x = 0.0f;
    coord_work.pose.quaternion.y = 0.0f;
    coord_work.pose.quaternion.z = 0.0f;
    coord_work.pose.euler.rx = 0.0f;
    coord_work.pose.euler.ry = 0.0f;
    coord_work.pose.euler.rz = 0.0f;
    coord_work.payload = 0.0f;
    rm_algo_set_workframe(&coord_work);

    // # Set the tool frame
    rm_frame_t coord_tool;
    coord_tool.pose.position.x = 0.0f;
    coord_tool.pose.position.y = 0.0f;
    coord_tool.pose.position.z = 0.0f;
    coord_tool.pose.quaternion.w = 0.0f;
    coord_tool.pose.quaternion.x = 0.0f;
    coord_tool.pose.quaternion.y = 0.0f;
    coord_tool.pose.quaternion.z = 0.0f;
    coord_tool.pose.euler.rx = 0.0f;
    coord_tool.pose.euler.ry = 0.0f;
    coord_tool.pose.euler.rz = 0.0f;
    coord_tool.payload = 0.0f;
    rm_algo_set_toolframe(&coord_tool);

    // Perform forward kinematics
    float joint_angles[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    rm_pose_t pose = rm_algo_forward_kinematics(&handle, joint_angles);
    printf("Forward kinematics calculation: Success\n");
    printf("Joint angles: [%.2f, %.2f, %.2f, %.2f, %.2f, %.2f]\n", joint_angles[0], joint_angles[1], joint_angles[2], joint_angles[3], joint_angles[4], joint_angles[5]);
    printf("End effector pose: Position(%.2f, %.2f, %.2f), Quaternion(%.2f, %.2f, %.2f, %.2f), Euler angles(%.2f, %.2f, %.2f)\n",
           pose.position.x, pose.position.y, pose.position.z,
           pose.quaternion.w, pose.quaternion.x, pose.quaternion.y, pose.quaternion.z,
           pose.euler.rx, pose.euler.ry, pose.euler.rz);


    // Perform inverse kinematics Attitude parameter category: 0-quaternion; 1-Euler angle
    rm_inverse_kinematics_params_t inverse_params;
    float q_in_joint[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    float q_in_pose[6] = {0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f};
    inverse_params.q_in = q_in_joint;
    inverse_params.q_pose.position.x = 0.3f;
    inverse_params.q_pose.position.y = 0.0f;
    inverse_params.q_pose.position.z = 0.3f;
    inverse_params.q_pose.quaternion.w = 0.0f;
    inverse_params.q_pose.quaternion.x = 0.0f;
    inverse_params.q_pose.quaternion.y = 0.0f;
    inverse_params.q_pose.quaternion.z = 0.0f;
    inverse_params.q_pose.euler.rx = 3.14f;
    inverse_params.q_pose.euler.ry = 0.0f;
    inverse_params.q_pose.euler.rz = 0.0f;
    inverse_params.flag = 1;
    result = rm_algo_inverse_kinematics(&handle, inverse_params, q_in_pose);
    if (result == 0) {
        printf("\nInverse Kinematics: [");
        for (int i = 0; i < 6; i++) {
            printf("%f", q_in_pose[i]);
            if (i < 5) {
                printf(", ");
            }
        }
        printf("]\n");
    } else {
        printf("\nInverse Kinematics failed, error code: %d\n", result);
    }

    // Convert Euler angles to Quaternion
    rm_euler_t euler = {3.141, 0.0, 0.0};
    rm_quat_t quaternion_angle = rm_algo_euler2quaternion(euler);
    printf("Euler to Quaternion:: [w: %f, x: %f, y: %f, z: %f]\n", quaternion_angle.w, 
            quaternion_angle.x, quaternion_angle.y, quaternion_angle.z);

    // Convert Quaternion to Euler angles
    rm_quat_t quat = {0.0, 0.0, 0.0, 1.0};
    rm_euler_t euler_angle = rm_algo_quaternion2euler(quat);
    printf("Quaternion to Euler: [rx: %f, ry: %f, rz: %f]\n", euler.rx, euler.ry, euler.rz);

}
