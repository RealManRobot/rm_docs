import{_ as t,c as s,o as a,a3 as e}from"./chunks/framework.DpFyhY0e.js";const y=JSON.parse('{"title":"机械臂配置-运动参数查询集","description":"","frontmatter":{},"headers":[],"relativePath":"robot/json/motionParameterQuery.md","filePath":"robot/json/motionParameterQuery.md","lastUpdated":1722396443000}'),i={name:"robot/json/motionParameterQuery.md"},l=e('<h1 id="机械臂配置-运动参数查询集" tabindex="-1">机械臂配置-运动参数查询集 <a class="header-anchor" href="#机械臂配置-运动参数查询集" aria-label="Permalink to &quot;机械臂配置-运动参数查询集&quot;">​</a></h1><p>本命令集用于查询机械臂末端的最大线速度、线加速度、角速度、角加速度。</p><h2 id="查询机械臂末端最大线速度" tabindex="-1">查询机械臂末端最大线速度 <a class="header-anchor" href="#查询机械臂末端最大线速度" aria-label="Permalink to &quot;查询机械臂末端最大线速度&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>get_arm_max_line_speed</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">查询机械臂末端最大线速度。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：查询机械臂末端最大线速度。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_arm_max_line_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong> 反馈机械臂末端最大线速度，0.5m/s，分辨率：0.001m/s。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;arm_max_line_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;arm_line_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">500</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arm_max_line_speed</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">反馈机械臂末端最大线速度。</td></tr></tbody></table><h2 id="查询机械臂末端最大线加速度" tabindex="-1">查询机械臂末端最大线加速度 <a class="header-anchor" href="#查询机械臂末端最大线加速度" aria-label="Permalink to &quot;查询机械臂末端最大线加速度&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>get_arm_max_line_acc</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">查询机械臂末端最大线加速度。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：查询机械臂末端最大线加速度。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_arm_max_line_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong> 反馈机械臂末端最大线加速度，0.2m/s²，分辨率：0.001m/s²。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;arm_max_line_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;arm_line_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arm_max_line_acc</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">反馈机械臂末端最大线加速度。</td></tr></tbody></table><h2 id="查询机械臂末端最大角速度" tabindex="-1">查询机械臂末端最大角速度 <a class="header-anchor" href="#查询机械臂末端最大角速度" aria-label="Permalink to &quot;查询机械臂末端最大角速度&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>get_arm_max_angular_speed</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">查询机械臂末端最大角速度。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：查询机械臂末端最大角速度。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_arm_max_angular_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong> 反馈机械臂末端最大角速度，1rad/s，分辨率：0.001rad/s。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;arm_max_angular_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;arm_angular_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arm_max_angular_speed</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">反馈机械臂末端最大角速度。</td></tr></tbody></table><h2 id="查询机械臂末端最大角加速度" tabindex="-1">查询机械臂末端最大角加速度 <a class="header-anchor" href="#查询机械臂末端最大角加速度" aria-label="Permalink to &quot;查询机械臂末端最大角加速度&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>get_arm_max_angular_acc</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">查询机械臂末端最大角加速度。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：查询机械臂末端最大角加速度。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_arm_max_angular_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong> 实现：反馈机械臂末端最大角加速度，10rad/s²，分辨率：0.001rad/s²。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;arm_max_angular_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;arm_angular_acc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>arm_max_angular_acc</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">反馈机械臂末端最大角加速度。</td></tr></tbody></table>',37),n=[l];function h(d,o,p,r,g,k){return a(),s("div",null,n)}const E=t(i,[["render",h]]);export{y as __pageData,E as default};
