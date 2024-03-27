// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: [],
	css: ["@/app/normalize.min.css","@/app/global.css"],

	imports: {
		dirs: [
			"shared/composables",
			"shared/utils",
			// You can specify here any folder from which you want to auto-import
		],
	},

	dir: {
		pages: "routes",
	},

	components: {
		dirs: [
			{
				path: "~/shared/components",
				pathPrefix: false,
			},
		],
	},
})
