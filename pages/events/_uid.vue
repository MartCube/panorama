<template>
	<div class="container">
		<div class="post">
			<div class="image">
				<img :data-src="mainImage + '&fit=crop&w=800&h=450'" class="lazyload" :alt="title" />
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
				<h2>{{ title }}</h2>
			</div>

			<!-- add slices -->
			<section v-for="(slice, index) in slices" :key="'slice-' + index" class="slice">
				<template v-if="slice.slice_type === 'text'">
					<prismic-rich-text class="paragraph" :field="slice.primary.text" />
				</template>
				<template v-if="slice.slice_type === 'image'">
					<div class="image">
						<img :data-src="slice.primary.image.url + '&fit=crop&w=800&h=450'" class="lazyload" :alt="slice.primary.image.alt" />
						<span class="description"> {{ slice.primary.image.alt }} </span>
					</div>
				</template>
			</section>
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
				uid: post.uid,
				date,
				tags: post.tags,
				mainImage: post.data.post_image.url,
				title: $prismic.asText(post.data.post_title),
				slices: post.data.body,
			}
		} else {
			error({ statusCode: 404, message: 'Page not found' })
		}
	},
	head() {
		return {
			title: this.title,
			meta: [
				{ hid: 'og:title', property: 'og:title', content: this.title },
				{ hid: 'og:image', property: 'og:image', content: this.mainImage },
				{ hid: 'og:url', property: 'og:url', content: `https://allseasonspanorama.com/events/${this.uid}` },
			],
		}
	},
}
</script>

<style lang="scss">
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

	.date {
		display: flex;
		width: 100%;
		padding: 15px 0;

		font-family: 'next_demi';
		color: #585d62;
	}
	.tags {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		flex-wrap: wrap;

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
		margin: 40px 0;

		h2 {
			font-family: 'next_bold';
			font-size: 2.5em;
			text-align: center;
			margin: 0;
		}
	}
	.paragraph {
		a {
			text-decoration: none;
			color: #4a88c8;

			&:hover {
				color: #7eb241;
			}
		}
		ol {
			margin: 20px 40px;
			li {
				margin: 10px 0;
			}
		}
		h4 {
			font-size: 1.6em;
			margin-bottom: 20px;
		}
	}
	.image {
		max-width: 800px;
		height: 450px;
		position: relative;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			box-shadow: 0 10px 40px -14px rgba(0, 0, 0, 0.5);
		}
		.description {
			display: flex;
			justify-content: center;
			opacity: 0.8;
			font-size: 0.9em;
		}
	}

	.slice {
		width: 100%;
		margin: 20px 0;
	}
}

@media (max-width: 1150px) {
	.post {
		width: 90%;
		margin: 30% 0;

		.title {
			h2 {
				font-size: 2em;
			}
		}
		.date {
			justify-content: center;
		}
		.tags {
			justify-content: center;
		}
		.paragraph {
			h4 {
				font-size: 1.6em;
			}
			ol {
				margin: 10px 20px;
			}
		}
	}
}
</style>
