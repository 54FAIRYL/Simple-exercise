import styled from 'styled-components';

export const LoginWrapper = styled.div`
    display: none;
    z-index: 999;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: rgba(0,0,0,0.1);
    font-size: 14px;
    color: #767676;
    &.show {
        display: block;
    }
    
`;

export const LoginBox = styled.div`
    width: 270px;
    margin: 145px auto;
    padding: 6px 24px 24px 24px;
    background: #fff;
    box-shadow: 0 0 8px rgb(0, 0, 0, .1);
    .loginPic {
        position: absolute;
        width: 120px;
        top: 65px;
        left: 46%;
    }
    .loginTitle {
        color: #333;
        margin-button: 24px;
        font-size: 18px;
        position: relative;
        .close_login {
            position: absolute;
            top: 0px;
            right: 0;
            font-size: 25px;
            color: #767676;
            cursor: pointer;
        }
    }
`;

export const Input = styled.input`
    display: block;
    width: 270px;
    height: 40px;
    line-height: 18px;
    padding: 10px;
    color: #777;
    margin: 10px auto;
    box-sizing: border-box;
    border-radius: 2px;
    outline: none;
    border: 1px solid #e9e9e9;

`;

export const Button = styled.div`
    width: 270px;
    height: 40px;
    line-height: 30px;
    color: #fff;
    background: #3194d0;
    border-radius: 2px;
    margin: 10px auto;
    text-align: center;
    padding: 6px 15.6px;
    box-sizing: border-box;
`;

export const PromptBox = styled.div`
    width: 270px;
    margin: 12px 0 0 0;
    .right {
        float: right;
    }
`;
