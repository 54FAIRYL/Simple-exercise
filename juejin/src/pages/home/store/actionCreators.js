import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

export const deleteItem = (index) => ({
    type: constants.DELETE_ITEM,
    index
})

// const getList = (result) => ({
//     type:  constants.SHOW_LIST,
//     list: fromJS(result)
// })

// export const ShowList = () => {
//     return (dispatch) => {
//         axios.get('/api/homeList.json').then((res) => {
//             const result = res.data.data;
//             const action = getList(result);
//             dispatch(action);
//         }).catch(() => {
//             console.log('error');
//         });
//     }
// }