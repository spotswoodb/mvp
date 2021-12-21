import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function PlayerHitsContainer(){
    
    let params = useParams();
    const players = useSelector((state) => state.players)
    
    const player = players.find(p => p.id === parseInt(params.id))

    return(
        <div className="player-hits container">
            <h2 className="text-center">Hits for this player</h2>

            
            <ul>
                {player && player.hits.map(h => 
                    <div key={h.id} className="d-flex justify-content-center align-items-center container"> 
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">Game Date: {h.game_date}</h5>
                                    <li className="card-pitch-type m-2">Pitch type: {h.pitch_type}</li>
                                    <li className="card-event m-2">Event: {h.event}</li>
                                    <li className="card-bb-type m-2">Type of hit: {h.bb_type}</li>
                                    <li className="card-hit-distance m-2">Hit Distance: {h.hit_distance}</li>
                                </div>
                            </div>
                        </div>    
                    )}
            </ul>
        </div>
    )


}