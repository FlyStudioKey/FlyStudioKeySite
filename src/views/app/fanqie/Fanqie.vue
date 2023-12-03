<script setup>

import Navbar from "@/components/Navbar.vue";
import BodyM from "@/components/BodyM.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <main>
    <br />
    <BodyM message='<h2>FanQieNovelDownloadOnWeb 番茄小说下载器</h2>
                    <h2>介绍</h2>
                    <p class="fs-4">
                    &emsp;&emsp;番茄小说下载器 是一个基于 python 和 Vue 的开源项目，
                    旨在提供一个简单而功能强大的小说下载器。
                    </p>
                    <h2>使用</h2>
                    <p class="fs-4">
                    &emsp;&emsp;目前，您可以在
                    <a href="https://github.com/weiwei-cool/FanQieNovelDownloadOnWeb" target="_blank">github</a>
                    上下载源码，您使用、编译、修改等行为，即代表您同意
                    <a href="/app/fanqie/eula" target="_blank">最终用户许可协议(EULA)</a>
                    </p>
                    <h2>开源</h2>
                    <p class="fs-4">
                    &emsp;&emsp;番茄小说下载器基于GPLv3.0许可证在
                    <a href="https://github.com/weiwei-cool/FanQieNovelDownloadOnWeb" target="_blank">github</a>
                    上开源，
                    此项目使用来自
                    <a href="https://github.com/xing-yv" target="_blank">@xing-yv</a>
                    的
                    <a href="https://github.com/xing-yv/fanqie-novel-download" target="_blank">fanqie-novel-download</a>
                    的源代码。
                    </p>
                    <p class="fs-4">
                    &emsp;&emsp;依据 GPLv3.0 第5条c) ，本项目使用 GPLv3.0 协议开源。
                    您可以在
                    <a href="https://www.gnu.org/licenses/gpl-3.0.html" target="_blank">此处</a>
                    找到许可证的副本。
                    </p>
                    <h2>开发与部署</h2>
                    <p class="fs-4">
                    &emsp;&emsp;您可以在
                    <a href="https://fanqie-wiki.flystudiokey.cn/">https://fanqie-wiki.flystudiokey.cn/</a>
                    查看相关的文档，这将帮助您。
                    </p>
                    <h2>鸣谢</h2>
                    <p class="fs-4">
                    &emsp;&emsp;感谢源项目的作者
                    <a href="https://github.com/xing-yv" target="_blank">@xing-yv</a>
                    对本项目开发的指导与支持！
                    </p>
                    ' />
    <Footer />
  </main>
</template>

<style scoped>

</style>