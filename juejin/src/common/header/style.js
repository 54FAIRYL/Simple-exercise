import styled from 'styled-components';
import logoPic from '../../statics/logo.svg';

export const HeaderWrapper = styled.div`
    height: 60px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    display: inline-block;
    height: 38px;
    width: 98px;
    background: url(${logoPic});
    background-size: contain;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 20px;
`;

export const HeaderNav = styled.div`
    width: 960px;
    height: 60px;
    padding-right: 70px;
    box-sizing: border-box;
    margin:0 auto;
    line-height: 60px;
`
export const HeaderNavItem = styled.div`
    display: inline-block;
    line-height:56px;
    padding: 0 20px;
    color: #71777c;
    font-size: 1.18rem;
    cursor: pointer;
    &:hover {
        color: #007fff;
    }
    &.right {
        padding 0 10px;
        color: #007fff;
        font-size:1.1rem;
        // &.login {
        //     display: none;
        // }
    }
`

export const HeaderNavRight = styled.div`
    float: right;
    margin-right: -150px;
`

export const HeaderNavInput = styled.input.attrs({
    placeholder: '搜索掘金'
})`
    width: 160px;
    height: 38px;
    border: 1px solid #f0f0f0;
    outline: none;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    background: rgba(227, 231, 236, 0.2);
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`