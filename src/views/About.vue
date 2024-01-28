<script setup>
import Navbar from "@/components/Navbar.vue";
import BodyM from "@/components/BodyM.vue";
import Footer from "@/components/Footer.vue";
import MobileDetect from 'mobile-detect';
const md = new MobileDetect(navigator.userAgent);
</script>

<template>
  <div id="app">
    <Navbar />
  </div>
  <main>
    <br />
    <BodyM>
      <h1>关于我们</h1>
      <h2>介绍</h2>
      <p class="fs-4">
        &emsp;&emsp;FlyStudioKey飞屋软件技术，成立于2022年1月18日，我们在这孕育创新，绽放梦想！
        我们匠心制作每一款产品，用技术打磨出无限可能。 在游戏世界的奇妙领域中，我们用精湛的软件技术为你打造无限畅想的奇迹。
        一起，飞向未知的高度！
      </p>
      <h2>成员(排名不分先后)</h2>
      <p class="fs-4">
        &emsp;&emsp;Xiao_XiangGua
        <br />
        &emsp;&emsp;WeiWeiCool
      </p>
    </BodyM>
    <BodyM>
      <p class="fs-4">感谢netlify提供网络服务 <a href="https://www.netlify.com/" target="_blank">
        <img src="https://api.netlify.com/api/v1/badges/248bb307-1979-4da6-a76d-dda24140e750/deploy-status" alt="netlify">
      </a></p>
    </BodyM>
    <Footer is_foot_d="is_foot_d" />
  </main>
</template>
