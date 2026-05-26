import Perfil from "./Perfil"
import Opciones from "./Opciones"
import type { Usuario } from "../types"
import '../styles/BarraLateral.css'

function BarraLateral({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {

  return (
    <aside className="barra-lateral">
        {perfil && <Perfil perfil={perfil} setPerfilCargado={setPerfilCargado} />}
        <Opciones />
    </aside>
  )
}

export default BarraLateral