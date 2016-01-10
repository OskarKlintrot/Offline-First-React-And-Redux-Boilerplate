import ActionTypes from "./actionTypes"

const {
	RESET,
	SET_USER,
	// Write down the actions you want to use here
} = ActionTypes

const AppActions = {
	resetApp: () => {
		return (dispatch, getState) => {
			setTimeout(function(){
				dispatch({
	        type: RESET,
	      })
			}, 1000)
		}
	},
	setUser: (user) => {
		return (dispatch, getState) => {
			dispatch({
				type: SET_USER,
				user: user,
			})
		}
	},
}

export default AppActions
