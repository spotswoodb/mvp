import React from 'react'
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux'
// import { fetchHits } from '../../redux/PlayerHitActions'

export default function PlayerHitsContainer(props){
    
    const playerHits = props.hits

    // const playerHits = useSelector((state) => state.players.hits)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchHits(this.state.props.id))
    // }, [])

    return(
        <div>
            <h2>Hits for this player</h2>
            <ul>
                {playerHits.map(p => <li key={p.id}>{p.pitch_type}</li>)}
            </ul>
        </div>
    )


}