<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/inspire.jpg'" />
		</div>
		<div id="text">
			<h2>{{ $t('inspire.h1') }}</h2>
			<i18n path="inspire.text1" tag="p">
				<template v-slot:spring>
					<a href="">{{ $t('inspire.spring') }}</a>
				</template>
				<template v-slot:summer>
					<a href="">{{ $t('inspire.summer') }}</a>
				</template>
			</i18n>
			<br />
			<i18n path="inspire.text2" tag="p">
				<template v-slot:autumn>
					<a href="">{{ $t('inspire.autumn') }}</a>
				</template>
			</i18n>
			<br />
			<i18n path="inspire.text3" tag="p">
				<template v-slot:winter>
					<a href="">{{ $t('inspire.winter') }}</a>
				</template>
			</i18n>
			<br />
			<p>{{ $t('inspire.text4') }}</p>
		</div>

		<div id="highlights">
			<h1>{{ $t('inspire.h2') }}</h1>

			<div class="grid">
				<a href="/sport" target="blank">
					<div class="image vertical">
						<img data-src="/inspire/outdoor.jpg" class="lazyload" />
						<div class="color-overlay"></div>
						<div class="text">
							<h2>{{ $t('inspire.card1') }}</h2>
							<h2>{{ $t('button.seeMore') }}</h2>
							<div class="line"></div>
						</div>
					</div>
				</a>

				<div class="collage">
					<div class="image">
						<img data-src="/inspire/monuments.jpg" class="lazyload" />
						<div class="color-overlay"></div>
						<div class="text">
							<h2>{{ $t('inspire.card2') }}</h2>
							<h2>{{ $t('button.seeMore') }}</h2>
							<div class="line"></div>
						</div>
					</div>
					<div class="image">
						<a href="https://panoramaspa.mk/en/alto/" target="blank">
							<img data-src="/inspire/alto.jpg" class="lazyload" />
							<div class="color-overlay"></div>
							<div class="text">
								<h2>{{ $t('inspire.card4') }}</h2>
								<h2>{{ $t('button.seeMore') }}</h2>
								<div class="line"></div>
							</div>
						</a>
					</div>
				</div>
				<div class="collage">
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
				</div>
				<div class="image vertical">
					<img data-src="/inspire/kids.jpg" class="lazyload" />
					<div class="color-overlay"></div>
					<div class="text">
						<h2>{{ $t('inspire.card7') }}</h2>
						<h2>{{ $t('button.seeMore') }}</h2>
						<div class="line"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import bgItem from '~/components/bgItem.vue'

export default {
	components: {
		bgItem,
	},
	head() {
		return {
			title: 'Inspire',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'discover our contents and activities' },
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

@media (max-width: 600px) {
	#text {
		width: 80vw;
	}
	#highlights {
		.grid {
			.image {
				margin: 20px 0;
				width: 300px;
				height: 223px;
				.color-overlay {
					opacity: 0;
				}
				.text {
					padding: 15px 30px;
					background: rgba(0, 0, 0, 0.75);
					transform: translateY(30px);
					h2:nth-child(1) {
						font-size: 0.8em;
					}
					h2:nth-child(2) {
						font-size: 0.6em;
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
