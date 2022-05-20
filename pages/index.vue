<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">my-nuxt</h1>
      <h2 class="subtitle">My ace Nuxt.js project</h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo,
  },
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
