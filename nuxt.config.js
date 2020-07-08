const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: 'AllSeasonsPanorama',
		meta: [{ name: 'google-site-verification', content: 'mOFQvtsr0YJJziMpeEk2AZCh-yYiRwfv4mbhBMzbNQk' }, { charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'keywords', content: 'mountain, biking, paragliding, events, krusevo, macedonia, panorama, hotel, ' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},
	//things to add in future
	//1. google analytics
	//2. facebook webmaster
	//3. sharing feature for blog
	//4. custom 404 error page

	// Customize the progress-bar color
	loading: { color: '#4A88C8' },

	// Global css
	css: ['~/assets/style.scss'],

	// Plugins to load before mounting the App
	plugins: [{ src: `~/plugins/lazysizes.client.js` }, { src: `~/plugins/vee-validate.js` }],

	// Nuxt.js modules
	modules: [
		[
			'nuxt-i18n',
			{
				defaultLocale: 'en',
				lazy: true,
				langDir: 'locales/',
				locales: [
					{
						code: 'mk',
						name: 'MK',
						file: 'mk.js',
					},
					{
						code: 'en',
						name: 'EN',
						file: 'en.js',
					},
				],
			},
		],
		'@nuxtjs/prismic',
		// modules for full static before `nuxt export` (coming in v2.12)
		'@/modules/static',
		'@/modules/crawler',
		'@nuxtjs/pwa',
	],

	prismic: {
		endpoint: 'https://allseasonsadventure.cdn.prismic.io/api/v2',
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
		preview: false,
	},

	pwa: {
		manifest: {
			name: 'All Seasons Adventure',
			short_name: 'Panorama',
			theme_color: '#24292e',
			background_color: '#24292e',
		},
	},

	// Build configuration
	build: {
		// You can extend webpack config here
		transpile: ['vee-validate/dist/rules'],

		extend(config, { isDev, isClient, loaders: { vue } }) {
			if (isClient) {
				vue.transformAssetUrls.img = ['data-src', 'src']
				vue.transformAssetUrls.source = ['data-srcset', 'srcset']
			}
		},
	},
	generate: {
		fallback: '404.html', // Netlify reads a 404.html, Nuxt will load as an SPA
	},
}
