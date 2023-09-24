<!-- Navbar.vue -->
<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#" style="font-weight: bold;">FlyStudioKey</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto" style="margin-left: 80%;">
            <li class="nav-item">
              <router-link to="/" class="nav-link">首页</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">关于</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/feedback" class="nav-link" href="#">反馈</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* styles.css */
.navbar {
  background-color: #0047ab; /* 深蓝色背景 */
}

.navbar-brand {
  color: white; /* 白色标题 */
}

.navbar-nav .nav-link {
  color: white !important; /* 白色文本 */
  text-decoration: none !important; /* 取消下划线 */
}
</style>
