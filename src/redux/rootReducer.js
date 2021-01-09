import {combineReducers} from 'redux'
import { ASYNC_INCREMENT, CHANGE_THEME, DECREMENT, DISABLED_BUTTONS, ENABLED_BUTTONS, INCREMENT } from './types'

 function counterReducer(state = 0, action){
    if (action.type === INCREMENT){
        return state + 1
    }else if (action.type === DECREMENT){
        return state - 1
    }else if (action.type === ASYNC_INCREMENT){
        return state + 1
    }
    return state
}

const initialState = {
    value: 'light',
    disabled: false
}

 function themeReducer(state = initialState, action){
    switch(action.type){
        case CHANGE_THEME:
            return {...state, value: action.payload}
        case DISABLED_BUTTONS:
            return {...state, disabled: true}
        case ENABLED_BUTTONS:
            return {...state, disabled: false}
        default: return state
    }
}

export const rootReducer = combineReducers({
    counter: counterReducer,
    theme: themeReducer
})