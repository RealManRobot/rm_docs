import{_ as t,c as s,o as e,a3 as i}from"./chunks/framework.DpFyhY0e.js";const c=JSON.parse('{"title":"通用扩展关节控制","description":"","frontmatter":{},"headers":[],"relativePath":"robot/api/c/classes/expandControl.md","filePath":"robot/api/c/classes/expandControl.md","lastUpdated":1721716916000}'),l={name:"robot/api/c/classes/expandControl.md"},a=i(`<h1 id="通用扩展关节控制" tabindex="-1">通用扩展关节控制 <a class="header-anchor" href="#通用扩展关节控制" aria-label="Permalink to &quot;通用扩展关节控制&quot;">​</a></h1><p>本接口用于扩展关节速度环控制、位置环控制及状态获取。</p><h2 id="扩展关节状态获取rm-get-expand-state" tabindex="-1">扩展关节状态获取<code>rm_get_expand_state()</code> <a class="header-anchor" href="#扩展关节状态获取rm-get-expand-state" aria-label="Permalink to &quot;扩展关节状态获取\`rm_get_expand_state()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_get_expand_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rm_expand_state_t</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> *</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>和<a href="./../struct/expandState.html">rm_expand_state_t</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">state</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">扩展关节状态结构体。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 查询扩展关节状态</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rm_expand_state_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> state;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_get_expand_state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="扩展关节速度环控制rm-set-expand-speed" tabindex="-1">扩展关节速度环控制<code>rm_set_expand_speed()</code> <a class="header-anchor" href="#扩展关节速度环控制rm-set-expand-speed" aria-label="Permalink to &quot;扩展关节速度环控制\`rm_set_expand_speed()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_expand_speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">speed</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">速度百分比，-100~100：<br>speed&lt;0：升降机构向下运动;<br>speed&gt;0：升降机构向上运动;<br>speed=0：升降机构停止运动;</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_expand_speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle,speed);</span></span></code></pre></div><h2 id="扩展关节位置环控制rm-set-expand-pos" tabindex="-1">扩展关节位置环控制<code>rm_set_expand_pos()</code> <a class="header-anchor" href="#扩展关节位置环控制rm-set-expand-pos" aria-label="Permalink to &quot;扩展关节位置环控制\`rm_set_expand_pos()\`&quot;">​</a></h2><ul><li><strong>方法原型：</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_expand_pos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(rm_robot_handle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> handle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> speed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> pos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;"> block</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><em>可以跳转<a href="./../struct/robotHandle.html">rm_robot_handle</a>查阅结构体详细描述</em></p><ul><li><strong>参数说明:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">handle</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">机械臂句柄。</td></tr><tr><td style="text-align:left;">speed</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">速度百分比，1~100。</td></tr><tr><td style="text-align:left;">pos</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">扩展关节角度，单位度。</td></tr><tr><td style="text-align:left;">block</td><td style="text-align:left;">输入参数</td><td style="text-align:left;">阻塞设置：<br>多线程模式：0，非阻塞模式，发送指令后立即返回；1，阻塞模式，等待机械臂到达目标位置或规划失败后返回。<br>单线程模式：0，非阻塞模式；其他值，阻塞模式并设置超时时间，根据运动时间设置，单位为秒。</td></tr></tbody></table><ul><li><strong>返回值:</strong></li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">成功。</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">控制器返回false，传递参数错误或机械臂状态发生错误。</td></tr><tr><td style="text-align:left;">-1</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据发送失败，通信过程中出现问题。</td></tr><tr><td style="text-align:left;">-2</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">数据接收失败，通信过程中出现问题或者控制器超时没有返回。</td></tr><tr><td style="text-align:left;">-3</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">返回值解析失败，接收到的数据格式不正确或不完整。</td></tr><tr><td style="text-align:left;">-4</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">当前到位设备校验失败，即当前到位设备不为升降机构。</td></tr><tr><td style="text-align:left;">-5</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">单线程模式超时未接收到返回，请确保超时时间设置合理。</td></tr></tbody></table><ul><li><strong>使用示例</strong></li></ul><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 默认线程模式为多线程，以20%的速度阻塞运行到200mm的位置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ret;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> block </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ret </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rm_set_expand_pos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(robot_handle,speed,target,block);</span></span></code></pre></div>`,32),n=[a];function d(h,p,r,k,g,o){return e(),s("div",null,n)}const x=t(l,[["render",d]]);export{c as __pageData,x as default};
