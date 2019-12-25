import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as activityReducer } from '../pages/activity/store';
import { reducer as loginReducer } from '../pages/login/store';

const reducer = combineReducers({
    home: homeReducer,
    activity: activityReducer,
    login: loginReducer
})

export default reducer;
