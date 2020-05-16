<template>
	<div class="container">
		<div id="intro">
			<bgItem :source="'/bg/road.jpg'" />
		</div>
		<div id="text">
			<h2>{{ $t('sport.h1') }}</h2>

			<p>{{ $t('sport.p1') }}</p>
			<br />
			<i18n path="sport.p2" tag="p">
				<template v-slot:slot1>
					<a href="">{{ $t('sport.slot1') }}</a>
				</template>
				<template v-slot:slot12>
					<a href="">{{ $t('sport.slot12') }}</a>
				</template>
			</i18n>
			<br />
			<i18n path="sport.p3" tag="p">
				<template v-slot:slot2>
					<a href="">{{ $t('sport.slot2') }}</a>
				</template>
			</i18n>
		</div>
		<div id="grid">
			<div class="card">
				<a href="/sport/mountain-biking">
					<div class="image">
						<img data-src="/sport/mountain.jpg" class="lazyload" />
						<div class="color-overlay"></div>
					</div>
				</a>
				<h3>mountain biking</h3>
			</div>
			<div class="card">
				<a href="/sport/road-biking">
					<div class="image">
						<img data-src="/sport/road.jpg" class="lazyload" />
						<div class="color-overlay"></div>
					</div>
				</a>
				<h3>road biking</h3>
			</div>
			<div class="card">
				<a href="/sport/downhill-biking">
					<div class="image">
						<img data-src="/sport/downhill.jpg" class="lazyload" />
						<div class="color-overlay"></div>
					</div>
				</a>
				<h3>downhill biking</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/hiking.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>hiking</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/orieenting.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>orieenting</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/climbing.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>climbing</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/atv.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>ATV riding</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/paraglider.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>paragliding</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/hanglider.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>hangliding</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/rollerski.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>Roller ski</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/snowboard.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>snowboarding</h3>
			</div>
			<div class="card">
				<div class="image">
					<img data-src="/sport/ski.jpg" class="lazyload" />
					<div class="color-overlay"></div>
				</div>
				<h3>skiing</h3>
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

	a {
		text-decoration: none;
		color: #4a88c8;

		&:hover {
			color: #7eb241;
		}
	}
}

#grid {
	max-width: 1100px;

	display: flex;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.card {
		width: 300px;
		margin: 30px 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		align-content: center;

		.image {
			position: relative;
			overflow: hidden;
			cursor: pointer;
			img {
				max-width: 300px;
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
				transition: all 0.35s ease;
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
		h3 {
			margin: 20px 0;
			text-transform: uppercase;
			color: #343a40;
		}
	}
}
</style>
