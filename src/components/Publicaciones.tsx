import api from '../services/api'
import type { Publicacion } from '../types'

function Publicaciones({ publicacion, setPublicacion }: { publicacion: Publicacion, setPublicacion: any }) {
  
  function verDetalles() {
    api.get(`search?api_key=live_72bnRN72Nfz8O4DIvi9YPoWBx8P9SeFIxg8DaohRjLhfwD2KvKLdlo1R18OfBt4U`)
      .then((response) => {
        setPublicacion(response.data)
      })
  }

  return (
    <div onClick={() => verDetalles()}>
      <h2>{publicacion.imagen}</h2>
      <p>{publicacion.nomUsuario}</p>
    </div>
  )
}

export default Publicaciones