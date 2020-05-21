<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/events.jpg'" />
		</div>

		<div class="blog">
			<div class="header">
				<h2>events <span class="blue">&amp;</span> news</h2>
			</div>

			<div v-if="blogPosts.length !== 0" class="grid">
				<section v-for="blogPost in blogPosts" :key="blogPost.id" :blogPost="blogPost">
					<postCard :post="blogPost" />
				</section>
			</div>

			<div v-else>
				<p>No Posts published at this time.</p>
			</div>
		</div>
	</div>
</template>

<script>
import bgItem from '~/components/bgItem.vue'
import postCard from '~/components/postCard.vue'

export default {
	components: {
		bgItem,
		postCard,
	},
	async asyncData({ $prismic, error }) {
		const blogPosts = await $prismic.api.query($prismic.predicates.at('document.type', 'blog-post'))

		if (blogPosts) {
			return {
				blogPosts: blogPosts.results,
			}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	head() {
		return {
			title: 'Events & News',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'read about the latest events and news' },
			],
		}
	},
}
</script>

<style lang="scss" scoped>
#intro {
	width: 100%;
	height: 90vh;
	margin-top: 80px;

	position: relative;
	overflow: hidden;
}

.blog {
	width: 90%;
	max-width: 1200px;
	min-height: 100vh;

	margin-top: 5%;
	margin-bottom: 50px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.header {
		display: flex;
		justify-content: flex-start;
		flex-basis: 100%;
		margin: 20px;

		text-transform: uppercase;
	}

	.grid {
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;
	}
}

@media (max-width: 1000px) {
	.blog {
		justify-content: center;

		.grid {
			justify-content: center;
		}
		.header {
			justify-content: center;
		}
	}
}
@media (max-width: 600px) {
	.blog {
		justify-content: center;
	}
}
</style>
