import { useSelector } from 'react-redux';
import { useState } from "react";
import { Link } from 'react-router-dom'

export default function PlayerContainer() {

    const playersInRedux = useSelector((state) => state.players)
    const [players, setPlayers] = useState(playersInRedux)
    const [isAlphabetized, setIsAlphabetized] = useState(false)

    // second attempt

   
    // button to alphabetize players
    // onClick => alphabetizes the players, click again => return it to it's original state
    // using local state
    // onClick function inside button
    // return to original state

    // go over what has to happen to render the sorted Array to the page => setState
    // use tern line 39
    // study async

    // const sortPlayers = () => {
    //     if (isAlphabetized){
    //         setPlayers(playersInRedux)
    //     } else {
    //         const sortedPlayers = [...players].sort(function(a, b) {
    //             if (a.name < b.name){
    //                 return -1
    //             }
    //             if (a.name > b.name){
    //                 return 1
    //             }
    //             return 0
    //         })
    //         setPlayers(sortedPlayers)
    //     }
    //     setIsAlphabetized(!isAlphabetized)
    // }

    // second attempt

    // const sortPlayers = () => {
    //     if (isAlphabetized) {
    //         setPlayers(playersInRedux)
    //     } else {
    //         const sortedPlayers = [...players].sort((a, b) => {
    //             if (a.name < b.name) {
    //                 return -1
    //             }
    //             if (a.name > b.name) {
    //                 return 1
    //             }
    //             return 0
    //         })
    //         setPlayers(sortedPlayers)
    //     }
    //     setIsAlphabetized(!isAlphabetized)
    // }

    // third attempt with ternary

    const sortPlayers = () => {
        if (isAlphabetized) {
            setPlayers(playersInRedux)
        } else {
            const sortedPlayers = [...players].sort((a, b) => {
                return ((a.name === b.name) ? 0 : ((a.name > b.name)? 1: -1));
            })
            setPlayers(sortedPlayers)
        }
        setIsAlphabetized(!isAlphabetized)
    }


   
    return(
        <div className="player-container">
            <h2 className="text-center">All Players</h2><br></br>
            <button onClick={sortPlayers}>Alphabetize</button>
                <div className="d-flex justify-content-center align-items-center container">
                    <div className="align-self-center row row-cols-1 row-cols-md-3 g-4">
                        {players.map(p =>
                            <div key={p.id} className="col"> 
                                <div className="card" style={{width: '18rem'}}>
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <button type="button" className="btn btn-primary"><Link className="link-light" to={`${p.id}/hits`}>See More Stats</Link></button>
                                    </div>
                                </div>
                            </div>    
                        )}
                    </div>   
                </div>
        </div>
    )

}

