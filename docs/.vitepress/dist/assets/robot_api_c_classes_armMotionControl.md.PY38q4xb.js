import{_ as t,c as s,o as i,a3 as a}from"./chunks/framework.DpFyhY0e.js";const E=JSON.parse('{"title":"机械臂运动控制指令类","description":"","frontmatter":{},"headers":[],"relativePath":"robot/api/c/classes/armMotionControl.md","filePath":"robot/api/c/classes/armMotionControl.md","lastUpdated":1721716916000}'),e={name:"robot/api/c/classes/armMotionControl.md"},l=a(`<h1 id="机械臂运动控制指令类" tabindex="-1">机械臂运动控制指令类 <a class="header-anchor" href="#机械臂运动控制指令类" aria-label="Permalink to &quot;机械臂运动控制指令类&quot;">​</a></h1><p>控制运动的急停、缓停、暂停、继续、清除轨迹以及查询当前规划类型。</p><h2 id="轨迹缓停rm-set-arm-slow-stop" tabindex="-1">轨迹缓停<code>rm_set_arm_slow_stop()</code> <a class="header-anchor" href="#轨迹缓停rm-set-arm-slow-stop" aria-label="Permalink to &quot;轨迹缓停\`rm_set_arm_slow_stop()\`&quot;">​</a></h2><blockquote><p>在当前正在运行的轨迹上停止。</p></blockquote><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_arm_slow_stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置机器人缓慢停止  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_arm_slow_stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Arm set to slow stop successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to set arm to slow stop.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="轨迹急停rm-set-arm-stop" tabindex="-1">轨迹急停<code>rm_set_arm_stop()</code> <a class="header-anchor" href="#轨迹急停rm-set-arm-stop" aria-label="Permalink to &quot;轨迹急停\`rm_set_arm_stop()\`&quot;">​</a></h2><blockquote><p>关节最快速度停止，轨迹不可恢复。</p></blockquote><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_arm_stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置机器人急停  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_arm_stop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Arm set to stop successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to set arm to stop.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="轨迹暂停rm-set-arm-pause" tabindex="-1">轨迹暂停<code>rm_set_arm_pause()</code> <a class="header-anchor" href="#轨迹暂停rm-set-arm-pause" aria-label="Permalink to &quot;轨迹暂停\`rm_set_arm_pause()\`&quot;">​</a></h2><blockquote><p>暂停在规划轨迹上，轨迹可恢复。</p></blockquote><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_arm_pause</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置机器人暂停  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_arm_pause</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Arm set to pause successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to set arm to pause.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="暂停后继续轨迹运动rm-set-arm-continue" tabindex="-1">暂停后继续轨迹运动<code>rm_set_arm_continue()</code> <a class="header-anchor" href="#暂停后继续轨迹运动rm-set-arm-continue" aria-label="Permalink to &quot;暂停后继续轨迹运动\`rm_set_arm_continue()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_arm_continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 设置机器人暂停后继续  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_arm_continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Arm set to continue successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to set arm to continue.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="清除当前轨迹rm-set-delete-current-trajectory" tabindex="-1">清除当前轨迹<code>rm_set_delete_current_trajectory()</code> <a class="header-anchor" href="#清除当前轨迹rm-set-delete-current-trajectory" aria-label="Permalink to &quot;清除当前轨迹\`rm_set_delete_current_trajectory()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_delete_current_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><blockquote><p>注意：必须在暂停后使用，否则机械臂会发生意外！！！！</p></blockquote><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 删除当前轨迹  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_delete_current_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Current trajectory deleted successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to delete Current trajectory.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="清除所有轨迹rm-set-arm-delete-trajectory" tabindex="-1">清除所有轨迹<code>rm_set_arm_delete_trajectory()</code> <a class="header-anchor" href="#清除所有轨迹rm-set-arm-delete-trajectory" aria-label="Permalink to &quot;清除所有轨迹\`rm_set_arm_delete_trajectory()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_arm_delete_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><blockquote><p>注意：必须在暂停后使用，否则机械臂会发生意外！！！！</p></blockquote><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 清除所有轨迹  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_set_arm_delete_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Trajectory deleted successfully.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Failed to delete Trajectory.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="获取当前正在规划的轨迹信息rm-get-arm-current-trajectory" tabindex="-1">获取当前正在规划的轨迹信息<code>rm_get_arm_current_trajectory()</code> <a class="header-anchor" href="#获取当前正在规划的轨迹信息rm-get-arm-current-trajectory" aria-label="Permalink to &quot;获取当前正在规划的轨迹信息\`rm_get_arm_current_trajectory()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_get_arm_current_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,rm_arm_current_trajectory_e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em><em>可以跳转<a href="./../type/typeList.html#rm-arm-current-trajectory-e机械臂当前规划类型">rm_arm_current_trajectory_e</a>查阅枚举类型详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">返回的规划类型。</td></tr><tr><td style="text-align:left;">data</td><td style="text-align:left;">输出参数</td><td style="text-align:left;">存放无规划和关节空间规划为当前关节1~7角度数组；笛卡尔空间规划则为当前末端位姿。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 获取当前机械臂轨迹的信息</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rm_arm_current_trajectory_e trajectory_type;  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> trajectory_data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]; </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm_get_arm_current_trajectory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">trajectory_type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, trajectory_data) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {  </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Current arm trajectory type: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">%d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, trajectory_type);    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,77),n=[l];function h(d,r,p,k,g,o){return i(),s("div",null,n)}const c=t(e,[["render",h]]);export{E as __pageData,c as default};
