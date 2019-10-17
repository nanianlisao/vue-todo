import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
var a = 1;
a = 20;
console.log(a);
new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
