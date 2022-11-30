import { useState } from "react"
import Buttons from "./Buttons"

const StateUnd = () => {
    const [count, setCount] = useState(0)
    const [inp, setInp] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const handleOnChange = (e) => {
        setInp(e.target.value)
        console.log(e.target.value)
    }

    const handleInputButton = () => {
        setCount(count + parseInt(inp))
    }

    return (
        <div>
            <h2>Count: {count}</h2>
            <Buttons 
                increment={increment}
                decrement={decrement}
            />

            <input type="text" onChange={handleOnChange} />
            <button onClick={handleInputButton}>ADD+++</button>
        </div>
    )

}

export default StateUnd