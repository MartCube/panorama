<template>
	<div>
		<navbar />
		<nuxt />
		<footter />
	</div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import footter from '~/components/footer.vue'

export default {
	components: {
		navbar,
		footter,
	},
}
</script>
