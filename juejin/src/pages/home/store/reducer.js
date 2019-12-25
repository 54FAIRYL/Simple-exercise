import { fromJS } from 'immutable';
import * as  constants  from './constants';

const defaultState = fromJS({
    list: [],
    topic: []
});

const changeHomeData = (state, action) => {
    return state.merge({
        list: fromJS(action.list),
        topic: fromJS(action.topic)
    });
    
}

 export default (state = defaultState, action) => {
     if(action.type === constants.DELETE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
     }if(action.type === constants.SHOW_LIST) {
         return changeHomeData(state, action);
     }
     return state;
 }