import{_ as t,c as s,o as i,a3 as a}from"./chunks/framework.DpFyhY0e.js";const y=JSON.parse('{"title":"在线编程存储列表（I系列）","description":"","frontmatter":{},"headers":[],"relativePath":"robot/json/onlineProgrammingStoresList.md","filePath":"robot/json/onlineProgrammingStoresList.md","lastUpdated":1722233217000}'),e={name:"robot/json/onlineProgrammingStoresList.md"},l=a(`<h1 id="在线编程存储列表-i系列" tabindex="-1">在线编程存储列表（I系列） <a class="header-anchor" href="#在线编程存储列表-i系列" aria-label="Permalink to &quot;在线编程存储列表（I系列）&quot;">​</a></h1><h2 id="查询在线编程程序列表" tabindex="-1">查询在线编程程序列表 <a class="header-anchor" href="#查询在线编程程序列表" aria-label="Permalink to &quot;查询在线编程程序列表&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">page_num</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">页码（全部查询时不传此参数）。</td></tr><tr><td style="text-align:left;">page_size</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">每页大小（全部查询时不传此参数）。</td></tr><tr><td style="text-align:left;">vague_search</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">模糊搜索 （传递此参数可进行模糊查询）。</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：获取刚拖动过的轨迹，在拖动示教后调用。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_program_trajectory_list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;page_num&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;page_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;vague_search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_program_trajectory_list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;page_num&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;page_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;total_size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;vague_search&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;list&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2580</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;trajectory_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1_file1.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2580</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;trajectory_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;2_file2.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}]}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>page_num</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">页序列号。</td></tr><tr><td style="text-align:left;"><code>page_size</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">每页大小。</td></tr><tr><td style="text-align:left;"><code>total_size</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">总大小。</td></tr><tr><td style="text-align:left;"><code>vague_search</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">模糊搜索 （传递此参数可进行模糊查询）。</td></tr><tr><td style="text-align:left;"><code>list</code></td><td style="text-align:left;"><code>list</code></td><td style="text-align:left;">轨迹列表信息。</td></tr></tbody></table><h2 id="查询在线编程运行状态" tabindex="-1">查询在线编程运行状态 <a class="header-anchor" href="#查询在线编程运行状态" aria-label="Permalink to &quot;查询在线编程运行状态&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">get_program_run_state</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">查询当前在线编程文件的运行状态</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：获取刚拖动过的轨迹，在拖动示教后调用。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_program_run_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_program_run_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;run_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;plan_num&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;loop_num&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;loop_cont&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;step_mode&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,0,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;plan_speed&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,50,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;edit_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>run_state</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">0 未开始 1 运行中 2 暂停中。</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">运行轨迹编号，已存储轨迹的id，没有存储则为0，未运行则不返回。</td></tr><tr><td style="text-align:left;"><code>plan_num</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">运行到的行数，未运行则不返回。</td></tr><tr><td style="text-align:left;"><code>loop_num</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">存在循环指令的行数，未运行则不返回。</td></tr><tr><td style="text-align:left;"><code>loop_cont</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">循环指令行数对应的运行次数，未运行则不返回。</td></tr><tr><td style="text-align:left;"><code>step_mode</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">单步模式，1 为单步模式，0 为非单步模式。</td></tr><tr><td style="text-align:left;"><code>plan_speed</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">全局规划速度比例 1-100。</td></tr><tr><td style="text-align:left;"><code>edit_id</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">上次编辑的在线编程编号 id。</td></tr></tbody></table><h2 id="开始运行指定编号轨迹" tabindex="-1">开始运行指定编号轨迹 <a class="header-anchor" href="#开始运行指定编号轨迹" aria-label="Permalink to &quot;开始运行指定编号轨迹&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">set_program_id_start</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">开始运行编号轨迹。</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">运行指定的 ID，1-100，存在轨迹可运行。</td></tr><tr><td style="text-align:left;">speed</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">1-100，需要运行轨迹的速度，可不提供速度比例，按照存储的速度运行。</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：开始运行轨迹2，速度50%。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_program_id_start&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">50</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong> 开始运行成功。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_program_id_run&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;start_state&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>start_state</code></td><td style="text-align:left;">bool</td><td style="text-align:left;"><code>true</code>:开始运行 <code>false</code>:运行失败。</td></tr></tbody></table><p>在线编程程序结束后，会主动上报结束的ID。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;program_run_finish&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;finish_id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>finish_id</code></td><td style="text-align:left;">int</td><td style="text-align:left;">运行到位的轨迹ID</td></tr></tbody></table><h2 id="删除指定编号的轨迹" tabindex="-1">删除指定编号的轨迹 <a class="header-anchor" href="#删除指定编号的轨迹" aria-label="Permalink to &quot;删除指定编号的轨迹&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">delete_program_trajectory</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">删除指定 ID 的轨迹</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">指定的 ID,删除的ID号</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：开始运行轨迹2，速度50%</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete_program_trajectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;delete_program_trajectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;delete_state&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>delete_state</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>true</code>:成功 <code>false</code>:失败</td></tr></tbody></table><h2 id="修改指定编号的轨迹信息" tabindex="-1">修改指定编号的轨迹信息 <a class="header-anchor" href="#修改指定编号的轨迹信息" aria-label="Permalink to &quot;修改指定编号的轨迹信息&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">update_program_trajectory</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">修改指定编号轨迹的信息</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">指定在线编程轨迹编号</td></tr><tr><td style="text-align:left;">plan_speed</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">更新后的规划速度比例 1-100 （可选配置）</td></tr><tr><td style="text-align:left;">project_name</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">更新后的文件名称（最大 10 个字节） （可选配置）</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：修改指定编号轨迹的信息</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update_program_trajectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;plan_speed&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">66</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;project_name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;file&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;update_program_trajectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;update_state&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>update_state</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>true</code>:成功 <code>false</code>:失败</td></tr></tbody></table><h2 id="设置-io-默认运行编号" tabindex="-1">设置 IO 默认运行编号 <a class="header-anchor" href="#设置-io-默认运行编号" aria-label="Permalink to &quot;设置 IO 默认运行编号&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">set_default_run_program</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">删除指定 ID 的轨迹</td></tr><tr><td style="text-align:left;">id</td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">指定的 ID,删除的ID号</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：设置 IO 默认运行的在线编程文件编号，支持 0-100，0 代表取消设置</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_default_run_program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;set_default_run_program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;set_state&quot;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">,true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>set_default_run_program</code></td><td style="text-align:left;"><code>bool</code></td><td style="text-align:left;"><code>true</code>:成功 <code>false</code>:失败</td></tr></tbody></table><h2 id="获取-io-默认运行编号" tabindex="-1">获取 IO 默认运行编号 <a class="header-anchor" href="#获取-io-默认运行编号" aria-label="Permalink to &quot;获取 IO 默认运行编号&quot;">​</a></h2><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">get_default_run_program</td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">获取 IO 默认运行的在线编程文件编号</td></tr></tbody></table><p><strong>使用示例：</strong></p><p>实现：获取 IO 默认运行编号</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_default_run_program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>返回示例：</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;get_default_run_program&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">&quot;id&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><strong>参数说明：</strong></p><table tabindex="0"><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">类型</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">IO 默认运行的在线编程文件编号</td></tr></tbody></table>`,74),n=[l];function h(d,p,k,o,r,g){return i(),s("div",null,n)}const c=t(e,[["render",h]]);export{y as __pageData,c as default};
