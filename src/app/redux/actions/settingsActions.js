import ActionTypes from "./actionTypes"

const {
	RESET,
	// Write down the actions you want to use here
} = ActionTypes

const SettingsActions = {
	resetSettings: () => {
		return (dispatch, getState) => {
      dispatch({
        type: RESET,
      })
		}
	},
}

export default SettingsActions
