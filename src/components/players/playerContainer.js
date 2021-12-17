import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom'

export default function PlayerContainer() {

    const players = useSelector((state) => state.players)
   
   
    return(
        <div>
            <h2>All Players</h2>
                <div className="align-self-center row row-cols-1 row-cols-md-3 g-4">
                    {players.map(p =>
                        <div key={p.id} className="col"> 
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                    <button type="button" className="btn btn-primary"><Link className="link-light" to={`${p.id}/hits`}>See More Stats</Link></button>
                                </div>
                            </div>
                        </div>    
                    )}
                </div>   
        </div>
    )

}