import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPlayer } from '../../redux/playerActions'

class PlayerContainer extends Component {

    componentDidMount(){
        fetch("")
        .then(r => r.json())
        .then(playersArray => this.props.dispatchSetPlayer(playersArray))
    }
    
    render(){
    
        return(
            <div>
                <h2>All Players</h2>
                {/* <div> */}
                    {/* {this.props.message.map(message => <p key={id}>{message.text}</p>)} */}
                {/* </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)