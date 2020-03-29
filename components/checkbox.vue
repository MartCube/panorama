<template>
	<label class="checkbox">
		<span>{{ name }}</span>
		<input type="checkbox" :name="name" :value="name" />
		<span class="checkmark"></span>
	</label>
	<!-- <label> <input type="checkbox" name="attendance" value="Attending" /> Yes </label> -->
</template>

<script>
export default {
	props: {
		name: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
$text: #343a40;
$blue: #4a88c8;
$green: #7eb241;
$bg: #24292e;

/* The container */
.checkbox {
	width: 100%;
	max-width: 200px;

	display: block;
	position: relative;
	padding-left: 35px;
	margin: 10px 15px;

	cursor: pointer;
	user-select: none;

	font-family: 'next_bold';
	font-size: 0.8em;
	color: $text;
	text-align: left;

	// Hide the browser's default checkbox
	input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	//Create a custom checkbox
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 25px;
		width: 25px;
		background-color: #ccc;

		&:after {
			content: '';
			position: absolute;
			display: none;

			left: 9px;
			top: 5px;
			width: 5px;
			height: 10px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}

	input:checked ~ .checkmark {
		transition: all 0.2s ease;
		background-color: #2196f3;

		&:after {
			display: block;
		}
	}
}
</style>
