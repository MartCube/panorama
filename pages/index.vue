<template>
	<div class="container">
		<div id="intro">
			<div class="video">
				<a href="#" class="play"><i class="icon icon-play"></i></a>
				<!-- <video playsinline autoplay muted loop>
					<source src="video.mp4" type="video/mp4" />
				</video> -->
				<video class="lazyload" preload="none" loop muted="" data-autoplay="">
					<source src="video.mp4" type="video/mp4" />
				</video>
			</div>

			<div class="trip">
				<div class="form">
					<div class="text">
						<h3>{{ $t('index.tripText1') }}</h3>
						<p>{{ $t('index.tripText2') }}</p>
					</div>

					<flat-pickr v-model="date" class="input_date" :placeholder="datePlaceholder" :config="config" />

					<btn link="createtour">{{ $t('index.tripButton') }}</btn>
				</div>
			</div>
		</div>

		<div id="text">
			<h2>{{ $t('index.mainTextHeader') }}</h2>
			<p>{{ $t('index.mainTextP1') }}</p>
			<p>{{ $t('index.mainTextP2') }}</p>
			<p>{{ $t('index.mainTextP3') }}</p>
		</div>

		<div id="highlights">
			<h1>{{ $t('inspire.highlights') }}</h1>

			<div class="grid">
				<n-link to="/sport">
					<div class="image vertical">
						<img data-src="/inspire/outdoor.jpg" class="lazyload" />
						<div class="color-overlay"></div>
						<div class="text">
							<h2>{{ $t('inspire.card1') }}</h2>
							<h2>{{ $t('button.seeMore') }}</h2>
							<div class="line"></div>
						</div>
					</div>
				</n-link>
				<div class="collage">
					<n-link to="/inspire">
						<div class="image">
							<img data-src="/inspire/monuments.jpg" class="lazyload" />
							<div class="color-overlay"></div>
							<div class="text">
								<h2>{{ $t('inspire.card2') }}</h2>
								<h2>{{ $t('button.seeMore') }}</h2>
								<div class="line"></div>
							</div>
						</div>
					</n-link>
					<n-link to="/inspire">
						<div class="image">
							<img data-src="/inspire/food.jpg" class="lazyload" />
							<div class="color-overlay"></div>
							<div class="text">
								<h2>{{ $t('inspire.card3') }}</h2>
								<h2>{{ $t('button.seeMore') }}</h2>
								<div class="line"></div>
							</div>
						</div>
					</n-link>
				</div>
			</div>
			<btn link="inspire" class="m">
				{{ $t('button.seeMore') }}
			</btn>
		</div>

		<div class="sponsors">
			<div class="grid">
				<imageItem :source="'/logos/jeep.png'" />
				<imageItem :source="'/logos/panorama.png'" />
				<imageItem :source="'/logos/nlb.png'" />
			</div>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'
import imageItem from '~/components/imageItem.vue'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
	components: {
		btn,
		imageItem,
		flatPickr,
	},
	data: () => ({
		date: '',
		config: {
			minDate: 'today',
			mode: 'range',
			dateFormat: 'd-m-Y',
		},
	}),
	computed: {
		datePlaceholder() {
			return this.$t('index.tripDate')
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	h2 {
		text-transform: uppercase;
	}
}
#intro {
	width: 100%;
	min-height: 100vh;
	padding-top: 80px;
	position: relative;
	overflow: hidden;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;

	background: #24292e;

	.video {
		width: 100%;
		height: 75vh;
		position: relative;
		video {
			width: 100%;
			height: 75vh;
			min-width: 100%;
			min-height: 100%;

			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 2;
			object-fit: cover;
		}

		.play {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);

			z-index: 3;

			background-color: rgba(74, 136, 200, 0.6);
			padding: 10px;
			font-size: 1.5em;
			color: white;

			&:hover {
				background-color: rgba(74, 136, 200, 0.9);
			}
		}
	}

	.trip {
		width: 100%;
		color: white;

		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;

		.form {
			width: 100%;
			max-width: 1200px;
			height: 100px;

			display: flex;
			align-items: center;
			align-content: space-around;
			justify-content: space-around;

			.text {
				width: 310px;
				user-select: none;

				display: flex;
				flex-direction: column;
				h3 {
					font-family: 'next_demi';
					text-transform: uppercase;
					font-size: 1em;
				}
				p {
					font-size: 1em;
				}
			}

			.input_date {
				width: 310px;
				padding: 10px 15px;

				border: 1px solid #ccc;
				border-radius: 10px;
				resize: none;
				border-radius: 0;

				font-family: 'next';
				font-size: 1em;
				text-align: center;
				color: #343a40;
				&:focus {
					outline: none;
					box-shadow: (0 0 5px rgba(74, 136, 200, 1));
					border: 1px solid rgba(81, 203, 238, 1);
				}
			}

			.btn {
				width: 310px;
				cursor: pointer;

				text-decoration: none;
				text-transform: uppercase;
				text-align: center;
				font-family: 'next_bold';
				font-size: 1em;

				border: 2px solid #4a88c8;
				color: white;
				background-color: #4a88c8;

				padding: 10px 30px;
				//margin: 20px;

				transition: all 0.3s ease;
				&:hover {
					box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
				}
				&:active {
					box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
				}
			}
		}
	}
}

