# 安装Nvidia显卡环境V1.0

文档详细介绍了如何在ubuntu20上安装Nvidia显卡驱动，目的是通过Nvidia的cuda加速整个AI的推理过程。

**目标用户**  

人工智能开发者

## 详细教程

### 基础环境准备

| 项目     | 版本        |
| :------- | ----------- |
| 操作系统 | ubuntu20.04 |
| 架构     | x86         |

#### 安装conda

（1）查看本机显卡信息

```bash
lspci | grep -i vga
```

查看到Nvidia字样，则安装了Nvidia加速卡，否则将无法安装cuda环境。

![alt text](nvidia_image.png)

（2）查看本机适合的显卡驱动

```bash
sudo ubuntu-drivers devices
```

出现所有的推荐的可以安装的驱动版本。

（3）在列表中选择对应驱动并安装。

这里推荐使用高版本的显卡驱动，如535，显卡驱动具有向低版本兼容的能力。

```bash
apt-get install nvidia-driver-535 -y
```

（4）等待安装完成，重启电脑使驱动生效

```bash
reboot
```

（5）验证显卡驱动是否安装完成

```bash
nvidia-smi
```

出现如图详细信息展示则安装完成，可以使用GPU了。

![alt text](nvidia_smi.png)
