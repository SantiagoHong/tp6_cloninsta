import type { Publicacion } from '../types'
import '../styles/Publicaciones.css'

function Publicaciones({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {

  function verDetalles() {
    setPublicacion(publicacion)
  }


  return (
    <div className="publicacion-card" onClick={() => verDetalles()}>
      <img src={publicacion.imagen} alt={publicacion.descripcion} />
      <p>{publicacion.nomUsuario}</p>
    </div>
  )
}

export default Publicaciones