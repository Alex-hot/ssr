// export default (context) => {
export default ({ store, route, redirect, params, query, req, res }) => {

    //context服务端上下文 是一个对象集合  
    // context 包含 store route redirect params query req res 等
    //全局守卫业务

    console.log('middleware in route.config out')
}