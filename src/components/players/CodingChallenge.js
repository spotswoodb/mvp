import { useState } from 'react'

export default function CodingChallenge() {
    
    const [input, setInput] = useState('')
    const [total, setTotal] = useState(0)

    const handleSubmit = (event) => {
        event.preventDefault()
        const inputCount = parseInt(event.target.value)
        const prevTotal = total
        setTotal(prevTotal + inputCount)
        setInput('')
    }

    return (
        <form>
            <label>
                <input
                    type='text'
                    name='input'
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                />
            </label>
            <button type="submit" value={input.length} onClick={handleSubmit}>Click me!</button>
            <p>{total}</p>
        </form>
    )
}






