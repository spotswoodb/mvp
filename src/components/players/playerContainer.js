import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPlayers } from '../../redux/playerActions'
import PlayerCard from './PlayerCard'

class PlayerContainer extends Component {

    componentDidMount(){
        this.props.dispatchSetPlayers()
    }
    
    render(){
    
        return(
            <div>
                <h2>All Players</h2>
                <div>
                    {this.props.players.map(player => <PlayerCard key={player.id} {...player} />)}
                </div>
            </div>
        )

    }
}

function mapStateToProps(stateFromStore){
    return {
        players: stateFromStore.players
    }
}

function mapDispatchToProps(dispatch){
    return {
        dispatchSetPlayers: () => dispatch(fetchPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerContainer)