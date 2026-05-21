import type { Historia } from "../types"


function Historias({ historia }: { historia: Historia }) {

  return (
    <div className="historia">
      <img src={historia.imagen} alt={historia.nomUsuario} />
      <p>{historia.nomUsuario}</p>
    </div>
  )
}

export default Historias