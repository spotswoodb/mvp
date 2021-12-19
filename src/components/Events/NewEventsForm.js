import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Dropzone from 'react-dropzone';
export default function NewEventsForm() {
    const [eventFiles, setEvents] = useState("")
    const dispatch = useDispatch()
    
    function handleSubmit(e) {
        e.preventDefault();
    }

    return (

        <form>
            <textarea value={eventFiles} onChange={e => setEvents(e.target.value)}></textarea>
            <input type="submit" />
        </form>
    
    )
}
