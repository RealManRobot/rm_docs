import{_ as t,c as s,o as i,a3 as l}from"./chunks/framework.DpFyhY0e.js";const E=JSON.parse('{"title":"系统安装方式","description":"","frontmatter":{},"headers":[],"relativePath":"robot/api/c/classes/installPos.md","filePath":"robot/api/c/classes/installPos.md","lastUpdated":1721716916000}'),a={name:"robot/api/c/classes/installPos.md"},e=l(`<h1 id="系统安装方式" tabindex="-1">系统安装方式 <a class="header-anchor" href="#系统安装方式" aria-label="Permalink to &quot;系统安装方式&quot;">​</a></h1><p>睿尔曼机械臂可支持不同形式的安装方式，但是安装方式不同，机器人的动力学模型参数和坐标系的方向也有所差别。本接口用于设定和读取机械臂安装方式。</p><h2 id="设置安装方式参数rm-set-install-pose" tabindex="-1">设置安装方式参数<code>rm_set_install_pose()</code> <a class="header-anchor" href="#设置安装方式参数rm-set-install-pose" aria-label="Permalink to &quot;设置安装方式参数\`rm_set_install_pose()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_install_pose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">x</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">旋转角，单位 °。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">俯仰角，单位 °。</td></tr><tr><td style="text-align:left;">z</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">方位角，单位 °。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//设置安装角度旋转角30°，俯仰角60°,方位角90°</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 30</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> z </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 90</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_install_pose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle,x,y,z);</span></span></code></pre></div><h2 id="获取安装方式参数rm-get-install-pose" tabindex="-1">获取安装方式参数<code>rm_get_install_pose()</code> <a class="header-anchor" href="#获取安装方式参数rm-get-install-pose" aria-label="Permalink to &quot;获取安装方式参数\`rm_get_install_pose()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_get_install_pose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> z</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">x</td><td style="text-align:left;">输出参数</td><td style="text-align:left;">存放旋转角，单位 °。</td></tr><tr><td style="text-align:left;">y</td><td style="text-align:left;">输出参数</td><td style="text-align:left;">存放俯仰角，单位 °。</td></tr><tr><td style="text-align:left;">z</td><td style="text-align:left;">输出参数</td><td style="text-align:left;">存放方位角，单位 °。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//获取安装角度</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fx,fy,fz;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Get_Install_Pose</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(m_sockhand,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div>`,22),n=[e];function h(d,p,k,r,g,o){return i(),s("div",null,n)}const c=t(a,[["render",h]]);export{E as __pageData,c as default};