#text {
	width: 60vw;
	max-width: 1100px;
	margin: 100px 0;

	a {
		text-decoration: none;
		color: #4a88c8;

		&:hover {
			color: #7eb241;
		}
	}
}

#highlights {
	max-width: 1100px;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	.grid {
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;

		.collage {
			min-height: 600px;

			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			align-content: space-between;
			flex-wrap: wrap;
		}

		.image {
			display: flex;
			position: relative;
			overflow: hidden;
			width: 500px;
			height: 281px;
			margin: 20px;
			cursor: pointer;

			img {
				width: 100%;
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
				background: rgba(0, 0, 0, 0.3);
				opacity: 1;
				transition: all 0.35s ease;
			}

			.text {
				position: absolute;
				bottom: 30px;
				padding: 15px 30px;
				width: 100%;

				display: flex;
				justify-content: space-between;
				align-items: center;
				align-content: center;

				transition: all 0.3s;
				h2 {
					margin-bottom: 5px;
					color: white;
					font-family: 'next_bold';
					text-transform: uppercase;
					font-size: 1.5em;
				}
				h2:nth-child(2) {
					font-size: 1em;
					color: #7eb241;

					opacity: 0;
					transform: translateX(-35px);
					transition: all 0.5s;
				}
				.line {
					position: absolute;
					bottom: 10px;
					width: 0%;
					height: 3px;
					border-radius: 10px;
					background: #4a88c8;
					opacity: 0;
					transition: all 0.5s;
				}
			}

			&:hover {
				img {
					transform: scale(1.1);
				}
				.color-overlay {
					opacity: 0;
				}

				.text {
					background: rgba(0, 0, 0, 0.6);
					transform: translateY(30px);

					h2:nth-child(2) {
						opacity: 1;
						transform: translateX(0px);
					}

					.line {
						opacity: 1;
						width: calc(100% - 60px);
					}
				}
			}
		}

		.vertical {
			height: 600px;
		}
	}
	.btn {
		margin: 20px 0;
	}
}

.sponsors {
	width: 80vw;
	text-align: center;
	margin: 50px 0;

	.grid {
		display: flex;
		justify-content: space-around;
		align-items: center;
		align-content: center;
		flex-wrap: wrap;

		.imageItem {
			max-width: 250px;
		}
	}
}

@media (max-width: 1150px) {
	#intro {
		.trip {
			.form {
				display: flex;
				flex-direction: column;
				align-items: center;
				align-content: center;
				justify-content: center;

				max-width: 400px;
				height: 100%;
				margin: 20px;

				.text {
					margin-bottom: 30px;
					text-align: center;
				}

				.input_date {
					width: 90%;
				}

				.btn {
					width: 90%;
					margin: 20px 0;
					align-self: center;
				}
			}
		}
	}
}
@media (max-width: 600px) {
	#text {
		width: 80vw;
		h2 {
			text-align: center;
		}
	}
	#highlights {
		text-align: center;
		.grid {
			.image {
				margin: 20px 0;
				width: 300px;
				.color-overlay {
					opacity: 0;
				}
				.text {
					padding: 15px 30px;
					background: rgba(0, 0, 0, 0.75);
					transform: translateY(30px);
					h2:nth-child(1) {
						font-size: 1em;
					}
					h2:nth-child(2) {
						font-size: 0.8em;
						opacity: 1;
						transform: translateX(0px);
					}
					.line {
						opacity: 1;
						width: calc(100% - 60px);
					}
				}
			}
			.collage {
				min-height: 400px;
			}
			.vertical {
				height: 400px;
			}
		}
	}
}
</style>
