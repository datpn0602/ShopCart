import React, { Component } from 'react';
//import * as Message from './../constants/Message';
import { connect } from 'react-redux';
import Message from './../component/Message';

class MessageContainer extends Component {
    showMessage(message) {

    }
    render() {
        let { message } = this.props;
        return (
            <Message message={message} />
        );
    }
}
const mapStateToProps = state => {
    return {
        message: state.message
    };
}
export default connect(mapStateToProps, null)(MessageContainer);
