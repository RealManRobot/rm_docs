# <p class="hidden">Ontology Parameters: </p>RM75 Series Parameters and D-H Model

## Basic Parameters

<table>
    <tr>
        <th colspan="2">Parameter Name</th>
        <th>Parameter Value</th>
    </tr>
    <tr>
        <th rowspan="13">Basic Parameters</th>
        <th>Degrees of Freedom</th>
        <td>7</td>
    </tr>
    <tr>
        <th>Configuration</th>
        <td>Humanoid Configuration</td>
    </tr>
    <tr>
        <th>Joint Brake Type</th>
        <td>Joints 1 to 4: Hard Brake<br>Joints 5 to 7: Soft Brake</td>
    </tr>
    <tr>
        <th>Working Radius/mm</th>
        <td>Standard Version: 610<br>Six-Axis Force L Version: 627<br>Six-Axis Force K Version: 638.5</td>
    </tr>
    <tr>
        <th>Payload/kg</th>
        <td>5</td>
    </tr>
    <tr>
        <th>Self-weight/kg</th>
        <td>Standard Version: 7.8<br>Six-Axis Force Version: 7.9</td>
    </tr>
    <tr>
        <th>Repeatability/mm</th>
        <td>±0.05</td>
    </tr>
    <tr>
        <th>TCP Line Speed/m/s</th>
        <td>≤1.8</td>
    </tr>
    <tr>
        <th>Typical Power/W</th>
        <td>≤100</td>
    </tr>
    <tr>
        <th>Peak Power/W</th>
        <td>≤200</td>
    </tr>
    <tr>
        <th>Installation Angle</th>
        <td>Any Angle</td>
    </tr>
    <tr>
        <th>Base Dimensions/mm</th>
        <td>φ107</td>
    </tr>
    <tr>
        <th>Material</th>
        <td>Aluminum Alloy/ABS</td>
    </tr>
    <tr>
        <th rowspan="3">Environmental Adaptability</th>
        <th>Operating Temperature/℃</th>
        <td>0-45</td>
    </tr>
    <tr>
        <th>Operating Humidity</th>
        <td>25~85% Non-condensing</td>
    </tr>
    <tr>
        <th>Protection Level</th>
        <td>Body IP54</td>
    </tr>
    <tr>
        <th rowspan="7">Motion Angle Range/°</th>
        <th>J1</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J2</th>
        <td>-130~+130</td>
    </tr>
    <tr>
        <th>J3</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J4</th>
        <td>-135~+135</td>
    </tr>
    <tr>
        <th>J5</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J6</th>
        <td>-128~+128</td>
    </tr>
    <tr>
        <th>J7</th>
        <td>-360~+360</td>
    </tr>
    <tr>
        <th rowspan="7">Maximum Angular Velocity/°/s</th>
        <th>J1</th>
        <td>180</td>
    </tr>
    <tr>
        <th>J2</th>
        <td>180</td>
    </tr>
    <tr>
        <th>J3</th>
        <td>225</td>
    </tr>
    <tr>
        <th>J4</th>
        <td>225</td>
    </tr>
    <tr>
        <th>J5</th>
        <td>225</td>
    </tr>
    <tr>
        <th>J6</th>
        <td>225</td>
    </tr>
    <tr>
        <th>J7</th>
        <td>225</td>
    </tr>
    <tr>
        <th rowspan="2">Force Control Specifications (Supported only by 6-DoF sensors)</th>
        <th>Six-Axis Force Range</th>
        <td>200N/7N·m</td>
    </tr>
    <tr>
        <th>Six-Axis Force Accuracy</th>
        <td>±0.5%FS</td>
    </tr>
</table>

## Ontology Parameters

**MDH model frame:**

<div align="center"> <img src="../../robotParameter/doc/RM75MDH.png" width = 500 /> </div>

**MDH parameters of RM75 (modified D-H parameters):**

|joint_id(i) |$a_{i-1}$(mm)|$\alpha_{i -1}$(°)|$d_i$(mm)|$θ_i$ / $offset_i$(°)|
|:--|:--|:--|:--|:--|
|   1   |   0   |   0    |  240.5 |  0  |
|   2   |   0   |   -90  |   0    |  0  |
|   3   |   0   |   90   |   256  |  0  |
|   4   |   0   |   -90  |   0    |  0  |
|   5   |   0   |   90   |   210  |  0  |
|   6   |   0   |   -90  |   0    |  0  |
|   7   |   0   |   90   | $d_7$  |  0  |

