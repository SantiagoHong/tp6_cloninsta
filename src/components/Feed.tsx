import type { Publicacion, Usuario } from '../types'
import PublicacionDetalle from './PublicacionDetalle'
import Publicaciones from './Publicaciones'
import PerfilDetalle from './PerfilDetalle'
import '../styles/Feed.css'

function Feed({ publicaciones, publicacion, setPublicacion, setPerfilCargado, perfilCargado, perfil }: { publicaciones: Publicacion[], publicacion: Publicacion | null, setPublicacion: any, setPerfilCargado: any, perfilCargado: boolean, perfil: Usuario | null }) {

  return (
    <div>
      
      {perfilCargado == false ? (
        publicacion == null ? (
          <>
            <h1>TRENDING</h1>
            <div className="masonry-grid">
              {publicaciones.map((pub) => (
                <Publicaciones key={pub.id} publicacion={pub} setPublicacion={setPublicacion} />
              ))}
            </div>
          </>
        ) : (
          <PublicacionDetalle publicacion={publicacion} setPublicacion={setPublicacion} />
        )
      ) : (
        perfil ? (
          <>
            <h1>PERFIL</h1>
            <PerfilDetalle perfil={perfil} setPerfilCargado={setPerfilCargado} />
          </>
        ) : (
          <p>Cargando perfil...</p>
        )
      )}
    </div>
  )
}

export default Feed