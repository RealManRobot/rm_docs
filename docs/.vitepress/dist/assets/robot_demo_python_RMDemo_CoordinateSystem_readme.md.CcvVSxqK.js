import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.DpFyhY0e.js";const E=JSON.parse('{"title":"坐标系操作示例CoordinateSystem","description":"","frontmatter":{},"headers":[],"relativePath":"robot/demo/python/RMDemo_CoordinateSystem/readme.md","filePath":"robot/demo/python/RMDemo_CoordinateSystem/readme.md","lastUpdated":null}'),t={name:"robot/demo/python/RMDemo_CoordinateSystem/readme.md"},e=n(`<h1 id="坐标系操作示例coordinatesystem" tabindex="-1">坐标系操作示例CoordinateSystem <a class="header-anchor" href="#坐标系操作示例coordinatesystem" aria-label="Permalink to &quot;坐标系操作示例CoordinateSystem&quot;">​</a></h1><hr><h2 id="_1-项目介绍" tabindex="-1">1. 项目介绍 <a class="header-anchor" href="#_1-项目介绍" aria-label="Permalink to &quot;1. 项目介绍&quot;">​</a></h2><p>本项目是一个使用睿尔曼Python开发包演示坐标系的新建、删除、修改、查询。</p><h2 id="_2-代码结构" tabindex="-1">2. 代码结构 <a class="header-anchor" href="#_2-代码结构" aria-label="Permalink to &quot;2. 代码结构&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>RMDemo_CoordinateSystem/</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── README.md        &lt;- 项目的核心文档</span></span>
<span class="line"><span>├── requirements.txt    &lt;- 项目的依赖列表</span></span>
<span class="line"><span>├── setup.py        &lt;- 项目的安装脚本</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>├── src/          &lt;- 项目的源代码</span></span>
<span class="line"><span>│  ├── main.py       &lt;- 程序的主入口</span></span>
<span class="line"><span>│  └── core/        &lt;- 核心功能或业务逻辑代码</span></span>
<span class="line"><span>│    └── demo_coordinate_system.py      &lt;- 演示坐标系的新建、删除、修改、查询。</span></span>
<span class="line"><span>└── Robotic_Arm/      &lt;- 睿尔曼机械臂二次开发包</span></span></code></pre></div><h2 id="_3-环境与依赖" tabindex="-1">3.环境与依赖 <a class="header-anchor" href="#_3-环境与依赖" aria-label="Permalink to &quot;3.环境与依赖&quot;">​</a></h2><ul><li>Python 3.9+</li></ul><h2 id="_4-安装说明" tabindex="-1">4. 安装说明 <a class="header-anchor" href="#_4-安装说明" aria-label="Permalink to &quot;4. 安装说明&quot;">​</a></h2><ol><li><p>安装Python 3.9</p></li><li><p>进入项目目录：<code>cd RMDemo_CoordinateSystem</code></p></li><li><p>安装依赖：<code>pip install -r requirements.txt</code></p></li></ol><h2 id="_5-注意事项" tabindex="-1">5. 注意事项 <a class="header-anchor" href="#_5-注意事项" aria-label="Permalink to &quot;5. 注意事项&quot;">​</a></h2><p>该Demo以RM65-B型号机械臂为例，请根据实际情况修改代码中的数据。</p><h2 id="_6-使用指南" tabindex="-1">6. 使用指南 <a class="header-anchor" href="#_6-使用指南" aria-label="Permalink to &quot;6. 使用指南&quot;">​</a></h2><h3 id="_1-快速运行" tabindex="-1">1. 快速运行 <a class="header-anchor" href="#_1-快速运行" aria-label="Permalink to &quot;1. 快速运行&quot;">​</a></h3><p>按照以下步骤快速运行代码：</p><ol><li><p><strong>配置机械臂IP地址</strong>：打开 <code>demo_coordinate_system.py</code> 文件，在 <code>main</code> 函数中修改 <code>RobotArmController</code> 类的初始化参数为当前机械臂的IP地址，默认IP地址为 <code>&quot;192.168.1.18&quot;</code>。</p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RobotArmController(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192.168.1.18&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div></li><li><p><strong>命令行运行</strong>：在终端进入 <code>RMDemo_CoordinateSystem</code> 目录，输入以下命令运行Python脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./src/main.py</span></span></code></pre></div></li></ol><h3 id="_2-代码说明" tabindex="-1"><strong>2. 代码说明</strong> <a class="header-anchor" href="#_2-代码说明" aria-label="Permalink to &quot;**2. 代码说明**&quot;">​</a></h3><p>下面是 <code>demo_coordinate_system.py</code> 文件的主要功能：</p><ul><li><p><strong>连接机械臂</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> RobotArmController(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;192.168.1.18&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8080</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>连接到指定IP和端口的机械臂。</p></li><li><p><strong>获取API版本</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">API Version: &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, rm_api_version(), </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>获取并显示API版本。</p></li><li><p><strong>手动设置工作坐标系</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller.set_manual_work_frame(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>手动设置名为 <code>&quot;test&quot;</code> 的工作坐标系，位姿为 <code>[0, 0, 0, 0, 0, 0]</code>。</p></li><li><p><strong>更新工作坐标系</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller.update_work_frame(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.142</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span></code></pre></div><p>更新名为 <code>&quot;test&quot;</code> 的工作坐标系，位姿为 <code>[0.3, 0, 0.3, 3.142, 0, 0]</code>。</p></li><li><p><strong>查询指定工作坐标系</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller.get_given_work_frame(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>查询名为 <code>&quot;test&quot;</code> 的工作坐标系并显示结果。</p></li><li><p><strong>删除工作坐标系</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller.delete_work_frame(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>删除名为 <code>&quot;test&quot;</code> 的工作坐标系。</p></li><li><p><strong>断开机械臂连接</strong></p><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">robot_controller.disconnect()</span></span></code></pre></div><p>断开与机械臂的连接。</p></li></ul><h3 id="_3-运行结果示例" tabindex="-1">3. 运行结果示例 <a class="header-anchor" href="#_3-运行结果示例" aria-label="Permalink to &quot;3. 运行结果示例&quot;">​</a></h3><p>运行脚本后，输出结果如下所示：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>current api version:  0.2.9</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Successfully connected to the robot arm: 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>API Version:  0.2.9 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Manually set work frame succeeded</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Update work frame succeeded</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Get work frame succeeded:  [0.30000001192092896, 0.0, 0.30000001192092896, 3.1419999599456787, 0.0, 0.0] </span></span>
<span class="line"><span></span></span>
<span class="line"><span>Delete work frame succeeded</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Successfully disconnected from the robot arm</span></span></code></pre></div><ul><li><p><strong>支持渠道</strong>：</p><ul><li>开发者论坛/社区：<a href="https://bbs.realman-robotics.cn" target="_blank" rel="noreferrer">链接地址</a></li></ul></li></ul><h2 id="_7-许可证信息" tabindex="-1">7. 许可证信息** <a class="header-anchor" href="#_7-许可证信息" aria-label="Permalink to &quot;7. 许可证信息**&quot;">​</a></h2><ul><li>本项目遵循MIT许可证。</li></ul><h2 id="_8-常见问题解答-faq" tabindex="-1">8. 常见问题解答（FAQ）** <a class="header-anchor" href="#_8-常见问题解答-faq" aria-label="Permalink to &quot;8. 常见问题解答（FAQ）**&quot;">​</a></h2><ul><li><p><strong>Q1：机械臂连接失败</strong></p><p>答案：修改过机械臂IP</p></li></ul>`,27),p=[e];function l(o,h,r,d,k,c){return i(),a("div",null,p)}const u=s(t,[["render",l]]);export{E as __pageData,u as default};
