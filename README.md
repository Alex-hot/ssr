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


### 路由
  - 约定式
    - 展示区：<nuxt />
    - 声明式跳转： <nuxt-link :to="object" />
      - object:
        - name:路由名称 目录名-文件名
        - params: key要对等文件名
    
    - 子路由
      - 目录代表子路由，子路由内部同级的文件，代表的是同一级路由

    - 展示区层级控制                     
    
  - 配置

    - 
    
    - | PATH           | FILE              |
      | -------------- | ----------------- |
      | /              | Index.vue         |
      | /goods         | goods/index.vue   |
    | /goods/123     | goods/_id.vue     |
      | /goods/comment | goods/comment.vue |

      pages/一级展示/二级展示
    
    - /index.vue   会在一级展示
    - /index.vue 空文档  代表有默认页，不会找寻其下子路由的文件
  
  - 扩展路由

    - ```
        router:{
          extendRoutes(routes,resolve){
            routes.push({
              name:'home',
              path:'/index',
              component:resolve(__dirname,'pages/index.vue')
            })
          }
        }
        ```

  - 路由守卫

    - 前置
        - 依赖中间件 middleware，插件
        - 全局守卫： 
            - nuxt.config 指向middleware
            - layout定义中间件
        - 组件独享守卫
            - 页面中 middleware
        - 插件中配置： 全局守卫
    - 后置
      - 使用vue-router的beforeRouteLeave钩子
      - 插件全局后置守卫


### 数据交互
  - 安装 nuxtjs/axios @nuxtjs/proxy