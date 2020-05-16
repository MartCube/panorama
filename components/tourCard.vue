<template>
	<div class="card">
		<a :href="tour.data.link.url" target="blank">
			<div class="image">
				<img :data-src="tour.data.tour_image.url" class="lazyload" />

				<div class="color-overlay"></div>
			</div>
		</a>
		<div class="about">
			<h3>{{ $prismic.asText(tour.data.tour_title) }}</h3>
			<p>{{ $prismic.asText(tour.data.tour_text) }}</p>
		</div>
		<div class="info">
			<p><span>length</span>{{ $prismic.asText(tour.data.length) }} km</p>
			<p><span>duration</span>{{ $prismic.asText(tour.data.duration) }} h</p>
			<p><span>height difference</span>{{ $prismic.asText(tour.data.height_difference) }} m</p>
			<p><span>requirements</span>{{ $prismic.asText(tour.data.requirements) }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tour: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.card {
	max-width: 1100px;
	margin: 50px 0;

	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	align-content: center;

	border: 1px solid #ccc;

	.image {
		display: flex;
		position: relative;
		overflow: hidden;
		align-self: center;
		width: 300px;
		height: 300px;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
			transition: all 0.35s ease;
		}

		.color-overlay {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.5);
			opacity: 0;
			transition: all 0.5s ease;
		}

		&:hover {
			img {
				transform: scale(1.1);
			}
			.color-overlay {
				opacity: 0.3;
			}
		}
	}
	.about {
		width: 500px;
		padding: 0 25px;
		padding-top: 25px;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

		h3 {
			margin-bottom: 20px;
			text-transform: uppercase;
		}
		p {
			width: 100%;
			font-size: 1em;
		}
	}
	.info {
		width: 300px;
		padding-top: 25px;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: center;
		p {
			width: 80%;
			padding: 10px 0;
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			text-align: right;
			float: right;
			text-transform: uppercase;
			font-size: 0.8em;
			span {
				float: left;
			}
		}
	}
}

@media (max-width: 1100px) {
	.card {
		.image {
			width: 100%;
			height: 100%;
			max-width: 300px;
		}
	}
}
@media (max-width: 800px) {
	.card {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		border: none;

		.image {
			height: 300px;
		}
		.about {
			width: 350px;
			h2 {
				align-self: center;
			}
		}
		.info {
			width: 350px;
			justify-content: center;
			align-items: center;
			align-content: center;
		}
	}
}
</style>