- RM75-B &nbsp;&nbsp;&nbsp;&nbsp;: $d_7=144$ mm
- RM75-6FB: $d_7=161.2$ mm
- RM75-6F &nbsp;&nbsp;: $d_7=172.5$ mm

Note: offset refers to the offset of the joint zero position from the model zero position, that is, `model angle = joint angle + offset`.

### Kinetic parameters of RM75 robot link

|    joint_id(i)   |  1     |  2      |  3     |  4     |  5     |  6     |  7     |  -     |-|
|:--    |:--     |:--      |:--     |:--     |:--     |:--     |:--     |:--     |:--|
| **$m$**       | 1.574  | 1.217   | 1.11   | 0.685  | 0.619  | 0.602  | 0.107  | 0.248  |0.189|
| **$x$**       | 0.241  | -0.357  | 0.003  | -0.005 | 0.078  | -0.014 | -0.506 | -0.426 |-0.352|
| **$y$**       | -13.273 | -106.798 | -10.398 | -84.658 | -12.937 | -78.524 | 0.255  | 0.237  |-0.067|
| **$z$**       | -9.95  | 5.329   | -11.324 | 4.747  | -8.781 | 2.819  | -10.801 | -27.223 |-18.302|
| **$L_{xx}$**  | 2920.666 | 17404.207 | 2099.034 | 6204.576 | 778.615 | 4499.867 | 50.918 | 308.844 |133.613|
| **$L_{xy}$**  | 14.703 | -43.488 | 2.292  | -0.819 | 2.261  | -0.802 | -3.136 | -3.781 |0.522|
| **$L_{xz}$**  | -4.131 | -3.297  | -4.181 | -0.615 | -0.921 | -0.444 | -0.699 | -1.468 |1.623|
| **$L_{yy}$**  | 2476.942 | 927.428  | 1641.235 | 388.441 | 590.169 | 294.76 | 47.42  | 304.616 |130.260|
| **$L_{yz}$**  | -28.462 | 108.523 | -93.542 | 43.054 | -35.324 | 12.831 | 0.388  | 0.888  |0.531|
| **$L_{zz}$**  | 1727.926 | 17319.77 | 1182.557 | 6162.881 | 473.863 | 4478.261 | 60.35  | 122.62 |89.503|
| **Remarks**       |         |         |         |         |         |         | B      | 6F    |6FB|

Description:

- $m$ is the mass of the link, $kg$
- $x$ is the x-coordinate of the center of mass of link, $mm$
- $y$ is the y-coordinate of the center of mass of link, $mm$
- $z$ is the z-coordinate of the center of mass of link, $mm$
- $L_{xx}$,$L_{xy}$,$L_{xz}$,$L_{yy}$,$L_{yz}$,$L_{zz}$ is the principal moment of inertia described in the link frame, $kg·mm²$
- B: standard version, 6FB: Six-Axis Force L Version, 6F: six-axis force K version

Remarks:

- Source of data: CAD design values.
- If the inertial parameters in the center of mass frame are required, they can be calculated based on the parallel axis theorem, as stated below.

---

Assuming there is an output frame $\{i\}$, the center of mass frame coinciding with this coordinate system $\{i\}$ is $\{c\}$, and the coordinates of the center of mass in this frame $\{i\}$ are $P_c = [x_c  , y_c, z_c]^T$, then according to the parallel axis theorem:

$$I_c = L_i - m (P_{c}^{T}P_cI_{3×3} - P_cP_{c}^{T})$$

Where,
$$
L_i = \begin{bmatrix}L_{xx} & L_{xy} & L_{xz} \\ L_{xy} & L_{yy} & L_{yz} \\ L_{xz} & L_{yz} & L_{zz}\end{bmatrix}
$$

### Distribution and dimensions of joints

The RM75-B humanoid robotic arm has seven rotating joints, each of which represents one degree of freedom. As shown in the figure below, robot joints include the shoulders (joint 1, joint 2, and joint 3), elbow (joint 4), and wrists (joint 5, joint 6, and joint 7).

![alt text](../../robotParameter/doc/RM_75_image1.png)

