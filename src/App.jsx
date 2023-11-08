
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import {Header} from "./components/Header"

import { CharactersProvider } from './components/CharactersContext'


import './App.css'

function App() {
  const [favorites, setFavorites] = useState([])
  
  
  useEffect(()=>{
    console.log(favorites)
  },[])


  return (
    <CharactersProvider>
      <Container id="app-container">
          <Row>
            <Header favorites={favorites} setFavorites={setFavorites} /> 
          </Row>
          <Row>
            <Outlet context={{favorites, setFavorites}} />
          </Row>
      </Container>
    </CharactersProvider>
  )
}

export default App
