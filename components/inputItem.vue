<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_item">
		<label :for="placeholder">{{ placeholder }}</label>
		<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>

		<input v-if="type === 'text'" v-model="input_value" type="text" :name="name" :placeholder="placeholder" />
		<input v-if="type === 'number'" v-model="input_value" type="number" min="1" :name="name" :placeholder="placeholder" />

		<textarea v-if="type === 'textarea'" v-model="input_value" :name="name" rows="5" :placeholder="placeholder"></textarea>
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
	components: {
		ValidationProvider,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: '',
		},
		rules: {
			type: String,
			default: 'required',
		},
		mode: {
			type: String,
			default: 'eager',
		},
		type: {
			type: String,
			default: 'text',
		},
	},
	data: () => ({
		input_value: '',
	}),
}
</script>

<style lang="scss" scoped>
.input_item {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	align-content: center;

	width: 100%;
	position: relative;

	label {
		font-family: 'next_bold';
		color: #4a88c8;
		margin: 10px 15px;
	}

	input[type='text'],
	input[type='number'],
	input[type='email'],
	textarea {
		width: 100%;
		padding: 10px 15px;

		border: 1px solid #ccc;
		border-radius: 10px;
		resize: none;
		border-radius: 0;

		font-family: 'next';
		font-size: 1em;
		color: #343a40;
		&:focus {
			outline: none;
			box-shadow: (0 0 5px rgba(74, 136, 200, 1));
			border: 1px solid rgba(81, 203, 238, 1);
		}
	}
	.error {
		position: absolute;
		top: 0;
		right: 0;
		margin: 10px 20px;
		font-size: 0.8em;
		display: none;
		i {
			color: #ff1461;
		}
		&.invalid {
			display: flex;
		}
	}
}
</style>
