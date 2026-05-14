import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import BarraHistorias from './components/BarraHistorias'
import BarraLateral from './components/BarraLateral'
import Feed from './components/Feed'
import { usuario } from './data/usuario'
import Usuario from './types/Usuario'
import './App.css'

function App() {
  //crear usuario logueado
  const [publicaciones, setPublicaciones] = useState(usuario.publicacionesAso)

  return (
    <>
      <Encabezado />
      <BarraHistorias />
      <BarraLateral />
      <Feed />
    </>
  )
}

export default App
