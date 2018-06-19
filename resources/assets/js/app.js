require('./bootstrap');
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import {routes} from './routes';
import MainLogin from './components/auth/MainLogin.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
	routes,
 	mode: 'history'
});

const app = new Vue({
    el: '#app',
    router,
    components: {
    	MainLogin
    }
});