#### Workspace

The workspace of RM75-B is a sphere with a working radius of 610 mm, in addition to the cylindrical space directly above and below the base. When determining the installation position of the robot, due considerations must be given to the cylindrical space directly above and below the robot, to avoid moving tools to this cylindrical space as much as possible. Furthermore, in actual applications, the motion ranges of all joints are as follows: joint 1: ±178°; joint 2: ±130°; joint 3: ±178°; joint 4: ±135°; joint 5: ±178°; joint 6: ±128°; joint 7: ±360°.

![alt text](../../robotParameter/doc/RM_75_image2.png)

<center>Illustration of space within the reach of robot</center>

Seen from the cross-section of the workspace, the area with good maneuverability of the 7-axis robot is as indicated by the yellow dotted line in the following figure, an annular area in the workspace as a whole.

![Illustration of area with good maneuverability](../../robotParameter/doc/RM_75_image3.png)

<center>Illustration of area with good maneuverability</center>

#### Motion singularities

##### Shoulder singularity

Co-line of wrist center point C (axis intersection of joint 6 and joint 7) with axis of joint 1, indicated point [0,43.4,0,-105.7,0,-30,0], as shown in the figure below:

![Shoulder singularity](../../robotParameter/doc/RM_75_image4.png)

<center>Shoulder singularity</center>

The special situation of co-axis of joint 1 with joint 7, and co-line of point C with axis of joint 1, indicated point [0,43.4,0,-105.7,0,62.3,0], as shown in the figure below:

![Shoulder singularity](../../robotParameter/doc/RM_75_image5.png)

<center>Shoulder singularity</center>

##### Elbow singularity

q4=0, i.e. the point format is [x,x, x,0,x,x,x], indicated point [0,30,0,0,90,90,0], as shown in the figure below:

![Elbow singularity](../../robotParameter/doc/RM_75_image6.png)

<center>Elbow singularity</center>

q2=0, q4=0 (a special situation of q4=0), i.e. the point format is [x,0,x,0,x,x,x], indicated point [0,0,0,0,90,90,0], as shown in the figure below:

![Elbow singularity](../../robotParameter/doc/RM_75_image7.png)

<center>Elbow singularity</center>

##### Wrist singularity

Co-axis of joint 5 and joint 7, q6=0, i.e. the point format is [x,x,x,x,x,0,x], indicated point [0,30,0,60,90,0,0], as shown in the figure below:

![Wrist singularity](../../robotParameter/doc/RM_75_image8.png)

<center>Wrist singularity</center>

q2=0, q6=0 (a special situation of q6=0), i.e. the point format is [x,0,x,x,x,0,x], indicated point [0,0,0,60,90,0,0], as shown in the figure below:

![Wrist singularity](../../robotParameter/doc/RM_75_image9.png)

<center>Wrist singularity</center>

q4=0, q6=0 (a special situation of q6=0), i.e. the point format is [x,x,x,0,x,0,x], indicated point [0,30,0,0,90,0,0], as shown in the figure below:

![Wrist singularity](../../robotParameter/doc/RM_75_image10.png)

<center>Wrist singularity</center>

##### Boundary singularity

When the end of robotic arm reaches the farthest end, q4=0, q6=0 (a special situation of q4=0), i.e. the point format is [x,x,x,0,x,0,x], indicated points [0,0,0,0,0,0], [0,45,45,0,45,0,45], as shown in the figure below:

![Boundary singularity 1](../../robotParameter/doc/RM_75_image11.png)

<center>Boundary singularity 1</center>

![Boundary singularity 2](../../robotParameter/doc/RM_75_image12.png)

<center>Boundary singularity 2</center>

#### Load curves

Represent the end load curves of RM75-B and RM75-6F and RM75-6FB. Where, L refers to the radial distance of the center of mass of end load against the plane of end flange, and Z refers to the normal distance of the center of mass of end load against the plane of end flange.

![RM75-B](../../robotParameter/doc/RM_75_image13.png)

<center>End load curves of RM75-B</center>

![RM75-6F](../../robotParameter/doc/RM_75_image14.png)

<center>End load curves of RM75-6F</center>

![RM75-6FB](../../robotParameter/doc/RM_75_imageFB.png)

<center>End load curves of RM75-6FB</center>
