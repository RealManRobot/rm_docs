# <p class="hidden">相关下载：</p>模型

睿尔曼提供多种下载内容，欢迎您根据实际情况进行选择。

## 3D 模型和尺寸图

<p>
介绍了每个产品的三维模型图，仿真模型，机械臂尺寸图等。三维模型图采用通用的 STEP 格式，支持 SolidWorks、UG、Cero、Pro-E、Rhino、3Dmax 等常用的 3D 设计软件使用。
</p>
<p>
仿真模型为 URDF 格式，可支持 Gazebo、Moveit!、Webots、Matlab 等进行机器人仿真开发使用。
</p>

<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RM65系列</h2>
            <p>下载地址： <a href="https://github.com/RealManRobot/rm_models/tree/main/RM65" target="_blank">RM65系列（github）</a></p>
        </div>
        <div class="wrap-item2">
            <!-- <p>版本号：V2.1.0</p> -->
        </div>
    </div>
</div>
<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RM75系列</h2>
            <p>下载地址： <a href="https://github.com/RealManRobot/rm_models/tree/main/RM75" target="_blank">RM75系列（github）</a></p>
        </div>
        <div class="wrap-item2">
            <!-- <p>版本号：V2.1.0</p> -->
        </div>
    </div>
</div>
<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RML63系列</h2>
            <p>下载地址： <a href="https://github.com/RealManRobot/rm_models/tree/main/RML63" target="_blank">RML63系列（github）</a></p>
        </div>
        <div class="wrap-item2">
            <!-- <p>版本号：V2.1.0</p> -->
        </div>
    </div>
</div>
<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>ECO65系列</h2>
            <p>下载地址： <a href="https://github.com/RealManRobot/rm_models/tree/main/ECO65" target="_blank">ECO65系列（github）</a></p>
        </div>
        <div class="wrap-item2">
            <!-- <p>版本号：V2.1.0</p> -->
        </div>
    </div>
</div>

<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>GEN72系列</h2>
            <p>下载地址： <a href="https://github.com/RealManRobot/rm_models/tree/main/GEN72" target="_blank">GEN72系列（github）</a></p>
        </div>
        <div class="wrap-item2">
            <!-- <p>版本号：V2.1.0</p> -->
        </div>
    </div>
</div>

<script setup>
    const handleDownload=()=>{
        window.open('https://www.baidu.com/', '_blank')
    }
</script>

<style>
.wrap{
    position:relative;
    width:100%;
    border-radius: 8px;
    background-color:var(--vp-c-bg);
    margin:16px 0;
    padding:16px 16px 8px;
    font-size: var(--vp-custom-block-font-size);
}
.d-flex{
    display:flex;
    margin-bottom:16px;
}
.wrap-item1{
     width:80%;
}
.wrap-item2{
    width:20%;
    display:flex;
    justify-content: end;
    align-items: center;
}
.wrap-item1 h2{
    font-size:24px !important;
    line-height:32px !important;
    letter-spacing: -0.02em !important;
    height:32px !important;
    margin:0 0 16px 0 !important;
    border-top:none !important;
    padding-top:0 !important;
}
.wrap-item1 p{
    color:var(--vp-c-text-2) !important;
    margin:0 0 8px 0 !important;
}
.wrap-item1 p:nth-of-type(2){
    color:var(--vp-c-text-1) !important;
    margin: 0 !important;
}
.wrap-item2 p{
    width:100%;
    text-align:center;
    color:var(--vp-c-text-2) !important;
}
</style>
