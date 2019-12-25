import styled from 'styled-components';

export const ActivityWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #eee;
`;

export const ActivityNav = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`;

export const ActivityNavList = styled.div`
    position: relative;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    background: #fff;
`;

export const ActivityNavItem = styled.a`
    height: 100%;
    align-items: center;
    display: flex;
    flex-shrink: 0;
    color: #71777c;
    padding: 14px 0.8rem;
    cursor: pointer;
    &:hover {
        color: #007fff;
    }
    &.right {
        position: absolute;
        right: 0;
        .iconfont {
            padding-right: 8px;
        }
    }
    &.hovered {
        position: relative;
        .iconfont {
            transform:rotate(180deg);
            position: relative;
            transform-origin: 50% 50%;
        }
    }
    .rotate-enter {
        transform: rotate(0);
        transition: all 0.2s ease-out;
    }
    .rotate-enter-active {
        transform: rotate(180deg);
    }

    .rotate-exit {
        transform: rotate(180deg);
        transition: all 0.2s ease-out;
    }
    .rotate-exit-active {
        transform: rotate(0deg);
    }
`;

export const ActivityUl = styled.ul`
    display: none;
    width: 100px;
    background: #fff;
    position: absolute;
    top: 44px;
    left: 0px;
    &.show {
        display:block
    }
`;

export const Contains = styled.div`
    width: 960px;
    margin: 0 auto;
    padding-top: 25px;
`;

export const ActivityEvent = styled.a`
    display: inline-block;
    cursor: pointer;
    width: 25%;
    box-sizing: border-box;
    transition: all 0.2s linear;
    padding: 5px 10px 10px 0;
    color: #333;
    .pic {
        width: 100%;
    }
    .message {
        width: 100%;
        padding: 20px 12px 15px;
        box-sizing: border-box;
        background: #fff;
    }
    .title {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        height: 40px;
        font-size: 14px;
        font-weight: 700;
    }
    .data {
        height: 16.7px;
        margin-top: 6px;
        font-size: 12px;
    }
    .button{
        font-size: 12px;
        height: 25px;
        margin-top: 6px;
        .btn-join {
            float: right;
            width: 100px;
            height: 25px;
            border-radius: 30px;
            background-color: #4d91fd;
            line-height: 25px;
            text-align: center;
            color: #fff;
            font-size: 14px;
        }
    }
    .iconfont {
        padding-right: 8px;
        color: #333;
    }
`;

// export const Img = styled.img.attrs{
    
// }`


// `