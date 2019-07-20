import Vue from 'vue'
import App from './App.vue'
// 默认就是引入"./routers/index.js"
import router from './routers'
import store from './stores'

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')