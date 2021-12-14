import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';


export default function PlayerHitsContainer(){
    
    let params = useParams();
    const players = useSelector((state) => state.players)
    const player = players.find(p => p.id === parseInt(params.id))

    return(
        <div>
            <h2>Hits for this player</h2>
            <ul>
                {player && player.hits.map(h => 
                    <li key={h.id}>{h.pitch_type}</li>
                )}
            </ul>
        </div>
    )


}