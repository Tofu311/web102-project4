import { useState } from 'react'
import './App.css'
import Discover from './components/Discover';
import HistoryList from './components/HistoryList';
import BanList from './components/BanList';

function App() {
  const [history, setHistory] = useState([]) // Represents cats that we've seen
  const [banList, setBanList] = useState([])

  return (
    <>
      <h1>Cat Tinder</h1>
      <h3>Find your new non-human child</h3>
      😻
      <Discover />
      <HistoryList />
      <BanList />
    </>
  )
}

export default App;