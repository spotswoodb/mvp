import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchHits } from '../../redux/HitActions'

export default function HitsContainer(){
    
    const hits = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHits())
    }, [])

    return(
        <div>
            <h2>Pitch Type for every hit</h2>
            <ul>
                {hits.map(p => <li key={p.id}>{p.pitch_type}</li>)}
            </ul>
        </div>
    )


}