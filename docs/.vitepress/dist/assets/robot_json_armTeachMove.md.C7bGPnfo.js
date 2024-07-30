import{_ as t,c as s,o as e,a3 as i}from"./chunks/framework.DpFyhY0e.js";const E=JSON.parse('{"title":"运动配置-示教指令类","description":"","frontmatter":{},"headers":[],"relativePath":"robot/json/armTeachMove.md","filePath":"robot/json/armTeachMove.md","lastUpdated":1722233217000}'),a={name:"robot/json/armTeachMove.md"},l=i('<h1 id="运动配置-示教指令类" tabindex="-1">运动配置-示教指令类 <a class="header-anchor" href="#运动配置-示教指令类" aria-label="Permalink to &quot;运动配置-示教指令类&quot;">​</a></h1><h2 id="关节示教" tabindex="-1">关节示教 <a class="header-anchor" href="#关节示教" aria-label="Permalink to &quot;关节示教&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_delete_current_trajectory</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">关节示教指令。</td></tr><tr><td style="text-align:left;"><code>teach_joint</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">关节序号。</td></tr><tr><td style="text-align:left;"><code>direction</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">方向，“pos”：正方向，“neg”：反方向。</td></tr><tr><td style="text-align:left;"><code>v</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">速度系数</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：关节1示教，正方向，速度50%。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_joint_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;teach_joint&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pos&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;v&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_joint_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;joint_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>joint_teach</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>ture</code>：设置成功；<code>false</code>：设置失败。</td></tr></tbody></table><h2 id="位置示教" tabindex="-1">位置示教 <a class="header-anchor" href="#位置示教" aria-label="Permalink to &quot;位置示教&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_pos_teach</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">位置示教指令。</td></tr><tr><td style="text-align:left;"><code>teach_type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">坐标轴，“x”，“y”，“z”。</td></tr><tr><td style="text-align:left;"><code>direction</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">方向，“pos”：正方向，“neg”：反方向。</td></tr><tr><td style="text-align:left;"><code>v</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">速度系数</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：位置示教，x轴负方向，速度50%。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_pos_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;teach_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;x&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;v&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_pos_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;pos_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>pos_teach</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>ture</code>：设置成功；<code>false</code>：设置失败。</td></tr></tbody></table><h2 id="姿态示教" tabindex="-1">姿态示教 <a class="header-anchor" href="#姿态示教" aria-label="Permalink to &quot;姿态示教&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_ort_teach</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">姿态示教指令。</td></tr><tr><td style="text-align:left;"><code>teach_type</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">旋转所绕坐标轴，”rx”，“ry”，“rz”。</td></tr><tr><td style="text-align:left;"><code>direction</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">方向，“pos”：正方向，“neg”：反方向。</td></tr><tr><td style="text-align:left;"><code>v</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">速度系数</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：姿态示教，rx轴负方向，速度50%。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_ort_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;teach_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;rx&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;direction&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;neg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;v&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_ort_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;ort_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ort_teach</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>ture</code>：设置成功；<code>false</code>：设置失败。</td></tr></tbody></table><h2 id="示教停止" tabindex="-1">示教停止 <a class="header-anchor" href="#示教停止" aria-label="Permalink to &quot;示教停止&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_stop_teach</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">示教停止指令。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：示教停止。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_stop_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_stop_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;stop_teach&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>stop_teach</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>ture</code>：设置成功；<code>false</code>：设置失败。</td></tr></tbody></table><h2 id="设置示教参考坐标系" tabindex="-1">设置示教参考坐标系 <a class="header-anchor" href="#设置示教参考坐标系" aria-label="Permalink to &quot;设置示教参考坐标系&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_teach_frame</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">设置示教参考坐标系指令。</td></tr><tr><td style="text-align:left;"><code>frame_type</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0代表工作坐标系，1代表工具坐标系。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：设置示教参考坐标系为工作坐标系。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_teach_frame&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;frame_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_teach_frame&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;set_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_state</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>ture</code>：设置成功；<code>false</code>：设置失败。</td></tr></tbody></table><h2 id="获取示教参考坐标系" tabindex="-1">获取示教参考坐标系 <a class="header-anchor" href="#获取示教参考坐标系" aria-label="Permalink to &quot;获取示教参考坐标系&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>get_teach_frame</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">获取示教参考坐标系指令。</td></tr></tbody></table><p><strong>使用示例：</strong> 实现：获取示教参考坐标系。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_teach_frame&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_teach_frame&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;frame_type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>frame_type</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">0代表工作坐标系，1代表工具坐标系。</td></tr></tbody></table>',55),n=[l];function h(d,o,p,k,r,g){return e(),s("div",null,n)}const y=t(a,[["render",h]]);export{E as __pageData,y as default};
