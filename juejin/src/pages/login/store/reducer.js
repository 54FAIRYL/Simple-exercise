import { fromJS } from 'immutable';
import * as  constants  from './constants';

const defaultState = fromJS({
    showLogin: false,
    login: false
});



export default (state = defaultState, action) => {
    switch(action.type) {
        case constants.CHANGE_LOGIN: 
            return state.merge({
                showLogin: fromJS(action.showLogin),
                login: fromJS(action.value)
            })
        case constants.CHANGE_LOGOUT: 
            return state.set('login', action.value);
        case constants.CHANGE_LOGIN_SHOW:
            return state.set('showLogin', action.showLogin);
        case constants.CHANGE_LOGIN_CLOSE:
            return state.set('showLogin', action.showLogin);
        default:
            return state;
    }
}