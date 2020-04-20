import { combineReducers } from 'redux';
import { addCar, removeCar } from './actions'

const user = (state = null) => state

// add switch statements in here
const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const newState = [ ...state ]
            newState.splice(action.value, 1);
            return newState;
     default: // need this for default case
      return state 
    }
}

export default combineReducers({ user, cars })