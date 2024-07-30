import{_ as t,c as s,o as i,a3 as e}from"./chunks/framework.DpFyhY0e.js";const E=JSON.parse('{"title":"自碰撞安全检测（I系列）","description":"","frontmatter":{},"headers":[],"relativePath":"robot/json/selfCollision.md","filePath":"robot/json/selfCollision.md","lastUpdated":1722233217000}'),a={name:"robot/json/selfCollision.md"},l=e('<h1 id="自碰撞安全检测-i系列" tabindex="-1">自碰撞安全检测（I系列） <a class="header-anchor" href="#自碰撞安全检测-i系列" aria-label="Permalink to &quot;自碰撞安全检测（I系列）&quot;">​</a></h1><p>I系列机械臂支持自碰撞安全检测，自碰撞安全检测使能状态下，可确保在轨迹规划、示教等运动过程中机械臂的各个部分不会相互碰撞，需要注意的是，以上自碰撞安全检测功能目前只在仿真模式下生效，用于进行预演轨迹与轨迹优化。</p><div style="height:2px;background-image:linear-gradient(to right, #ccc, #ccc);margin:1em 0;"></div><h2 id="设置自碰撞安全检测使能状态" tabindex="-1">设置自碰撞安全检测使能状态 <a class="header-anchor" href="#设置自碰撞安全检测使能状态" aria-label="Permalink to &quot;设置自碰撞安全检测使能状态&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">set_self_collision_enable</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">设置自碰撞安全检测使能状态。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：设置当前虚拟墙参数。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_self_collision_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;set_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例 ：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_self_collision_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;set_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">set_state</td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;">true 成功 false 失败。</td></tr></tbody></table><h2 id="获取自碰撞安全检测使能状态" tabindex="-1">获取自碰撞安全检测使能状态 <a class="header-anchor" href="#获取自碰撞安全检测使能状态" aria-label="Permalink to &quot;获取自碰撞安全检测使能状态&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">get_self_collision_enable</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">获取自碰撞安全检测使能状态。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：设置当前虚拟墙参数。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_self_collision_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例 ：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_self_collision_enable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;enable_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">enable_state</td><td style="text-align:left;">bool</td><td style="text-align:left;"><code>true</code> 使能 false 禁使能。</td></tr></tbody></table>',21),n=[l];function h(o,d,p,r,k,g){return i(),s("div",null,n)}const y=t(a,[["render",h]]);export{E as __pageData,y as default};
