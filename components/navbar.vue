<template>
	<nav class="navbar">
		<div class="logo">
			<n-link exact to="/"> <img src="/logo.png"/></n-link>
			<div class="lang">
				<nuxt-link v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
					{{ locale.name }}
				</nuxt-link>
			</div>
		</div>

		<div class="links" :class="{ active: isActive }" @click="CloseMenu">
			<n-link exact :to="localePath('index')">{{ $t('pages.home') }}</n-link>
			<n-link :to="localePath('inspire')">{{ $t('pages.inspire') }}</n-link>
			<n-link :to="localePath('events')">{{ $t('pages.events') }}</n-link>
			<n-link :to="localePath('sport')">{{ $t('pages.sport') }}</n-link>
			<n-link :to="localePath('stay')">{{ $t('pages.stay') }}</n-link>
			<n-link :to="localePath('about')">{{ $t('pages.about') }}</n-link>
			<n-link :to="localePath('faq')">{{ $t('pages.faq') }}</n-link>
			<n-link :to="localePath('contact')">{{ $t('pages.contact') }}</n-link>
		</div>

		<div class="button" :class="{ active: isActive }" @click="ShowHideMenu">
			<span class="top" />
			<span class="middle" />
			<span class="bottom" />
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
	computed: {
		availableLocales() {
			return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
		},
	},
	methods: {
		ShowHideMenu() {
			this.isActive = !this.isActive
		},
		CloseMenu() {
			this.isActive = false
		},
	},
}
</script>

<style lang="scss" scooped>
.navbar {
	position: fixed;
	top: 0;
	z-index: 999;
	height: 80px;
	width: 100%;

	display: flex;
	justify-content: flex-end;
	align-items: center;
	align-content: center;
	background: #24292e;
	user-select: none;

	.links {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-content: space-around;
		flex-basis: 80%;

		a {
			text-decoration: none;
			font-family: 'next_demi';
			text-transform: uppercase;
			font-size: 1em;
			font-weight: 700;
			color: white;
			outline: none;

			&::after {
				content: '';
				display: block;
				width: 100%;
				height: 3px;
				border-radius: 10px;
				background: #4a88c8;

				opacity: 0;
				transition: all 0.3s;
				transform: translateY(10px);
			}

			&:hover::after {
				opacity: 1;
				transform: translateY(5px);
			}

			&.nuxt-link-active::after {
				opacity: 1;
				transform: translateY(5px);
			}
		}

		&.active {
			display: flex;
			flex-direction: column;
			align-content: center;
			align-items: center;

			padding: 20% 0;

			background: #24292e;
			overflow: hidden;

			position: fixed;
			top: 0;
			right: 0;
			width: 100%;
			height: 100vh;

			a {
				animation: fadeInRight 0.5s ease forwards;
				color: white;
				&::after {
					background: #4a88c8;
					height: 5px;
				}
				&.nuxt-link-active {
					color: #7eb241;
				}
			}
		}
	}

	.logo {
		display: flex;
		align-items: bottom;
		flex-basis: 50%;
		padding-left: 200px;
		color: white;
		img {
			height: 60px;
		}

		.lang {
			margin: 5px 15px;
			a {
				text-decoration: none;
				text-transform: uppercase;

				font-family: 'next_bold';
				color: white;
				cursor: pointer;
				font-size: 1em;

				&:hover {
					color: #4a88c8;
				}
			}
		}
	}

	.button {
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		margin: 25px;
		height: 27px;
		width: 35px;
		cursor: pointer;

		transition: all 0.3s ease;
		&.active {
			.top {
				transform: translateY(11px) translateX(0) rotate(45deg);
				background: white;
			}
			.middle {
				opacity: 0;
			}

			.bottom {
				transform: translateY(-11px) translateX(0) rotate(-45deg);
				background: white;
			}
		}

		span {
			background: #4a88c8;
			//border-radius: 10px;
			height: 5px;
			border-radius: 5px;
			width: 100%;
			position: absolute;
			top: 0;
			transition: all 0.3s ease;

			&:nth-of-type(2) {
				top: 11px;
				width: 80%;
				right: 0;
				background: #7eb241;
			}

			&:nth-of-type(3) {
				top: 22px;
			}
		}
	}
}

@keyframes fadeInRight {
	0% {
		opacity: 0;
		transform: translateX(50px);
	}
	100% {
		opacity: 1;
		transform: translateX(0px);
	}
}

@media (max-width: 1125px) {
	.navbar {
		height: 85px;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
		.links {
			font-size: 1.4em;
		}
		.logo {
			flex: none;
			padding: 10px;
		}
		.links {
			display: none;
		}
		.button {
			display: flex;
		}
	}
}
</style>
