// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [
		'nuxt-icon',
		'@nuxtjs/google-fonts',
		'@storyblok/nuxt',
		'@nuxt/image',
	],

	// nuxtIcon: {
	// 	size: '10px',
	// 	class: 'icon',
	// },

	googleFonts: {
		families: {
			Poppins: [400, 600, 700, 800],
			base64: true,
		},
	},

	storyblok: {
		accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
		bridge: true,
		devtools: true,
	},

	image: {
		storyblok: {
			baseURL: 'https://a.storyblok.com',
		},
	},

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/_colors.scss" as *;',
				},
			},
		},
	},

	css: ['@/assets/styles/index.scss'],
});
