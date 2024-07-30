import{_ as a,c as t,o as s,a3 as e}from"./chunks/framework.DpFyhY0e.js";const u=JSON.parse('{"title":"机械臂当前状态rm_current_arm_state_t","description":"","frontmatter":{},"headers":[],"relativePath":"robot/api/c/struct/currentState.md","filePath":"robot/api/c/struct/currentState.md","lastUpdated":1721702454000}'),i={name:"robot/api/c/struct/currentState.md"},r=e('<h1 id="机械臂当前状态rm-current-arm-state-t" tabindex="-1">机械臂当前状态<code>rm_current_arm_state_t</code> <a class="header-anchor" href="#机械臂当前状态rm-current-arm-state-t" aria-label="Permalink to &quot;机械臂当前状态`rm_current_arm_state_t`&quot;">​</a></h1><h2 id="类成员变量说明" tabindex="-1">类成员变量说明 <a class="header-anchor" href="#类成员变量说明" aria-label="Permalink to &quot;类成员变量说明&quot;">​</a></h2><ul><li><h3 id="机械臂当前位姿pose" tabindex="-1">机械臂当前位姿<code>pose</code> <a class="header-anchor" href="#机械臂当前位姿pose" aria-label="Permalink to &quot;机械臂当前位姿`pose`&quot;">​</a></h3><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">rm_pose_t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rm_current_arm_state_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::pose</span></span></code></pre></div></li><li><h3 id="机械臂当前关节角度joint" tabindex="-1">机械臂当前关节角度<code>joint</code> <a class="header-anchor" href="#机械臂当前关节角度joint" aria-label="Permalink to &quot;机械臂当前关节角度`joint`&quot;">​</a></h3><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rm_current_arm_state_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">joint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[ARM_DOF]</span></span></code></pre></div></li><li><h3 id="机械臂错误代码arm-err" tabindex="-1">机械臂错误代码<code>arm_err</code> <a class="header-anchor" href="#机械臂错误代码arm-err" aria-label="Permalink to &quot;机械臂错误代码`arm_err`&quot;">​</a></h3><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rm_current_arm_state_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::arm_err</span></span></code></pre></div></li><li><h3 id="控制器错误代码sys-err" tabindex="-1">控制器错误代码<code>sys_err</code> <a class="header-anchor" href="#控制器错误代码sys-err" aria-label="Permalink to &quot;控制器错误代码`sys_err`&quot;">​</a></h3><div class="language-C vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">C</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">uint8_t</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rm_current_arm_state_t</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">::sys_err</span></span></code></pre></div></li></ul>',3),n=[r];function l(h,o,c,d,p,_){return s(),t("div",null,n)}const m=a(i,[["render",l]]);export{u as __pageData,m as default};
