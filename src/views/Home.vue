<script setup>
import Navbar from "@/components/Navbar.vue";
import Body_LIRT from "@/components/Body_LIRT.vue";
import BodyM from "@/components/BodyM.vue";
import Footer from "@/components/Footer.vue";
document.title = "Homepage";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>

  <main>
    <br />
    <BodyM message='<h1>FlyStudioKey | 飞屋软件技术</h1>
                    <br />
                    <p class="fs-4">&emsp;&emsp;FlyStudioKey飞屋软件技术，孕育创新，绽放梦想！
                    我们匠心制作每一款产品，用技术打磨出无限可能。
                    在游戏世界的奇妙领域中，我们用精湛的软件技术为你打造无限畅想的奇迹。
                    一起，飞向未知的高度！</p>' />
    <br />
    <Body_LIRT message="<br /><h4>Quickly Minecraft Launcher(qmcl)启动器</h4>
                        <p>新一代跨平台启动器，项目大重构！</p>"
               img_url="res/icon.png"
               to-url="/app/qmcl"/>
    <Footer is-foot-d="is-foot-d" />
  </main>
</template>
