import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../statics/iconfont/iconfont.css';
import {
    Contains,
    ActivityEvent
} from '../style'

class ActivityList extends Component {

    render () {

        const { message } = this.props;

        return (
            <Contains>
                { message.map((item, index) => (
                    <ActivityEvent key = {index}>
                        <img className='pic' src={item.get('imgUrl')}  alt='' />
                        <div className="message">
                            <div className="title">{item.get('title')}</div>
                            <div className="data"><span class="iconfont">&#xe60a;</span>{item.get('data')}</div>
                            <div className="button">
                                <span><span class="iconfont">&#xe628;</span>{item.get('location')}</span>
                                <div className="btn-join">报名参加</div>
                            </div>
                        </div>
                    </ActivityEvent>
                ))}
                
            </Contains>
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.getIn(['activity', 'message'])
});
const mapDispathToProps = (dispatch) => {
    // return {
    //     handleDeleteItem(index) {
    //         const action = actionCreators.deleteItem(index);
    //         // const action = actionCreators.ShowList(index);
    //         dispatch(action);
    //     }
    // }
}

export default connect(mapStateToProps, mapDispathToProps)(ActivityList);