<template>
	<div class="container">
		<h2>{{ $t('success.h1') }}</h2>
		<p>{{ $t('success.p1') }}</p>
		<p>{{ $t('success.p2') }}</p>
		<btn class="m" link="index">
			{{ $t('pages.home') }}
		</btn>
	</div>
</template>

<script>
import btn from '~/components/btn.vue'

export default {
	components: {
		btn,
	},
}
</script>

<style lang="scss" scoped>
.container {
	h2 {
		padding: 5px 0;
		color: #4a88c8;
		border-bottom: 2px solid #7eb241;
	}
	.btn {
		margin: 15px 0;
	}
}
</style>
