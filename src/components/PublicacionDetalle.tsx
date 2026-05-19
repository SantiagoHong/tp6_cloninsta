import type { Publicacion } from '../types'
import ComentariosList from './ComentariosList'

function PublicacionesDetalle({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {

  function Back() {
    setPublicacion(null)
  }
  return (
    <div>
      <button onClick={Back}>Volver</button>
      <img src={publicacion.imagen} alt={publicacion.descripcion} />
      <p>{publicacion.nomUsuario}</p>
      <p>{publicacion.descripcion}</p>
      <p>{publicacion.cantLikes} likes</p>
      <p>{publicacion.fecha}</p>
      <h3>Comentarios:</h3>
      <ComentariosList comentarios={publicacion.comentarios} />
    </div>
  )
}

export default PublicacionesDetalle