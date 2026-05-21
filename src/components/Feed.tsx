import type { Publicacion, Usuario } from '../types'
import PublicacionDetalle from './PublicacionDetalle'
import Publicaciones from './Publicaciones'
import PerfilDetalle from './PerfilDetalle'

function Feed({ publicaciones, publicacion, setPublicacion, setPerfilCargado, perfilCargado, perfil, setLoading }: { publicaciones: Publicacion[], publicacion: Publicacion | null, setPublicacion: any, setPerfilCargado: any, perfilCargado: boolean, perfil: Usuario | null, setLoading: any }) {

  return (
    <div>
      <h1>TRENDING</h1>
      
      {perfilCargado == false ? (
        publicacion == null ? (
          publicaciones.map((pub) => (
            <Publicaciones key={pub.id} publicacion={pub} setPublicacion={setPublicacion} />
          ))
        ) : (
          <PublicacionDetalle publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      ) : (
        perfil ? (
          <PerfilDetalle perfil={perfil} setPerfilCargado={setPerfilCargado} />
        ) : (
          <p>Cargando perfil...</p>
        )
      )}
    </div>
  )
}

export default Feed