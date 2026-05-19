import type { Comentario } from '../types'
import Comentarios from './Comentario'

function ComentariosList({ comentarios }: { comentarios: Comentario[] }) {

  return (
    <div>
        {comentarios.map((com) => (
            <Comentarios key={com.id} comentario={com} />
        ))}
    </div>
  )
}

export default ComentariosList