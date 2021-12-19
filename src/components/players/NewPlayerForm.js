import { useState } from 'react'
import { useDispatch } from 'react-redux'
// import Dropzone from 'react-dropzone';

export default function NewPlayerForm() {
    const [playerFiles, setFiles] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createPlayer({player: player}))
        setFiles("")
    }

    return (

        <form onSubmit={handleSubmit}>
            <textarea value={playerFiles} onChange={e => setEvents(e.target.value)}></textarea>
            <input type="submit" />
        </form>
    
    )
}
