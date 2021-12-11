import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchPlayers } from '../../redux/PlayerActions'

export default function PlayerContainer() {

    const players = useSelector((state) => state.players)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPlayers())
    }, [])

    return(
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    )

}