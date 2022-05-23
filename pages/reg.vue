<template>
  <div>
    <h3>注册</h3>
  </div>
</template>
<script>
export default {
  beforeRouteLeave(to, form, next) {
    let b1 = window.confirm("是否要离开");
    next(b1);
  },
};
</script>