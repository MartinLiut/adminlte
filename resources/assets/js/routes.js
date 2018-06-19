import MainLogin     from './components/auth/MainLogin.vue';
import Login    from './components/auth/Login.vue';
import Register from './components/auth/Register.vue';

export const routes = [
	{
		path: '/asdasd',
		component: MainLogin
	},
	{
		path: '/',
		component: Login
	},
	{
		path: '/register',
		component: Register
	}
];
