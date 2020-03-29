<template>
	<div class="container">
		<div class="post">
			<div class="image">
				<img :data-src="image" class="lazyload" />
			</div>
			<div class="date">
				<i class="icon icon-calendar"></i>
				{{ date }}
			</div>
			<div class="tags">
				<div v-for="tag in tags" :key="tag">
					<a href="#"> <span>#</span>{{ tag }}</a>
				</div>
			</div>
			<div class="title">
				{{ title }}
			</div>
			<div class="content">
				{{ content }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlogPost',
	async asyncData({ $prismic, params, error }) {
		// Query to get single post with params
		const post = await $prismic.api.getByUID('blog-post', params.uid)

		var date = $prismic.asDate(post.data.post_date)
		date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(date)

		if (post) {
			return {
				post,
				date,
				tags: post.tags,
				image: post.data.post_image.url,
				title: $prismic.asText(post.data.post_title),
				content: $prismic.asText(post.data.post_content),
			}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
}
</script>

<style lang="scss" scoped>
$blue: #4a88c8;
$green: #7eb241;
.post {
	max-width: 800px;
	margin: 10% 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.image {
		height: 450px;
		position: relative;

		img {
			max-width: 800px;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.5);
		}
	}
	.date {
		display: flex;
		width: 100%;
		padding: 10px;

		font-family: 'next_demi';
		color: #585d62;
	}
	.tags {
		display: flex;
		width: 100%;
		justify-content: flex-end;

		a {
			text-decoration: none;
			font-family: 'next_demi';
			span {
				color: $green;
			}
			color: $blue;

			margin: 0 10px;
			transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);

			&:hover {
				opacity: 0.75;
			}
		}
	}
	.title {
		margin: 20px 0;
		font-family: 'next_bold';
		font-size: 2.5em;
		text-align: center;
	}
}

@media (max-width: 1150px) {
	.post {
		width: 90%;
		margin: 30% 0;

		.date {
			justify-content: center;
		}
		.tags {
			justify-content: center;
		}
	}
}
</style>
