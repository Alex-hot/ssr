<template>
  <div>
    <h3>评论</h3>
    <div>
      <nuxt-link
        :to="{
          name: 'goods-comment-uid',
          params: { uid: 1 },
          query: { a: 1, b: 2 },
        }"
        >评论01</nuxt-link
      >
      <nuxt-link
        :to="{
          name: 'goods-comment-uid',
          params: { uid: 2 },
          query: { a: 11, b: 22 },
        }"
        >评论02</nuxt-link
      >
    </div>
    <nuxt />
  </div>
</template>