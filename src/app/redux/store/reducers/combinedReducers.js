import { combineReducers } from 'redux'
// Import your reducers...
import AppReducer from './appReducer'
import SettingsReducer from './settingsReducer'

const CombinedReducers = combineReducers({
    // ...and combine them here
    app: AppReducer,
    settings: SettingsReducer,
})

export default CombinedReducers
