import { useEffect, useState } from "react"

function MyButton({ depends }) {
    const [count, setCount] = useState(() => {
        const storedCount = sessionStorage.getItem('myButtonCount')
        return storedCount && depends === true 
        ? JSON.parse(storedCount) : 0
    }, depends)

    return (
        <button 
            onClick={() => handleClick(depends)}
            style={{ marginLeft: '19px' }} >
            Clicked {count} times!
        </button>
    )

    function handleClick(depends) {
        setCount(count + 1)
        if (depends) sessionStorage
        .setItem('myButtonCount', JSON.stringify(count + 1))
    }    
}

export default MyButton