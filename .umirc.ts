import { defineConfig } from 'umi'

export default defineConfig({
	npmClient: 'pnpm',
	theme: {
		"@primary-color": "#D31145",
	},
	title: 'AIA Protal Template | AIA Thailand',
	favicons: ['/src/assets/favicon.ico'],
	routes: [
		{
			path: '/',
			redirect: '/homepage',
			title: 'HomePage',
			component: '@/layouts',
			wrappers: [
				'@/wrappers/auth',
			],
			routes: [

			]
		},
		{
			exact: true,
			path: '/homepage',
			component: './Home',
			title: 'HomePage'
		},
		{
			exact: true,
			path: '/login',
			component: './Login',
			title: 'Login'
		},
		{
			path: '*',
			component: './404',
			title: '404 NOT FOUND'
		}
	]
})
