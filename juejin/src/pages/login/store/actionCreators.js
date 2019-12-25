import axios from 'axios';
import * as constants from './constants';

export const logout = () => ({
    type: constants.CHANGE_LOGOUT,
    value: false
})

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    showLogin: false,
    value: true
})

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then((res) => {
            const result = res.data.data;
            if(result) {
                dispatch(changeLogin())
            }else {
                alert('登录失败')
            }
            console.log(result);
        })

    }
}

export const changeLoginShow = () => ({
    type: constants.CHANGE_LOGIN_SHOW,
    showLogin: true
});

export const changeLoginClose = () => ({
    type: constants.CHANGE_LOGIN_CLOSE,
    showLogin: false
});

export const showLog = () => {
    return (dispatch) => {
        axios.get('/api/login.json').then((res) => {
            const result = res.data.showLogin;
            dispatch(changeLoginShow);
        })
    }
}
