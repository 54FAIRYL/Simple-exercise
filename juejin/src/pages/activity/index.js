import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../statics/iconfont/iconfont.css';
import { CSSTransition } from 'react-transition-group';
import ActivityList from './components/activityList';
import axios from 'axios';
import { 
    ActivityWrapper, 
    ActivityNav, 
    ActivityNavList, 
    ActivityNavItem,
    ActivityUl

} from './style';
import { constants } from './store';

class Activity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false
        }
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleonMouseLeave = this.handleonMouseLeave.bind(this);
    }

    render() {

        const { topic } = this.props;
        return (
            <ActivityWrapper>
                <ActivityNav>
                    <ActivityNavList>
                        {topic.slice(0, 6).map((item) => (
                           <ActivityNavItem>{item}</ActivityNavItem> 
                        ))}
                        
                            <ActivityNavItem
                                className={this.state.hovered ? 'hovered' : ''}
                                onMouseEnter={this.handleMouseEnter}
                                onMouseLeave={this.handleonMouseLeave}
                            >
                                其他
                                <CSSTransition
                                    timeout={200}
                                    in={this.state.hovered}
                                    classNames='rotate'
                                >
                                    <span className={this.state.hovered ? 'hovered iconfont' : 'iconfont'}>&#xe6bb;</span>
                                </CSSTransition>
                                <ActivityUl className={this.state.hovered ? 'show' : ''}>
                                    {topic.slice(6, -1).map((item) => (

                                        <ActivityNavItem>{item}</ActivityNavItem> 
                                    ))}
                                </ActivityUl>
                            </ActivityNavItem>
                        <ActivityNavItem className='right'><span class="iconfont">&#xe624;</span>活动合作</ActivityNavItem>
                    </ActivityNavList>
                </ActivityNav>
                <ActivityList />
            </ActivityWrapper>
        )
    }

    handleMouseEnter () {
        this.setState ({
            hovered: true
        })
    }

    handleonMouseLeave() {
        this.setState ({
            hovered: false
        })
    }

    componentDidMount() {
        axios.get('/api/activity.json').then((res) =>{
            const topic = res.data.topic;
            const message = res.data.message;
            const action = {
                type: constants.CHANGE_ACTIVITY_TOPIC,
                topic: topic,
                message: message
            }
            this.props.changeActivityTopic(action);
        })
    }
}

const mapState = (state) => ({
    topic: state.getIn(['activity', 'topic']),
    message: state.getIn(['activity', 'message'])
});

const mapDispatch = (dispatch) => ({
    changeActivityTopic(action) {
        dispatch(action);
    },
})

export default connect(mapState, mapDispatch)(Activity);