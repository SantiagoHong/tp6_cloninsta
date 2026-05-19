import type { Publicacion } from '../types'

function Publicaciones({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {
  
  function verDetalles() {
    setPublicacion(publicacion)
  }


  return (
    <div onClick={() => verDetalles()}>
      <img src={publicacion.imagen} alt={publicacion.descripcion} />
      <p>{publicacion.nomUsuario}</p>
    </div>
  )
}

export default Publicaciones