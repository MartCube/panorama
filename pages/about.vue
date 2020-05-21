<template>
	<div class="container">
		<div id="text">
			<h2>{{ $t('about.h1') }}</h2>
			<p>{{ $t('about.p1') }}</p>

			<div class="line"></div>
			<p>{{ $t('about.p2') }}</p>
			<p>{{ $t('about.p2_1') }}</p>
			<p>{{ $t('about.p2_2') }}</p>
			<p>{{ $t('about.p2_3') }}</p>
			<p>{{ $t('about.p2_4') }}</p>
			<p>{{ $t('about.p2_5') }}</p>
			<p>{{ $t('about.p2_6') }}</p>
			<p>{{ $t('about.p2_7') }}</p>
			<p>{{ $t('about.p2_8') }}</p>

			<div class="line"></div>
			<p>{{ $t('about.p3') }}</p>
			<div class="line"></div>
			<p>{{ $t('about.p4') }}</p>
		</div>
	</div>
</template>

<script>
export default {
	head() {
		return {
			title: 'About us',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'about our work' },
			],
		}
	},
}
</script>
<style lang="scss" scoped>
#text {
	width: 70vw;
	max-width: 1100px;
	margin-top: 150px;

	a {
		text-decoration: none;
		color: #4a88c8;

		&:hover {
			color: #7eb241;
		}
	}
	.line {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		margin: 20px 0;
	}
}

@media (max-width: 600px) {
	#text {
		width: 80vw;
	}
}
</style>
