import{_ as a,c as n,o as s,a3 as r}from"./chunks/framework.DpFyhY0e.js";const b=JSON.parse('{"title":"rm_bringup功能包","description":"","frontmatter":{},"headers":[],"relativePath":"robot/ros/bringup.md","filePath":"robot/ros/bringup.md","lastUpdated":null}'),e={name:"robot/ros/bringup.md"},p=r(`<h1 id="rm-bringup功能包" tabindex="-1">rm_bringup功能包 <a class="header-anchor" href="#rm-bringup功能包" aria-label="Permalink to &quot;rm\\_bringup功能包&quot;">​</a></h1><p>rm_bringup功能包为实现多个launch文件同时运行所设计的功能包，使用该功能包可用一条命令实现多个节点结合的复杂功能的启动。</p><ol><li>功能包使用。</li><li>功能包架构说明。</li><li>功能包话题说明。</li></ol><p>通过这三部分内容的介绍可以帮助大家：</p><ol><li>了解该功能包的使用。</li><li>熟悉功能包中的文件构成及作用。</li><li>悉功能包相关的话题，方便开发和使用</li></ol><p>代码链接：<a href="https://github.com/RealManRobot/rm_robot/tree/main/rm_bringup%E3%80%82" target="_blank" rel="noreferrer">https://github.com/RealManRobot/rm_robot/tree/main/rm_bringup。</a></p><h2 id="_1-rm-bringup功能包使用" tabindex="-1">1.rm_bringup功能包使用 <a class="header-anchor" href="#_1-rm-bringup功能包使用" aria-label="Permalink to &quot;1.rm\\_bringup功能包使用&quot;">​</a></h2><h3 id="_1-1-moveit控制真实机械臂" tabindex="-1">1.1 moveit控制真实机械臂 <a class="header-anchor" href="#_1-1-moveit控制真实机械臂" aria-label="Permalink to &quot;1.1 moveit控制真实机械臂&quot;">​</a></h3><p>首先配置好环境完成连接后我们可以通过以下命令直接启动节点，运行rm_bringup功能包中的launch.py文件。</p><div class="language-ros vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ros</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm@rm-desktop:~$ roslaunch rm_bringup rm_&lt;arm_type&gt;_bringup.launch.py</span></span></code></pre></div><p>在实际使用时需要将以上的&lt;arm_type&gt;更换为实际的机械臂型号，可选择的机械臂型号有65、63、eco65、75、65_6f、63_6f、eco65_6f、75_6f。</p><p>例如65机械臂的启动命令：</p><p>首先需要运行rm_control节点。</p><div class="language-ros vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ros</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm@rm-desktop:~$ roslaunch rm_control rm_&lt;arm_type&gt;_control.launch</span></span></code></pre></div><p>之后需要运行bringup节点。</p><div class="language-ros vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ros</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>rm@rm-desktop:~$ roslaunch rm_bringup rm_&lt;arm_type&gt;_bringup.launch.py</span></span></code></pre></div><p>节点启动成功后，将弹出以下画面。</p><p><img src="https://alidocs.oss-cn-zhangjiakou.aliyuncs.com/res/3M0OzBP7REV8OzeE/img/c759bed7-c220-43b6-a4bc-f5db9a3c5795.png" alt="image.png"></p><p>实际该launch文件启动的为moveit控制真实机械臂的功能下面就可以使用控制球规划控制机械臂运动，详细可查看《rm_moveit_config详解》相关内容。</p><h2 id="_3-rm-bringup功能包架构说明" tabindex="-1">3.rm_bringup功能包架构说明 <a class="header-anchor" href="#_3-rm-bringup功能包架构说明" aria-label="Permalink to &quot;3.rm\\_bringup功能包架构说明&quot;">​</a></h2><h3 id="_3-1功能包文件总览" tabindex="-1">3.1功能包文件总览 <a class="header-anchor" href="#_3-1功能包文件总览" aria-label="Permalink to &quot;3.1功能包文件总览&quot;">​</a></h3><p>当前rm_driver功能包的文件构成如下。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    ├── CMakeLists.txt                   #编译规则文件</span></span>
<span class="line"><span>    ├── launch</span></span>
<span class="line"><span>    │   ├── rm_63_6f_robot.launch          #63臂六维力启动文件</span></span>
<span class="line"><span>    │   ├── rm_63_robot.launch             #63臂moveit启动文件</span></span>
<span class="line"><span>    │   ├── rm_65_6f_robot.launch          #65臂六维力启动文件</span></span>
<span class="line"><span>    │   ├── rm_65_robot.launch             #65臂moveit启动文件</span></span>
<span class="line"><span>    │   ├── rm_75_6f_robot.launch          #75臂六维力启动文件</span></span>
<span class="line"><span>    │   ├── rm_75_robot.launch             #75臂moveit启动文件</span></span>
<span class="line"><span>    │   ├── rm_eco65_6f_robot.launch      #ECO65臂六维力启动文件</span></span>
<span class="line"><span>    │   └── rm_eco65_robot.launch         #ECO65臂moveit启动文件</span></span>
<span class="line"><span>    └── package.xml</span></span></code></pre></div><h2 id="_4-rm-bringup话题说明" tabindex="-1">4.rm_bringup话题说明 <a class="header-anchor" href="#_4-rm-bringup话题说明" aria-label="Permalink to &quot;4.rm\\_bringup话题说明&quot;">​</a></h2><p>该功能包当前并没有本身的话题，主要为调用其他功能包的话题实现，关于moveit相关话题可查看《rm_moveit_config详解》相关内容。</p>`,25),t=[p];function i(o,l,c,_,m,u){return s(),n("div",null,t)}const d=a(e,[["render",i]]);export{b as __pageData,d as default};
