<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/mountain.jpg'" :position="'center'" />
		</div>
		<div id="text">
			<h2>{{ $t('biking.h1') }}</h2>
			<p>{{ $t('biking.p1') }}</p>
			<br />
			<p>{{ $t('biking.p2') }}</p>
			<br />
			<p>{{ $t('biking.p3') }}</p>
		</div>
		<div v-if="mountainTours.length !== 0" class="grid">
			<section v-for="mountainTour in mountainTours" :key="mountainTour.id">
				<tourCard :tour="mountainTour" />
			</section>
		</div>
	</div>
</template>

<script>
import bgItem from '~/components/bgItem.vue'
import tourCard from '~/components/tourCard.vue'

export default {
	components: {
		bgItem,
		tourCard,
	},
	async asyncData({ $prismic, error }) {
		const mountainTours = await $prismic.api.query($prismic.predicates.at('document.type', 'mountain-tour'))

		if (mountainTours) {
			return {
				mountainTours: mountainTours.results,
			}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	data: () => ({
		filteredTours: [],
	}),
	methods: {
		filterTours() {
			bikeTours.data
		},
	},
	head() {
		return {
			title: 'Mountain Biking',
			meta: [{ hid: 'description', name: 'description', content: 'Mountain Biking in Krusevo' }],
		}
	},
}
</script>

<style lang="scss" scoped>
#intro {
	width: 100%;
	height: 70vh;
	margin-top: 80px;

	position: relative;
	overflow: hidden;
}

#text {
	width: 60vw;
	max-width: 1100px;
	margin: 50px 0;

	h2 {
		text-transform: uppercase;
		margin-bottom: 50px;
	}
	a {
		text-decoration: none;
		color: #4a88c8;

		&:hover {
			color: #7eb241;
		}
	}
}

.grid {
	margin: 5% 0;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;
}
@media (max-width: 800px) {
	.grid {
		width: 100%;
		justify-content: center;
		align-items: center;
		align-content: center;
	}
}
</style>
