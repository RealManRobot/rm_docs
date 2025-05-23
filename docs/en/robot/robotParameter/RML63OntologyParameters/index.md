# <p class="hidden">Ontology Parameters: </p>RML63 Series Parameters and D-H Model

## Basic Parameters

<table>
    <tr>
        <th colspan="2">Parameter Name</th>
        <th>Parameter Value</th>
    </tr>
    <tr>
        <th rowspan="13">Basic Parameters</th>
        <th>Degrees of Freedom</th>
        <td>6</td>
    </tr>
    <tr>
        <th>Configuration</th>
        <td>Humanoid Configuration</td>
    </tr>
    <tr>
        <th>Joint Brake Type</th>
        <td>Joints 1 to 4: Hard Brake<br>Joints 5 to 6: Soft Brake</td>
    </tr>
    <tr>
        <th>Working Radius/mm</th>
        <td>Standard Version: 900<br>Six-Axis Force L Version: 917<br>Six-Axis Force K Version: 928.5</td>
    </tr>
    <tr>
        <th>Payload/kg</th>
        <td>3</td>
    </tr>
    <tr>
        <th>Self-weight/kg</th>
        <td>Standard Version: 10<br>Six-Axis Force Version: 10.1</td>
    </tr>
    <tr>
        <th>Repeatability/mm</th>
        <td>±0.05</td>
    </tr>
    <tr>
        <th>TCP Line Speed/m/s</th>
        <td>≤2.8</td>
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
        <th rowspan="6">Motion Angle Range/°</th>
        <th>J1</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J2</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J3</th>
        <td>-178~+145</td>
    </tr>
    <tr>
        <th>J4</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J5</th>
        <td>-178~+178</td>
    </tr>
    <tr>
        <th>J6</th>
        <td>-360~+360</td>
    </tr>
    <tr>
        <th rowspan="6">Maximum Angular Velocity/°/s</th>
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

<div align="center"> <img src="../../robotParameter/doc/RML63.png" width = 500 /> </div>

**MDH parameters of RML63 (modified D-H parameters):**

|Joint No.(i)|$a_{i-1}$(mm)|$\alpha_{i -1}$(°)|$d_i$(mm)|$θ_i$ / $offset_i$(°)|
|:--|:--|:--|:--|:--|
|   1   |   0     |   0    | $d_1$ |  0   |
|   2   |   -86   |   -90  |   0   |  -90 |
|   3   |   380   |   0    |   0   |  90  |
|   4   |   69    |   90   |   405 |  0   |
|   5   |   0     |   -90  |   0   |  180 |
|   6   |   0     |   -90  | $d_6$ |  180 |

- RML63II &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: $d_1=172$ mm
- RML63III &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: $d_1=162.5$ mm
- RML63-B &nbsp;&nbsp;&nbsp;&nbsp;: $d_6=115.1$ mm
- RML63-6FB : $d_6=132.3$ mm
- RML63-6F &nbsp;&nbsp;: $d_6=143.6$ mm

Note:

- offset refers to the offset of the joint zero position from the model zero position, that is, `model angle = joint angle + offset`.
- The RML63 series robotic arm comes in two versions, Type II and Type III, with the main difference being the length of joint 1.

### Kinetic parameters of RML63 robot link

**RML63II**:

|   joint_id(i)     |  1      |  2      |  3      |  4       |  5      |  6      |  -      |-|
|:--        |:--      |:--      |:--      |:--       |:--      |:--      |:--      |:--|
| **$m$**       | 1.837   | 2.006   | 1.961   | 1.201    | 1.026   | 0.107   | 0.248   |0.189|
| **$x$**       | -68.442 | 166.7   | 33.399  | 0        | -0.031  | -0.506  | -0.426  |-0.352|
| **$y$**       | -23.913 | -0.002  | -29.498 | -35.177  | 30.146  | 0.255   | 0.237   |-0.067|
| **$z$**       | -6.938  | -92.59  | -17.697 | -184.4   | -12.341 | -10.801 | -27.223 |-18.302|
| **$L_{xx}$**  | 3462.129 | 18664.833 | 6432.819 | 53007.563 | 2732.466 | 50.918 | 308.844 |133.613|
| **$L_{xy}$**  | -3765.305 | -0.587  | 3869.875 | -0.04    | -2.123  | -3.136  | -3.781  |0.522|
| **$L_{xz}$**  | -46.206  | 30804.14 | 17.607  | 0.087    | 0.374   | -0.699  | -1.468  |1.623|
| **$L_{yy}$**  | 12643.164 | 103568.483 | 7094.216 | 50754.293 | 829.793 | 47.42 | 304.616 |130.260|
| **$L_{yz}$**  | -50.044  | -0.287  | -17.611 | -5089.754 | -2.288  | 0.388   | 0.888   |0.531|
| **$L_{zz}$**  | 13576.758 | 86722.559 | 9257.063 | 2874.631 | 2384.323 | 60.35  | 122.62  |89.503|
| **Remarks**       |         |         |         |         |         | B       | 6F      |6FB|

**RML63III**:

