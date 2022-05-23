// export default (context) => {
export default ({ store, route, redirect, params, query, req, res }) => {
    //context服务端上下文 是一个对象集合  
    // context 包含 store route redirect params query req res 等
    //全局守卫业务
    //store 状态树信息
    //route 一条目标路由信息
    //redirect 强制跳转
    //params query 校验参数信息
    // redirect('/login')
    console.log('middleware in route.config out')


}