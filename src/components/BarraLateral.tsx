import Perfil from "./Perfil"
import Opciones from "./Opciones"
import type { Usuario } from "../types"

function BarraLateral({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {

  return (
    <>
        {perfil && <Perfil perfil={perfil} setPerfilCargado={setPerfilCargado} />}
        <Opciones />
    </>
  )
}

export default BarraLateral