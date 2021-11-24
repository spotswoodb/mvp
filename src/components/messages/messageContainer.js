import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setMessage } from './../../redux/messageActions'

class MessageContainer extends Component {

    componentDidMount(){
        fetch("")
        .then(r => r.json())
        .then(messagesArray => this.props.dispatchSetMessage(messagesArray))
    }
    
    render(){
    
        return(
            <div>
                <h2>All Messages</h2>
                <div>
                    {/* {this.props.message.map(message => <p key={id}>{message.text}</p>)} */}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        message: state.message
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchSetMessage: () => dispatch(setMessage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer)