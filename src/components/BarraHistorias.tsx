import type { Historia } from "../types"
import Historias from "./Historias"
import '../styles/BarraHistorias.css'

function BarraHistorias({ historias }: { historias: Historia[] }) {

  return (
    <div className="barra-historias">
      {historias.map((historia: Historia) => (
        <Historias key={historia.id} historia={historia} />
      ))}
    </div>
  )
}

export default BarraHistorias