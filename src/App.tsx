import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import BarraHistorias from './components/BarraHistorias'
import BarraLateral from './components/BarraLateral'
import Feed from './components/Feed'
import usuario from './data/usuario.json'
import './App.css'
import type { Publicacion, Usuario } from './types'
import api from './services/api'

function App() {
  const [publicaciones, setPublicaciones] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [publicacion, setPublicacion] = useState(null)
  const [perfil, setPerfil] = useState<Usuario | null>(null)
  const [image, setImagen] = useState('')

  useEffect(() => {
    function ponerImagen() : string {
      api.get(`search?api_key=live_72bnRN72Nfz8O4DIvi9YPoWBx8P9SeFIxg8DaohRjLhfwD2KvKLdlo1R18OfBt4U`)
        .then((response) => {
          setImagen(response.data[0].url)
        })
      return image
    }

    for (let i = 0; i < usuario.publicacionesAso.length; i++) {
      for (let j = 0; j < usuario.publicacionesAso[i].comentarios.length; j++) {
        const com = {
          id: usuario.publicacionesAso[i].comentarios[j].id,
          texto: usuario.publicacionesAso[i].comentarios[j].texto,
          nomUsuario: usuario.publicacionesAso[i].comentarios[j].nomUsuario
        }
        usuario.publicacionesAso[i].comentarios[j] = com
      }
      const pub: Publicacion = {
        id: usuario.publicacionesAso[i].id,
        descripcion: usuario.publicacionesAso[i].descripcion,
        imagen: ponerImagen(),
        nomUsuario: usuario.publicacionesAso[i].nomUsuario,
        cantLikes: usuario.publicacionesAso[i].cantLikes,
        comentarios: usuario.publicacionesAso[i].comentarios,
        fecha: usuario.publicacionesAso[i].fecha
      }
    setPublicaciones((prev) => [...prev, pub]);
    }

    const p: Usuario = {
      nombre: usuario.nombre,
      imagen: usuario.imagen,
      biografia: usuario.biografia,
      cantPubl: usuario.cantPubl,
      cantSeguidores: usuario.cantSeguidores,
      cantSeguidos: usuario.cantSeguidos,
      publicacionesAso: usuario.publicacionesAso
    }
    setPerfil(p)
  }, [])

  return (
    <>
      <Encabezado />
      <BarraHistorias />
      <BarraLateral />
      <Feed publicaciones={publicaciones} publicacion={publicacion} setPublicacion={setPublicacion} />
    </>
  )
}

export default App
