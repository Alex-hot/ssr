export default ({ app, redirect, params, query }) => {
    console.log('插件')
    const { router } = app
    router.beforeEach((to, form, next) => {
        //全局前置守卫 插件
        console.log('插件配置 全局配置，')
        // if (to.name === 'login' || to.name === 'reg') {
        //     next()
        // } else {
        //     redirect({ name: 'login' })
        // }
        // next(true)/next(false)   
        // 不能使用  next('/login')
        next()
    })
    router.afterEach((to, from) => {
        console.log('插件全局后置守卫')
    })
}