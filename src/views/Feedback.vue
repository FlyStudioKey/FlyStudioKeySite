<script setup>
import Navbar from "@/components/Navbar.vue";
import BodyM from "@/components/BodyM.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div id="app">
    <Navbar />
  </div>
  <main>
    <br />
    <BodyM message='
    <h1>反馈问题</h1>
    <h2>程序BUG</h2>
    <p class="fs-4">&emsp;&emsp;如果您在使用途中遇到了BUG，您可以到本项目的
    <a href="https://github.com/weiwei-cool/QMCL" target="_blank">github</a>
    进行提交，我们会尽快解决您的问题！
    </p>
    <h2>其他问题</h2>
    <p class="fs-4">&emsp;&emsp;如果您在使用途中出现任何问题，您还可以请联系我们，我们将在第一时间给予您答复！
    <br />
    &emsp;&emsp;Emil:fsk@mail.flystudiokey.cn</p>
    <h2>注意事项</h2>
    <p class="fs-4">
    &emsp;&emsp;我们不是神！我们是无法通过您的只言片语来定位问题的！
    所以，报告问题时不要丢下一句「启动器出错了」、「无法启动游戏」就跑，
    在没有日志、报错截图等信息的辅助下，我们 <a style="font-weight: bold;">不可能</a> 知道网线对面的您遇到了什么。
    </p>' />
    <Footer is_foot_d="is_foot_d" />
  </main>
</template>
