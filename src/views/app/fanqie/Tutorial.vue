<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import BodyM from "@/components/BodyM.vue";
import Paragraph from "@/components/Paragraph.vue";
import Pic from "@/components/Pic.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
  <main>
    <br />
    <BodyM>
      <h1>使用教程</h1>
      <br />
      <h2>1.如何选择下载方式</h2>
      <br />
      <Paragraph :indent="false">
        根据您的需要，您可以选择适合您的下载方式。
      </Paragraph>
      <Paragraph>
        txt模式： 纯文本模式，该模式只会保留小说的文本信息，没有任何排版目录等；该类型的文件可以在绝大多数设备上被打开，如 MP3/4，手表/手环 等。因此，当您不知道要选择什么模式时，请选用此模式。
      </Paragraph>
      <Paragraph>
        epub模式：一种主流的电子图书标准格式，可以保留小说的作者、封面、简介，甚至目录等信息；当您的目的是使用阅读软件在电脑或手机上阅读时，可尝试此模式，大部分阅读软件支持此模式。如果您是kindle用户，请选择此模式并最好使用邮件推送（可保留封面）。
      </Paragraph>
      <h2>2.如何获取下载需要填写的URL</h2>
      <br />
      <Paragraph :indent="false">
        <h2>2.1.对于电脑端的用户</h2>
      </Paragraph>
      <Pic src="/res/tutorial1.png" />
      <br />
      <br />
      <Paragraph>如图所示，被圈起的URL就是您需要的url，接下来，您就可以回到下载器开始下载了！</Paragraph>
      <Paragraph>
        但对于电脑端，我们更推荐您使用另外一款软件，也就是该项目的源项目——
        <a href="https://github.com/shing-yu/fanqie-novel-download" target="_blank">fanqie-novel-download</a>。
        它将更好的帮助您下载小说。（若您在国内无法访问该链接，您可以尝试访问国内的镜像
        <a href="https://gitee.com/xingyv1024/fanqie-novel-download" target="_blank">gitee</a>）
      </Paragraph>
      <Paragraph :indent="false">
        <h2>2.2.对于手机端的用户</h2>
      </Paragraph>
      <Paragraph>2.2.1.如图，您需要先打开app中您要下载的小说的详情页面，然后点击右上角的三个点。</Paragraph>
      <Pic src="/res/tutorial2.png" />
      <br />
      <br />
      <Paragraph>2.2.2.如图，在出现的分享栏中点击系统分享。</Paragraph>
      <Pic src="/res/tutorial3.png" />
      <br />
      <br />
      <Paragraph>2.2.3.如图，在出现的窗口中点击复制，您就获得了链接。</Paragraph>
      <Pic src="/res/tutorial4.png" />
      <br />
      <br />
      <Paragraph>但值得注意的是，您复制的内容的开头有该书的书名，您需要去除它后再将最后的链接填入URL中。</Paragraph>
      <h2>3.下载</h2>
      <br />
      <Paragraph>
        接下来，您就可以点击下载按钮下载了！您可以在之后点击历史记录去获取您的小说了！但值得注意的是，您在app中的小说和最终下载的小说的书名可能是不同的，但请不用担心，它们确实是同一本小说。
      </Paragraph>
    </BodyM>
    <Footer />
  </main>
</template>

<style scoped>

</style>