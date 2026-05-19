import type { Publicacion } from '../types'
import ComentariosList from './ComentariosList'

function PublicacionesDetalle({ publicacion }: { publicacion: Publicacion }) {

  return (
    <div>
      <h2>{publicacion.imagen}</h2>
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