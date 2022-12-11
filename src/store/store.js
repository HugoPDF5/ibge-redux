import {combineReducers, createStore} from 'redux'
import StatesReducer from './states/states.reducer'
import {applyMiddleware, compose } from 'redux'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    states: StatesReducer
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store