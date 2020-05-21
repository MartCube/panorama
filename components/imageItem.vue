<template>
	<div class="imageItem">
		<img class="image lazyload" :data-srcset="source" :alt="alt" />
	</div>
</template>

<script>
export default {
	props: {
		source: {
			type: String,
			required: true,
		},
		alt: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			loaded: false,
		}
	},
	methods: {
		onLoaded() {
			this.loaded = true
		},
	},
}
</script>

<style lang="scss" scoped>
.imageItem {
	// position: relative;

	.image {
		display: flex;
		width: 100%;

		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 1s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
}
</style>
