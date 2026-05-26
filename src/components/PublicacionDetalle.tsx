import type { Publicacion } from '../types'
import ComentariosList from './ComentariosList'
import '../styles/PublicacionDetalle.css'

function PublicacionesDetalle({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {

  function Back() {
    setPublicacion(null)
  }
  return (
    <div>
      <button onClick={Back}>Volver</button>
      <img className='post' src={publicacion.imagen} alt={publicacion.descripcion} />
      <div className='post-info'>
        <h2>{publicacion.nomUsuario}</h2>
        <p>{publicacion.descripcion}</p>
        <p>{publicacion.cantLikes} likes</p>
        <p>{publicacion.fecha}</p>
      </div>
      <h3>Comentarios:</h3>
      <ComentariosList comentarios={publicacion.comentarios} />
    </div>
  )
}

export default PublicacionesDetalle