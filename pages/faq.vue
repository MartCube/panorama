<template>
	<div class="container">
		<h2>{{ $t('faq.h1') }}</h2>
		<accordion>
			<template v-slot:header>
				How can I come to Krusevo ?
			</template>
			<template v-slot:body>
				answer
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Where is hotel Panorama &amp; SPA ?
			</template>
			<template v-slot:body>
				answer
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Where is the chairlift ?
			</template>
			<template v-slot:body>
				answer
			</template>
		</accordion>
		<accordion>
			<template v-slot:header>
				Where can i read about more about events ?
			</template>
			<template v-slot:body>
				answer
			</template>
		</accordion>
		<h3>{{ $t('faq.p1') }}</h3>
		<h3>
			<a href="/contact">{{ $t('faq.p2') }}</a>
		</h3>
	</div>
</template>

<script>
import accordion from '~/components/accordion.vue'

export default {
	components: {
		accordion,
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin-top: 10%;
	justify-content: flex-start;

	h3 {
		margin-top: 20px;

		text-align: center;
		a {
			text-decoration: none;
			color: #4a88c8;

			&:hover {
				color: #7eb241;
			}
		}
	}
}

@media (max-width: 600px) {
	.container {
		margin-top: 100px;
		h1 {
			font-size: 1.4em;
			text-align: center;
		}
	}
}
</style>
