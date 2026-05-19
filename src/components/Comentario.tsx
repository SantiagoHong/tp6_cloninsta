import type { Comentario } from '../types'

function Comentarios({ comentario }: { comentario: Comentario }) {
  return (
    <div>
      <h2>{comentario.texto}</h2>
      <p>{comentario.nomUsuario}</p>
    </div>
  )
}

export default Comentarios