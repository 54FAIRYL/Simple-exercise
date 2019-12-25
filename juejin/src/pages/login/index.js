import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    LoginWrapper, 
    LoginBox, 
    Input, 
    Button,
    PromptBox
} from './style';
import { actionCreators } from './store';

class Login extends PureComponent {

    render() {        
        const { loginStatus, close, showLogin } = this.props;

        if(!loginStatus) {
            return (
                <LoginWrapper className={showLogin ? 'show' : ''}>
                    <LoginBox>
                        <img className="loginPic" src="https://b-gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" alt='' />
                        <h1 className="loginTitle" >登录 <span className="close_login" onClick={close}>×</span></h1>
                        <Input placeholder='请输入手机号或邮箱' ref={(input) => {this.account = input}} />
                        <Input placeholder='请输入密码' type='password' ref={(input) => {this.password = input}} />
                        <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
                        <PromptBox>
                            <span className="left">没有账号？ 注册</span>
                            <span className="right">忘记密码</span>
                        </PromptBox>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to='/' />
        } 
    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login']),
    showLogin: state.getIn(['login', 'showLogin'])
})

const mapDispatch = (dispatch) => ({
    close() {
        dispatch(actionCreators.changeLoginClose())
    },

    login(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        console.log(accountElem, passwordElem);
    }
})

export default connect(mapState, mapDispatch)(Login);