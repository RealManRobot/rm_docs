# 其他

睿尔曼提供多种下载内容，欢迎您根据实际情况进行选择。

## 用户手册

<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>快速使用手册</h2>
            <p>睿尔曼机器人快速使用手册V1.5  文件格式：PDF</p>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>Web示教器用户手册</h2>
            <p>睿尔曼机器人Web示教器用户手册V1.5  文件格式：PDF</p>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
</div>

## 3D 模型和尺寸图

<p>
介绍了每个产品的三维模型图，仿真模型，机械臂尺寸图等。三维模型图采用通用的 STEP 格式，支持 SolidWorks、UG、Cero、Pro-E、Rhino、3Dmax 等常用的 3D 设计软件使用。
</p>
<p>
仿真模型为 URDF 格式，可支持 Gazebo、Moveit!、Webots、Matlab 等进行机器人仿真开发使用。
</p>
<p>
机械臂尺寸提供了外形尺寸、底座安装尺寸、末端扩展尺寸说明等内容。
</p>

<div class="wrap">
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RM65系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RM75系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>RM63系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>ECO65系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>ECO62系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
        </div>
    </div>
    <div class="d-flex">
        <div class="wrap-item1">
            <h2>GEN72系列</h2>
        </div>
        <div class="wrap-item2">
            <button class="btnStyle" @click="handleDownload(0)">下载</button>
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
     width:70%;
}
.wrap-item2{
    width:30%;
    display:flex;
    justify-content: end;
    align-items: center;
}
.wrap h2{
    font-size:24px;
    line-height:32px;
    letter-spacing: -0.02em;
    height:32px;
    margin:0;
    border-top:none;
    padding-top:0;
}
.wrap p{
    color:var(--vp-c-text-2);
}
.btnStyle{
    width: 100px;
    height: 40px;
    background: var(--vp-c-brand-1);
    color:var(--vp-c-white);
    border-radius: 4px;
    /* position:absolute;
    right:16px;
    top:50%;
    transform: translateY(-50%); */
}
</style>
