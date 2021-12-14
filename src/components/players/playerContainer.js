import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

export default function PlayerContainer() {

    const players = useSelector((state) => state.players)
   
    return(
        <div>
            <h2>All Players</h2>
            <ul>
                {players.map(p => <li key={p.id}><Link to={`${p.id}/hits`}>{p.name}</Link></li>)}
            </ul>
        </div>
    )

}