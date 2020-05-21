<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/downhill.jpg'" />
		</div>
		<div id="text">
			<h2>Downhill Biking</h2>
		</div>
		<div v-if="bikeTours.length !== 0" class="grid">
			<section v-for="bikeTour in bikeTours" :key="bikeTour.id">
				<tourCard :tour="bikeTour" />
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
		const bikeTours = await $prismic.api.query($prismic.predicates.at('document.type', 'bike-tour'))

		if (bikeTours) {
			return {
				bikeTours: bikeTours.results,
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
			title: 'Downhill Biking',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'Downhill Biking in Krusevo' },
			],
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
	margin: 100px 0;

	h2 {
		text-transform: uppercase;
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
