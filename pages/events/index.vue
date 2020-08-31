<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/events.jpg'" />
		</div>

		<div class="blog">
			<div class="header">
				<h2>events <span class="blue">&amp;</span> news</h2>
			</div>

			<div class="grid">
				<section v-for="blogPost in blogPosts" :key="blogPost.id" :blogPost="blogPost">
					<postCard :post="blogPost" />
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import bgItem from '~/components/bgItem.vue'
import postCard from '~/components/postCard.vue'

export default {
	components: { bgItem, postCard },
	async fetch() {
		const blogPosts = await this.$prismic.api.query(this.$prismic.predicates.at('document.type', 'blog-post'), { orderings: '[document.first_publication_date desc]', pageSize: this.results_per_page, page: this.currentPage })
		// console.log(blogPosts)

		this.blogPosts = blogPosts.results
		this.total_pages = blogPosts.total_pages
		this.prev_page = blogPosts.prev_page
		this.next_page = blogPosts.next_page
	},
	data: () => ({
		blogPosts: null,
		total_pages: null,
		currentPage: 1,
		results_per_page: 6,
		prev_page: null,
		next_page: null,
	}),
	head() {
		return {
			title: 'Events & News',
			meta: [{ hid: 'description', name: 'description', content: 'read about the latest events and news' }],
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
