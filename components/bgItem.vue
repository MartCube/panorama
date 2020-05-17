<template>
	<div class="imageItem">
		<spinner v-show="!loaded" />
		<img class="image lazyload" :data-srcset="source" :class="position" @load="onLoaded" />
	</div>
</template>

<script>
import spinner from '~/components/spinner'

export default {
	components: {
		spinner,
	},
	props: {
		source: {
			type: String,
			required: true,
		},
		position: {
			type: String,
			default: 'bottom',
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
	position: relative;
	height: inherit;
	.image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: bottom;

		&.center {
			object-position: center;
		}

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
