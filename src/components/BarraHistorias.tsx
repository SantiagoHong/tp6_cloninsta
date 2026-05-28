import type { Historia, Publicacion } from "../types"
import Historias from "./Historias"
import '../styles/BarraHistorias.css'

function BarraHistorias({ historias, publicacion, perfilCargado }: { historias: Historia[], publicacion: Publicacion | null, perfilCargado: boolean }) {

  return (
    <>
    {perfilCargado == false ? (
      publicacion == null ? (
            <>
              <h1>STORIES</h1>
              <div className="barra-historias">
                {historias.map((historia: Historia) => (
                  <Historias key={historia.id} historia={historia} />
                ))}
              </div>
            </>
          ) : (
            <></>
          )
        ) : (
          <></>
        )}
    </>
  )
}

export default BarraHistorias