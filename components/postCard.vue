<template>
	<div class="card">
		<nuxt-link :to="link">
			<img :data-src="post.data.post_image.url" class="lazyload" />
			<div class="color-overlay"></div>
			<div class="text">
				<div class="date">
					{{ formattedDate }}
				</div>
				<h2>{{ $prismic.asText(post.data.post_title) }}</h2>

				<div class="btn">
					read more
				</div>
			</div>
		</nuxt-link>
	</div>
</template>

<script>
export default {
	props: {
		post: {
			type: Object,
			required: true,
		},
	},
	data: function() {
		return {
			link: '',
			formattedDate: '',
		}
	},
	created() {
		this.link = this.$prismic.linkResolver(this.post)

		var date = this.$prismic.asDate(this.post.data.post_date)
		this.formattedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(date)
	},
}
</script>

<style lang="scss" scoped>
$blue: #4a88c8;
$green: #7eb241;
.card {
	display: flex;
	position: relative;
	overflow: hidden;
	width: 350px;
	height: 350px;
	margin: 20px;
	cursor: pointer;

	img {
		width: 350px;
		height: 350px;
		object-fit: cover;
		object-position: center;

		transition: all 0.35s ease;
		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 1.5s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}

	.color-overlay {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		opacity: 1;
		transition: all 0.35s ease;
	}

	.text {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;

		text-align: center;
		color: white;

		.date {
			font-family: 'next';
			font-size: 0.9em;
			margin: 10px 0;
		}
		h2 {
			width: 80%;
			font-family: 'next_bold';
			text-transform: uppercase;
		}
		.btn {
			margin: 0;

			font-size: 0.8em;
			font-family: 'next_bold';
			text-transform: uppercase;
		}
	}

	&:hover {
		.color-overlay {
			background: rgba(0, 0, 0, 0.3);
		}
	}
}
</style>
