import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchHits } from '../../redux/PlayerHitActions'

export default function PlayerHitsContainer(props){
    
    const playerHits = useSelector((state) => state.playerHits)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHits(this.state.props.id))
    }, [])

    return(
        <div>
            <h2>Hits for this player</h2>
            <ul>
                {playerHits.map(p => <li key={p.id}>{p.pitch_type}</li>)}
            </ul>
        </div>
    )


}