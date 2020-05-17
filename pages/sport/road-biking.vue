<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/road.jpg'" />
		</div>
		<div id="text">
			<h2>Road Biking</h2>
			<p>{{ $t('biking.p1') }}</p>
			<br />
			<p>{{ $t('biking.p2') }}</p>
			<br />
			<p>{{ $t('biking.p3') }}</p>
		</div>
		<div v-if="roadTours.length !== 0" class="grid">
			<section v-for="roadTour in roadTours" :key="roadTour.id">
				<tourCard :tour="roadTour" />
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
		const roadTours = await $prismic.api.query($prismic.predicates.at('document.type', 'road-tour'))
		console.log('asda')
		if (roadTours) {
			return {
				roadTours: roadTours.results,
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
