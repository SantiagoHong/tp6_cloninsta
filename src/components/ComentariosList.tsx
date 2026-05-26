import type { Comentario } from '../types'
import Comentarios from './Comentario'
import '../styles/ComentariosList.css'

function ComentariosList({ comentarios }: { comentarios: Comentario[] }) {

  return (
    <div className="comentarios-list">
        {comentarios.map((com) => (
          <Comentarios key={com.id} comentario={com} />
        ))}
    </div>
  )
}

export default ComentariosList