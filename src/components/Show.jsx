import { useState } from "react"
import MyButton from "./MyButton"

function Show() {
    const [showCounter, setShowCounter] = useState(false)

    return (
        <div><br />
            <label>
                <input 
                    type="checkbox" 
                    checked={showCounter}
                    onChange={() => setShowCounter(!showCounter)} />
                Show Counter
            </label> <br />
            {showCounter && <MyButton depends={true} />}
        </div>
    )
}

export default Show