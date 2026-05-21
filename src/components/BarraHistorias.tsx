import type { Historia } from "../types"
import Historias from "./Historias"

function BarraHistorias({ historias }: { historias: Historia[] }) {

  return (
    <>
        {historias.map((historia: Historia) => (
            <Historias key={historia.id} historia={historia} />
        ))}
    </>
  )
}

export default BarraHistorias