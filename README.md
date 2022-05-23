### 安装
  - npx create-nuxt-app XXXX
  - Choose renderring mode Universal (SSR) ✔️


### 开发
  - npm run dev


### 打包
  - npm run build
  - npm run start


### 生命周期
  - nuxtServerInit
    - 适用场景是对store操作
  - middleware 
    - 中间件流程顺序：
      - nuxt.config.js -> layouts -> pages
  - validate
    - 参数校验，校验失败，则自动跳转错误页面
  - asyncData
  - fetch


