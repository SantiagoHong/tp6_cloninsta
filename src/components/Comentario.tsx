import type { Comentario } from '../types'
import '../styles/Comentario.css'

function Comentarios({ comentario }: { comentario: Comentario }) {
  
  return (
    <div className="comentario-card">
      <h2>{comentario.texto}</h2>
      <p>{comentario.nomUsuario}</p>
    </div>
  )
}

export default Comentarios