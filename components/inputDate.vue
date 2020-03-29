<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_date">
		<label :for="name">{{ name }}</label>

		<span class="error" :class="classes"> {{ errors[0] }} <i class="icon icon-attention"></i></span>

		<flat-pickr v-model="date" :placeholder="placeholder" :config="config" @input="updateDate(date)" />
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import flatPickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'

export default {
	components: {
		ValidationProvider,
		flatPickr,
	},
	props: {
		name: {
			type: String,
			default: '',
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
	},
	data: () => ({
		date: '',
		config: {
			minDate: 'today',
			mode: 'range',
			dateFormat: 'd-m-Y',
		},
	}),
	methods: {
		updateDate(date) {
			this.$store.dispatch('updateDate', date)
		},
	},
}
</script>

<style lang="scss" scoped>
.input_date {
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

	input {
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
