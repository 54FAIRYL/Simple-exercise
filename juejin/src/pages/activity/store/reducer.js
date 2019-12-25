import { fromJS } from 'immutable';
import * as  constants  from './constants';

const defaultState = fromJS({
    topic: [],
    message: []
});

const changeActivityTopic = (state, action) => {
    return state.merge({
        topic: fromJS(action.topic),
        message: fromJS(action.message)
    });
    
}

 export default (state = defaultState, action) => {
     if(action.type === constants.CHANGE_ACTIVITY_TOPIC) {
         return changeActivityTopic(state, action)
     }
     return state;
 }