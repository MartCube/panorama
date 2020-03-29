<template>
	<div class="container">
		<!-- <ValidationObserver ref="createtour" tag="form" class="form" name="createtour" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" @submit.prevent="Submit">
			<input type="hidden" name="form-name" value="contact" />
			<p class="hidden">
				<label>Don’t fill this out: <input name="bot-field"/></label>
			</p>

			<h1>{{ $t('tripForm.h1') }}</h1>

			<inputItem :name="'Email'" :rules="'email|required'" :placeholder="'Your email'" />

			<div class="wrapper">
				<inputDate :name="'Date'" :rules="'required'" :placeholder="'Select your Date'" />

				<inputItem :name="'Participants'" :rules="'required'" :placeholder="'How many participants'" :type="'number'" />
			</div>

			<div class="box_group">
				<h3>What type of trip you are planing ?</h3>
				<checkbox :name="'Family vacation'" />
				<checkbox :name="'Business'" />
				<checkbox :name="'Team building'" />
			</div>

			<div class="box_group">
				<h3>Select your activites:</h3>
				<checkbox :name="'Skiing'" />
				<checkbox :name="'ATV riding'" />
				<checkbox :name="'Mountain biking'" />
				<checkbox :name="'Paragliding'" />
				<checkbox :name="'Hiking'" />
				<checkbox :name="'Climbing'" />
			</div>

			<inputItem :name="'Message'" :type="'textarea'" :placeholder="'Tell as more about your trip'" />

			<input type="submit" value="submit" />
		</ValidationObserver> -->
		<ValidationObserver ref="createtour" tag="form" class="form" name="createtour" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" netlify @submit.prevent="Submit">
			<!-- eslint-disable-next-line -->
			<input type="hidden" name="form-name" value="createtour">	<p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>

			<h1>{{ $t('tripForm.h1') }}</h1>

			<inputItem :name="'Email'" :rules="'email|required'" :placeholder="email" />

			<div class="wrapper">
				<inputDate :name="'Date'" :rules="'required'" :placeholder="'Select your Date'" />
				<input v-model="date" :name="'Date'" class="hidden" type="text" />

				<inputItem :name="'Participants'" :rules="'required'" :placeholder="'How many participants'" :type="'number'" />
			</div>

			<div class="box_group">
				<h3>What type of trip you are planing ?</h3>
				<checkbox :name="'Family vacation'" />
				<checkbox :name="'Business'" />
				<checkbox :name="'Team building'" />
			</div>

			<div class="box_group">
				<h3>Select your activites:</h3>
				<checkbox :name="'Skiing'" />
				<checkbox :name="'ATV riding'" />
				<checkbox :name="'Mountain biking'" />
				<checkbox :name="'Paragliding'" />
				<checkbox :name="'Hiking'" />
				<checkbox :name="'Climbing'" />
			</div>

			<inputItem :name="'Message'" :type="'textarea'" :placeholder="message" />

			<input type="submit" value="submit" />
		</ValidationObserver>
	</div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import inputItem from '~/components/inputItem.vue'
import inputDate from '~/components/inputDate.vue'
import checkbox from '~/components/checkbox.vue'

export default {
	components: {
		ValidationObserver,
		inputItem,
		inputDate,
		checkbox,
	},
	data: () => ({
		config: {
			minDate: 'today',
			mode: 'range',
			dateFormat: 'd-m-Y',
		},
	}),
	computed: {
		email() {
			return this.$t('tripForm.email')
		},
		// date() {
		// 	return this.$t('tripForm.date')
		// },
		participants() {
			return this.$t('tripForm.participants')
		},
		message() {
			return this.$t('tripForm.message')
		},
		activites() {
			return this.$t('tripForm.activites')
		},
		date() {
			return this.$store.state.date
		},
	},
	methods: {
		async Submit() {
			const isValid = await this.$refs.createtour.validate()
			if (!isValid) {
				return
			}

			document.querySelector('.form').submit()
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	margin-top: 100px;
}
.form {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	align-content: center;

	width: 90%;
	max-width: 800px;
	text-align: center;
	color: #4a88c8;

	.wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		align-content: center;
		width: 100%;
		max-width: 800px;

		.input_date,
		.input_item {
			max-width: 320px;
		}
	}

	.box_group {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		// align-items: center;
		// align-content: center;

		width: 100%;
		max-width: 800px;

		h3 {
			font-size: 1em;
			font-family: 'next_bold';
			color: #4a88c8;
			margin: 10px 15px;
			flex-basis: 100%;
			text-align: left;
		}
	}

	input[type='submit'] {
		align-self: center;
		cursor: pointer;

		text-decoration: none;
		text-transform: uppercase;
		text-align: center;
		font-family: 'next_bold';
		font-size: 1.2em;

		border: 2px solid #4a88c8;
		background-color: #4a88c8;
		color: white;
		padding: 10px 30px;
		margin: 20px;

		transition: all 0.3s ease;
		&:hover {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
		}
		&:active {
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
		}
	}
}

@media (max-width: 600px) {
	.form {
		.wrapper {
			flex-direction: column;
			.input_date,
			.input_item {
				max-width: 100%;
			}
		}
	}
}
</style>
