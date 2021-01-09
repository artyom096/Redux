import { DECREMENT, INCREMENT, ASYNC_INCREMENT, CHANGE_THEME, DISABLED_BUTTONS, ENABLED_BUTTONS } from "./types";

export function increment() {
    return {
        type: INCREMENT
    }
}

export function decrement() {
    return {
        type: DECREMENT
    }
}


export function changeTheme(newTheme){
    return {
        type: CHANGE_THEME,
        payload: newTheme
    }
}

export function disabledButtons() {
    return {
        type: DISABLED_BUTTONS
    }
}

export function enabledButtons() {
    return {
        type: ENABLED_BUTTONS
    }
}


export function asyncIncrement(){
    return function(dispatch){
        
        dispatch(disabledButtons())
        setTimeout(() => {
            dispatch(increment())
            dispatch(enabledButtons())
        }, 1500) 
        
    }
}