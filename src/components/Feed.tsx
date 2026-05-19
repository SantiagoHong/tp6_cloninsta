import type { Publicacion } from '../types'
import PublicacionDetalle from './PublicacionDetalle'
import Publicaciones from './Publicaciones'

function Feed({ publicaciones, publicacion, setPublicacion }: { publicaciones: Publicacion[], publicacion: Publicacion, setPublicacion: any }) {

  return (
    <div>
      <h1>TRENDING</h1>
      
      {publicacion == null ? (
        publicaciones.map((pub) => (
          <Publicaciones key={pub.id} publicacion={pub} setPublicacion={setPublicacion} />
        ))
      ) : (
        <PublicacionDetalle publicacion={publicacion} setPublicacion={setPublicacion} />
      )}
    </div>
  )
}

export default Feed