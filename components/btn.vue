<template>
	<a class="btn" @click="$router.push(localePath(link))">
		<slot>btn slot</slot>
	</a>
</template>

<script>
export default {
	props: {
		link: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
.btn {
	display: inline-block;
	user-select: none;
	text-decoration: none;
	text-transform: uppercase;
	font-family: 'next_bold';
	background-color: #4a88c8;
	color: white;
	cursor: pointer;

	&.l {
		font-size: 1.2em;
		padding: 10px 30px;
	}
	&.m {
		font-size: 1em;
		padding: 10px 20px;
	}
	&.s {
		border: 1px solid #4a88c8;
		font-size: 0.7em;
		padding: 5px 15px;
		margin: 10px 0;
	}

	transition: all 0.3s ease;
	&:hover {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
	}
	&:active {
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
	}
}
</style>
