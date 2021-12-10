import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPlayer } from '../../redux/playerActions'
import PlayerCard from './PlayerCard'

class PlayerContainer extends Component {

    componentDidMount(){
        this.props.dispatchSetPlayer()
    }
    
    render(){
    
        return(
            <div>
                <h2>All Players</h2>
                <div>
                    {this.props.player.map(player => <PlayerCard key={player.id} {...player} />)}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        player: stateFromStore.people
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchSetPlayer: () => dispatch(setPlayer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)