<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/stay.jpg'" />
		</div>
		<div class="wrapper">
			<div class="text">
				<imageItem :source="'/logos/panorama.png'" />
				<h2>{{ $t('stay.textHeader1') }}</h2>
				<p>{{ $t('stay.textP1') }}</p>
				<p>{{ $t('stay.textP2') }}</p>
				<p>{{ $t('stay.textP3') }}</p>
				<btn class="m" href="https://panoramaspa.mk" target="_blank">
					види повеќе
				</btn>
			</div>
			<div class="image">
				<imageItem :source="'/stay/panorama.jpg'" />
			</div>
		</div>
		<div id="highlights">
			<a href="https://panoramaspa.mk/en/room-suits/" target="blank">
				<div class="image">
					<img data-src="/inspire/stay.jpg" class="lazyload" />
					<div class="color-overlay"></div>
					<div class="text">
						<h2>{{ $t('inspire.card5') }}</h2>
						<h2>{{ $t('button.seeMore') }}</h2>
						<div class="line"></div>
					</div>
				</div>
			</a>
			<a href="https://panoramaspa.mk/en/spa-2-4/" target="blank">
				<div class="image">
					<img data-src="/inspire/spa.jpg" class="lazyload" />
					<div class="color-overlay"></div>
					<div class="text">
						<h2>{{ $t('inspire.card6') }}</h2>
						<h2>{{ $t('button.seeMore') }}</h2>
						<div class="line"></div>
					</div>
				</div>
			</a>
			<a href="https://panoramaspa.mk/en/alto/" target="blank">
				<div class="image">
					<img data-src="/inspire/alto.jpg" class="lazyload" />
					<div class="color-overlay"></div>
					<div class="text">
						<h2>{{ $t('inspire.card4') }}</h2>
						<h2>{{ $t('button.seeMore') }}</h2>
						<div class="line"></div>
					</div>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'
import bgItem from '~/components/bgItem.vue'
import imageItem from '~/components/imageItem.vue'

export default {
	components: {
		btn,
		bgItem,
		imageItem,
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
.wrapper {
	min-height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
	align-content: center;
	.text {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-basis: 50%;

		padding: 50px;
		text-align: center;
		h2 {
			color: #1e473c;
			text-transform: initial;
		}
		.imageItem {
			width: 150px;
		}
		.btn {
			margin: 20px;
			border-color: #1e473c;
			background: #1e473c;
			color: white;
		}
	}
	.image {
		flex-basis: 50%;
		padding: 50px;
	}
}
#highlights {
	max-width: 1300px;
	width: 100%;
	margin-bottom: 50px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.image {
		display: flex;
		position: relative;
		overflow: hidden;
		width: 400px;
		height: 223px;
		margin: 20px 0;
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
}

@media (max-width: 600px) {
	.wrapper {
		flex-wrap: wrap;
		.text {
			flex-basis: 100%;
		}

		.image {
			display: none;
		}
	}
	#highlights {
		justify-content: center;
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
	}
}
</style>
