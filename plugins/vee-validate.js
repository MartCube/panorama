import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

extend('required', {
	...required,
	message: ' field required',
})

extend('email', {
	...email,
	message: 'email not valid', // the error message
})
