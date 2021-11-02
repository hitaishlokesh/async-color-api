import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://jonasjacek.github.io/colors/data.json?`
      )
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container'>
      <Header />
      <Search items={items} />
    </div>
  )
}

export default App
