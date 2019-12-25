import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../login/store';
import { actionCreators as loginActionCreators} from '../login/store';


class Write extends PureComponent {

    render() {        
        const { loginStatus, gotoLogin } = this.props;

        if(loginStatus) {
            return (
                <div>写文章</div>
            )
        }else {
            return (
                <div>跳转登录界面</div>
            )
        } 
    }

    componentDidMount() {
        this.props.gotoLogin();
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    gotoLogin() {
        dispatch(loginActionCreators.changeLoginShow());
    }
})

export default connect(mapState, mapDispatch)(Write);