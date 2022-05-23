<template>
  <div class="container">
    <h3>首页</h3>
  </div>
</template>

<script>
export default {
  // middleware: "auth", //也可以指向auth
  middleware() {
    console.log("middleware pages");
  },

  //参数的有效性校验
  validate({ params, query }) {
    console.log("validate");
    return true;
  },
  //读数据 返回给组件
  asyncData() {
    //异步业务逻辑 读取服务端数据
    console.log("async Data");
    return {
      b: 2,
    };
  },
  //读数据 返回vuex
  fetch() {
    console.log("fetch");
  },
  data() {
    return {
      a: 1,
    };
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("before Mount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeDestroy() {
    console.log("beforeDestory");
  },
  destroyed() {
    console.log("destroyed");
  },
};
</script>

<style>
</style>
