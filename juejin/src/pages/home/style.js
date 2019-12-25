import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #eee;
`;

export const HomeNav = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
`;

export const HomeNavList = styled.div`
    position: relative;
    max-width: 960px;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    line-height: 1;
    background: #fff;
`;

export const HomeNavItem = styled.a`
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
    }
`;

export const ListItem = styled.div`
    position: relative;
    margin: 0 auto;
    margin-top: 25px;
    width: 100%;
    max-width: 960px;
    background: #fff;
`;

export const Li = styled.div`
    align-items: center;
    padding: 1.5rem 2rem;
    border-bottom: 1px solid rgba(178,186,194,.15);
    &:hover {
        background-color: rgba(0,0,0,.01);
    }
`;

export const Span = styled.div`
    display: flex;
    align-items: baseline;
    white-space: nowrap;
`;

export const H2 = styled.div`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const Main = styled.div`
    margin: .5rem 0 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`