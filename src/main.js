import Vue from 'vue'
import App from './App.vue'
import {
    Row,
    Col,
    List,
    Card,
    Icon
} from 'ant-design-vue'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(Row)
Vue.use(Col)
Vue.use(List)
Vue.use(Card)
Vue.use(Icon)
new Vue({
    render: h => h(App),
}).$mount('#app')