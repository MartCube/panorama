<template>
	<div class="container">
		<div class="contact">
			<div class="text">
				<div class="wrapper">
					<div class="row">
						<h2>{{ $t('contact.chairlift') }}</h2>
						<p><i class="icon icon-location"></i>"Таќа Бербер" Бр 15</p>
						<p><i class="icon icon-play"></i> 7550 Крушево</p>
						<p><i class="icon icon-phone"></i> (+389) 72 808 808</p>
					</div>
					<div class="row">
						<h3>{{ $t('contact.workinghour') }}</h3>
						<p>{{ $t('contact.everyday') }}</p>
						<p>09:00 - 16:00</p>
					</div>
				</div>
				<div class="wrapper">
					<div class="row">
						<h2>{{ $t('contact.panorama') }}</h2>
						<p><i class="icon icon-location"></i>"Коча Миленку" Бр 80</p>
						<p><i class="icon icon-play"></i> 7550 Крушево</p>
						<p><i class="icon icon-phone"></i> (+389) 72 808 808</p>
					</div>
					<div class="row">
						<h3>{{ $t('contact.workinghour') }}</h3>
						<p>{{ $t('contact.everyday') }}</p>
						<p>00:00 - 24:00</p>
					</div>
				</div>
				<div class="wrapper">
					<div class="row">
						<h2>{{ $t('contact.alto') }}</h2>
						<p><i class="icon icon-location"></i>Станич</p>
						<p><i class="icon icon-play"></i>Крушево</p>
						<p><i class="icon icon-phone"></i> (+389) 72 707 072</p>
					</div>
					<div class="row">
						<h3>{{ $t('contact.workinghour') }}</h3>
						<p>{{ $t('contact.everyday') }}</p>
						<p>09.00 – 16.00</p>
					</div>
				</div>
				<div class="wrapper">
					<div class="row">
						<h2>{{ $t('contact.spa') }}</h2>
						<p><i class="icon icon-location"></i>"Коча Миленку" Бр 80</p>
						<p><i class="icon icon-play"></i> 7550 Крушево</p>
						<p><i class="icon icon-phone"></i> (+389) 72 805 805</p>
					</div>
					<div class="row">
						<h3>{{ $t('contact.workinghour') }}</h3>
						<p>{{ $t('contact.everyday') }}</p>
						<p>10.00 – 21.00</p>
					</div>
				</div>
			</div>
			<ValidationObserver ref="contact" tag="form" class="form" name="contact" action="/success" data-netlify="true" netlify-honeypot="bot-field" method="POST" autocomplete="off" netlify @submit.prevent="Submit">
				<!-- eslint-disable-next-line -->
				<input type="hidden" name="form-name" value="contact">	<p class="hidden"><label>Don’t fill this out: <input name="bot-field"></label></p>

				<h2>{{ $t('contactForm.h1') }}</h2>

				<inputItem :name="'Email'" :rules="'email|required'" :placeholder="email" />

				<inputItem :name="'Subject'" :placeholder="subject" />

				<inputItem :name="'Message'" :type="'textarea'" :placeholder="message" />

				<input type="submit" :value="submit" />
			</ValidationObserver>
		</div>
	</div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import inputItem from '~/components/inputItem.vue'

export default {
	components: {
		ValidationObserver,
		inputItem,
	},
	computed: {
		email() {
			return this.$t('contactForm.email')
		},
		subject() {
			return this.$t('contactForm.subject')
		},
		message() {
			return this.$t('contactForm.message')
		},
		submit() {
			return this.$t('button.submit')
		},
	},
	methods: {
		async Submit() {
			const isValid = await this.$refs.contact.validate()
			if (!isValid) {
				return
			}

			document.querySelector('.form').submit()
		},
	},
	head() {
		return {
			title: 'Contact',
			meta: [
				// hid is used as unique identifier. Do not use `vmid` for it as it will not work
				{ hid: 'description', name: 'description', content: 'get in touch' },
			],
		}
	},
}
</script>

<style lang="scss" scoped>
.contact {
	width: 100%;
	margin-top: 150px;

	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	align-content: center;
	flex-wrap: wrap;

	.text {
		flex-basis: 50%;
		max-width: 600px;
		.wrapper {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			align-content: center;
			flex-wrap: wrap;

			width: 100%;
			border-bottom: 3px solid #4a88c8;
			padding: 20px 0;
			.row {
				.icon-play {
					color: transparent;
				}

				h4 {
					font-size: 24px;
					margin-bottom: 20px;
				}
				h3 {
					font-family: 'next_demi';
					font-size: 24px;
					margin-bottom: 20px;
				}
			}
		}
	}

	.form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		align-content: center;

		width: 100%;
		max-width: 400px;

		h2 {
			text-align: center;
			align-self: center;
			color: #4a88c8;
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
}

@media (max-width: 1000px) {
	.contact {
		justify-content: center;
		margin-top: 80px;
		.text {
			flex-basis: 80%;
			margin: 50px 0;
			text-align: center;

			.wrapper {
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.row {
					margin: 10px 0;
				}
			}
		}
		.form {
			margin: 50px 0;
			width: 85%;
		}
	}
}
</style>
