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
                    <div key={h.id} className="col"> 
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{h.pitch_type}</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                </div>
                            </div>
                        </div>    
                    )}
            </ul>
        </div>
    )


}