<template>
  <div>
    <h4>商品详情页</h4>
  </div>
</template>
<script>
export default {
  name: "goods-detail",
  validate({ params, query }) {
    return typeof params.id === "number";
  },

  //transition ：'动画名'
  transition: "test",
};
</script>

<style scoped>
/* .test-enter-active,
.test-leave-active {
  transition: 0.5s ease all;
}

.test-enter,
.test-leave-active {
  margin-left: -1000px;
} */
</style>