|   joint_id(i)     |  1      |  2      |  3      |  4       |  5      |  6      |  -      |-|
|:--        |:--      |:--      |:--      |:--       |:--      |:--      |:--      |:--|
| **$m$**       | 1.598   | 2.990   | 1.357   | 1.864    | 1.023   | 0.107   | 0.248   |0.189|
| **$x$**       | -12.900 | 109.800   | 14.100  | -0.100    | 0.100  | -0.506  | -0.426  |-0.352|
| **$y$**       | 0.100 | 0.100  | -5.600 | -23.000  | 32.600  | 0.255   | 0.237   |-0.067|
| **$z$**       | -29.800  | -64.200  | -29.400 | -236.200   | -15.200 | -10.801 | -27.223 |-18.302|
| **$L_{xx}$**  | 3150.724 | 16728.188 | 3116.708 | 128352.380 | 3299.439 | 50.918 | 308.844 |133.613|
| **$L_{xy}$**  | -18.047 | -17.784  | 508.850 | -4.255    | -1.019  | -3.136  | -3.781  |0.522|
| **$L_{xz}$**  | -13.564  | 26077.237 | -1.031  | -52.273   | 0.0317   | -0.699  | -1.468  |1.623|
| **$L_{yy}$**  | 4867.960 | 102753.087 | 4083.881 | 125960.777 | 1008.186 | 47.42 | 304.616 |130.260|
| **$L_{yz}$**  | 6.612  | 12.608  | 3.755 | -4630.083 | 0.336  | 0.388   | 0.888   |0.531|
| **$L_{zz}$**  | 2833.691 | 88450.085 | 2455.232 | 3681.884 | 2745.436 | 60.35  | 122.62  |89.503|
| **Remarks**       |         |         |         |         |         | B       | 6F      |6FB|

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

The RML63-B humanoid robotic arm has six rotating joints, each of which represents one degree of freedom. As shown in the figure below, robot joints include the shoulders (joint 1 and joint 2), elbow (joint 3), and wrists (joint 4, joint 5, and joint 6).

![alt text](../../robotParameter/doc/RML_63_image1.png)

<center>RML63II-B</center>

![alt text](../doc/RML_63_image1-1.png)

<center>RML63III-B</center>

#### Workspace

The workspace of RML63-B is a sphere with a working radius of 900 mm, in addition to the cylindrical space directly above and below the base. When determining the installation position of the robot, due considerations must be given to the cylindrical space directly above and below the robot, to avoid moving tools to this cylindrical space as much as possible. Furthermore, in actual applications, the motion ranges of all joints are as follows: joint 1: ±178°; joint 2: ±178°; joint 3: -178° to +145°; joint 4: ±178°; joint 5: ±178°; joint 6: ±360°.

![alt text](../../robotParameter/doc/RML_63_image2.png)

<center>Illustration of space within the reach of robot</center>

#### Motion singularities

##### Shoulder singularity

The center of the wrist lies on a plane that passes through the axis of Joint 1 and is parallel to the axis of Joint 2. The exemplary position is [0,-34.85,72.738,0,-35,0], as shown in the figure below:

![Shoulder singularity](image-1.png)

<center>Shoulder singularity</center>

##### Elbow singularity

The center of the wrist lies on the plane formed by Joints 2 and 3. The exemplary position is [0,-60,-9.684,0,-90,0], as shown in the figure below:
image.png

![Elbow Singularity](image.png)
<center>Elbow Singularity</center>

##### Wrist singularity

Co-axis of joint 4 and joint 6, q5=0, i.e. the point format is [x,x,x,x,0,x], indicated point [0,60,30,0,0,0], as shown in the figure below:

![Wrist singularity](../../robotParameter/doc/RML_63_image3.png)

<center>Wrist singularity</center>

##### Boundary singularity

The end of robotic arm reaches the farthest end (a special situation of q3=-9.683), i.e. the point format is [x,x,-9.683,x,0,x], Indicated points [0,0,-9.683,0,0,0], [-90,-45,-9.683,0,0,0], and [-90,-90,-9.683,0,0,0] as shown in the figure below:

![Boundary singularity 1](../../robotParameter/doc/RML_63_image4.png)

<center>Boundary singularity 1</center>

![Boundary singularity 2](../../robotParameter/doc/RML_63_image5.png)

<center>Boundary singularity 2</center>

![Boundary singularity 3](../../robotParameter/doc/RML_63_image6.png)

<center>Boundary singularity 3</center>

#### Load curves

Represent the end load curves of RML63-B and RML63-6F and RML63-6FB. Where, L refers to the radial distance of the center of mass of end load against the plane of end flange, and Z refers to the normal distance of the center of mass of end load against the plane of end flange.

![RML63-B](../../robotParameter/doc/RML_63_image7.png)

<center>End load curves of RML63-B</center>

![RML63-6F](../../robotParameter/doc/RML_63_image8.png)

<center>End load curves of RML63-6F</center>

![RML63-6FB](../../robotParameter/doc/RML_63_imageFB.png)

<center>End load curves of RML63-6FB</center>
