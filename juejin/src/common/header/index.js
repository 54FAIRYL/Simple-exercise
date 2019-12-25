import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../../pages/login/';
import { actionCreators as loginActionCreators} from '../../pages/login/store'
import {
    HeaderWrapper,
    Logo,
    HeaderNav,
    HeaderNavItem,
    HeaderNavRight,
    HeaderNavInput,

} from './style';

class Header extends Component {

    render () {

        const { clickLogin, login, clickLogout } = this.props;
        return (
            <HeaderWrapper>
                <HeaderNav>
                    <Link to='./' >
                        <Logo />
                    </Link>
                    <Link to='/' ><HeaderNavItem>首页</HeaderNavItem></Link>
                    
                    <HeaderNavItem>沸点</HeaderNavItem>
                    <HeaderNavItem>话题</HeaderNavItem>
                    <HeaderNavItem>小册</HeaderNavItem>
                    <Link to='/activity'>
                        <HeaderNavItem>活动</HeaderNavItem>
                    </Link>
                    
                    <HeaderNavRight>
                        <HeaderNavInput />
                        <Link to='/Write'>
                            <HeaderNavItem className="right">写文章</HeaderNavItem>
                        </Link>
                        {
                            !login ? <HeaderNavItem className="right" onClick = {clickLogin} >登录</HeaderNavItem> :
                            <HeaderNavItem className="right" onClick = {clickLogout}  >登出</HeaderNavItem>
                        }
                        
                        <HeaderNavItem className="right">注册</HeaderNavItem>
                        <Login />
                    </HeaderNavRight>
                </HeaderNav>
            </HeaderWrapper>
        )
    }

    componentDidMount() {
        loginActionCreators.showLog();
    }
}

const mapStateToProps = (state) => ({
    showLogin: state.getIn(['login', 'showLogin']),
    login: state.getIn(['login', 'login'])
})

const mapDispatchToProps = (dispatch) => ({
    clickLogin() {
        dispatch(loginActionCreators.changeLoginShow());
    },

    clickLogout() {
        dispatch(loginActionCreators.logout());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);