import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    ListItem,
    Li,
    Span,
    H2,
    Main
 } from '../style';

import * as actionCreators from '../store/actionCreators';

class List extends Component {

    constructor(props) {
        super(props);
        // this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    render() {
        const { list } = this.props;
        return (
            <ListItem> 
                { list.map((item, index) => (
                <Li 
                    key = {index} 
                    onClick = {(index) => this.props.handleDeleteItem(index)} 
                >
                    <Span>{item.get('id')}</Span>
                    <H2>{item.get('title')}</H2>
                    <Main>{item.get('article')}</Main>
                </Li>
                ))}
            </ListItem>
        )
    }
    
}


const mapStateToProps = (state) => ({
    list: state.getIn(['home', 'list'])//获得immtable对象对应的属性
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

export default connect(mapStateToProps, mapDispathToProps)(List);