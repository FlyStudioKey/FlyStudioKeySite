<script setup>
import Navbar from "@/components/Navbar.vue";
import BodyM from "@/components/BodyM.vue";
import Footer from "@/components/Footer.vue";
document.title = "QMCL启动器";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <main>
    <br />
    <BodyM message='<h1>Quickly Minecraft Launcher QMCL启动器</h1>
                    <h2>介绍</h2>
                    <p class="fs-4">&emsp;&emsp;QMCL 是一个基于 Tauri 和 Vue 的开源项目，
                    使用Rust语言，
                    旨在提供一个简单而功能强大的 Minecraft 启动器。
                    目前，该项目的内核直接使用了
                    <a href="https://github.com/MrShieh-X/console-minecraft-launcher">console-minecraft-launcher</a>
                    项目的发行版本(套壳软件)，可以理解为这是CMCL启动器的UI，在后期可能会变为自研内核，但在此之前，我们仍然由衷地感谢CMCL开发者MrShieh-X。</p>
                    <h2>下载</h2>
                    <p class="fs-4">
                    &emsp;&emsp;鉴于目前国内网络环境堪忧(莫名其妙就被ddos)，加之FlyStudioKey开发者均为学生，无力承当高额的防护费用，
                    因此，QMCL启动器Windows版本可在本项目的
                    <a href="https://github.com/weiwei-cool/QMCL" target="_blank">github</a>
                    上下载，其它版本，如:Linux、MacOS，请自行编译源码。
                    您下载、编译、使用本软件，即代表您同意
                    <a href="/app/eula" target="_blank">最终用户许可协议(EULA)</a>
                    </p>
                    <h2>开源</h2>
                    <p class="fs-4">&emsp;&emsp;QMCL启动器基于MIT协议在
                    <a href="https://github.com/weiwei-cool/QMCL" target="_blank">github</a>上开源，但值得注意的是，
                    你可以以MIT协议使用QMCL的源代码，但这不包括CMCL，使用CMCL的源代码时必须遵守CMCL的开源协议和相关的附加条款。</p>
                    <h2>免责申明</h2>
                    <p class="fs-4">
                    &emsp;&emsp;1.Minecraft 版权归 Mojang Studios 与 Microsoft 所有，
                    使用QMCL产生的所有版权问题，软件制作方概不负责，请支持正版。
                    <br />
                    &emsp;&emsp;2.CMCL 版权归 MrShiehX 所有，
                    使用QMCL产生的所有版权问题，软件制作方概不负责。
                    <br />
                    &emsp;&emsp;3.用户因使用QMCL而产生的一切后果由用户自己承担，
                    任何涉及QMCL的法律纠纷与冲突与开发者无关，
                    QMCL与开发者将不承担任何责任。
                    </p>' />
    <br />
    <Footer />
  </main>
</template>

<style scoped>

</style>