import Profile from './components/Profile'
import ShoppingList from './components/Products'
import Show from './components/Show'
import MyButton from './components/MyButton'
import { useEffect } from 'react'
import './App.css'

function App() {
    useEffect(() => {
        sessionStorage.clear()
    }, [])

    return (
        <>
            <h1>Welcome to my app</h1>
            <Profile />
            <ShoppingList />
            <MyButton />
            <MyButton />
            <Show />
        </>
    )
}

export default App