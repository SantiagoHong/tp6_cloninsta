import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import BarraHistorias from './components/BarraHistorias'
import BarraLateral from './components/BarraLateral'
import Feed from './components/Feed'
import usuario from './data/usuario.json'
import './App.css'
import type { Historia, Publicacion, Usuario } from './types'
import api from './services/api'
import Loader from './components/Loader'

function App() {
  const [publicaciones, setPublicaciones] = useState<Publicacion[]>([])
  const [loading, setLoading] = useState(false)
  const [publicacion, setPublicacion] = useState<Publicacion | null>(null)
  const [perfil, setPerfil] = useState<Usuario | null>(null)  
  const [perfilCargado, setPerfilCargado] = useState(false)
  const [historias, setHistorias] = useState([])

  async function ponerImagen():Promise<string> {
    setLoading(true)
    const response = await api.get(`search?api_key=live_72bnRN72Nfz8O4DIvi9YPoWBx8P9SeFIxg8DaohRjLhfwD2KvKLdlo1R18OfBt4U`)
    setLoading(false)
    return response.data[0].url;
  }

  useEffect(() => {  
    const cargarDatos = async () => {
      for (let i = 0; i < usuario.publicacionesAso.length; i++) {

        for (let j = 0; j < usuario.publicacionesAso[i].comentarios.length; j++) {
          const com = {
            id: usuario.publicacionesAso[i].comentarios[j].id,
            texto: usuario.publicacionesAso[i].comentarios[j].texto,
            nomUsuario: usuario.publicacionesAso[i].comentarios[j].nomUsuario
          }
          usuario.publicacionesAso[i].comentarios[j] = com
        }

        const imagen = await ponerImagen();
        

        const pub: Publicacion = {
          id: usuario.publicacionesAso[i].id,
          descripcion: usuario.publicacionesAso[i].descripcion,
          imagen: imagen,
          nomUsuario: usuario.publicacionesAso[i].nomUsuario,
          cantLikes: usuario.publicacionesAso[i].cantLikes,
          comentarios: usuario.publicacionesAso[i].comentarios,
          fecha: usuario.publicacionesAso[i].fecha
        }
        setPublicaciones((prev) => [...prev, pub]);
      }
      for (let k = 0; k < usuario.historiasAso.length; k++) {
        const imagen = await ponerImagen();

        const his: Historia = {
          id: usuario.historiasAso[k].id,
          nomUsuario: usuario.historiasAso[k].nomUsuario,
          imagen: imagen
        }
        setHistorias((prev) => [...prev, his]);
      }

      const p: Usuario = {
        nombre: usuario.nombre,
        imagen: usuario.imagen,
        biografia: usuario.biografia,
        cantPubl: usuario.cantPubl,
        cantSeguidores: usuario.cantSeguidores,
        cantSeguidos: usuario.cantSeguidos,
        historiasAso: historias,
        publicacionesAso: publicaciones
      }
      setPerfil(p)
      
    }
    
    cargarDatos()
  }, [])



  return (
    <div className="app-container">
      <BarraLateral perfil={perfil} setPerfilCargado={setPerfilCargado} />
      <div className="contenido-principal">
        <Encabezado />

        {loading ? (
          <Loader />
        ) : (
          <>
            <BarraHistorias historias={historias} publicacion={publicacion} perfilCargado={perfilCargado} />
            <Feed publicaciones={publicaciones} publicacion={publicacion} setPublicacion={setPublicacion} setPerfilCargado={setPerfilCargado} perfilCargado={perfilCargado} perfil={perfil} />
          </>
        )}
      </div>
    </div>
  )
}

export default App
