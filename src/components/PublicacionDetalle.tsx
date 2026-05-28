import type { Publicacion } from '../types'
import ComentariosList from './ComentariosList'
import '../styles/PublicacionDetalle.css'

function PublicacionesDetalle({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {

  function Back() {
    setPublicacion(null)
  }

  return (
    <div className="PubDetalle">
      <button onClick={Back}>Volver</button>
      <img className='post' src={publicacion.imagen} alt={publicacion.descripcion} />
      <div className='post-info'>
        <h2>{publicacion.nomUsuario}</h2>
        <p>{publicacion.descripcion}</p>
        <p><span className="destacado">{publicacion.cantLikes}</span> likes</p>
        <p>{publicacion.fecha}</p>
      </div>
      <div className="com">
        <h3>Comentarios:</h3>
        <ComentariosList comentarios={publicacion.comentarios} />
      </div>
    </div>
  )
}

export default PublicacionesDetalle