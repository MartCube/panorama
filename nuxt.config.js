const pkg = require('./package')

module.exports = {
	mode: 'universal',
	head: {
		title: 'AllSeasonsPanorama',
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'keywords', content: 'mountain, biking, krusevo, panorama, macedonia, paragliding, hotel, events, news,' }, { hid: 'description', name: 'description', content: pkg.description }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
	},

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
	],

	prismic: {
		endpoint: 'https://allseasonsadventure.cdn.prismic.io/api/v2',
		linkResolver: '@/plugins/link-resolver',
		htmlSerializer: '@/plugins/html-serializer',
		preview: false,
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
}
