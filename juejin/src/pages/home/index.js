import React, { Component } from 'react';
import { connect } from 'react-redux';
import{ actionCreators, constants } from './store/index';
import axios from 'axios';
import List from './components/List';
import { 
    HomeWrapper, 
    HomeNav, 
    HomeNavList, 
    HomeNavItem,

} from './style';

class Home extends Component {

    

    render() {

        const { topic, list } = this.props;
        return (
            <HomeWrapper>
                <HomeNav>
                    <HomeNavList>
                        {topic.map((item) => (<HomeNavItem>{item}</HomeNavItem>))}
                        <HomeNavItem className='right'>标签管理</HomeNavItem>
                    </HomeNavList>
                </HomeNav>
                <List/>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        axios.get('/api/homeList.json').then((res) =>{
            const list = res.data.list;
            const topic = res.data.topic;
            const action = {
                type: constants.SHOW_LIST,
                list: list,
                topic: topic
            }
            this.props.changeHomeList(action)
        })
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'list']),
    topic: state.getIn(['home', 'topic'])
});

const mapDispatch = (dispatch) => ({
    changeHomeList(action) {
        // const action = actionCreators.getHomeInfo();
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Home);