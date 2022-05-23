<template>
  <div>
    <h3>用户中心</h3>
  </div>
</template>
<script>
export default {
  middleware({ store, route, redirect, params, query }) {
    //context服务端上下文 是一个对象集合
    // context 包含 store route redirect params query req res 等
    //组件独享守卫
    //store 状态树信息
    //route 一条目标路由信息
    //redirect 强制跳转
    //params query 校验参数信息
    redirect("/login");
    // console.log("middleware layouts");
  },
};
</script>