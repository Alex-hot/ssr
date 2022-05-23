<template>
  <div>
    <!-- 跳转 声明式跳转 router-link -->
    <app-header />
    <!-- 展示区 -->
    <nuxt />
  </div>
</template>
<script>
import AppHeader from "./app-header.vue";
export default {
  // middleware: "auth",   // 布局层级的中间件定义
  components: {
    AppHeader,
  },
  middleware({ store, route, redirect, params, query }) {
    //context服务端上下文 是一个对象集合
    // context 包含 store route redirect params query req res 等
    //全局守卫业务
    //store 状态树信息
    //route 一条目标路由信息
    //redirect 强制跳转
    //params query 校验参数信息
    // redirect("/login");
    // console.log("middleware layouts");
  },
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
