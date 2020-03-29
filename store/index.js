// The object that holds your data
export const state = () => ({
	date: 'no date',
})

// Functions that return back data contained in the state.
export const getters = {}

// Functions that directly mutate the state.
export const mutations = {
	updateDate(state, date) {
		state.date = date
	},
}

// Functions that call mutations on the state. They can call multiple mutations, can call other actions, and they support asynchronous operations.
export const actions = {
	updateDate(context, date) {
		context.commit('updateDate', date)
	},
}
