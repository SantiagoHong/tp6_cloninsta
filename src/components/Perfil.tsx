import type { Usuario } from "../types"

function Perfil({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {
  if (!perfil) {
    return null
  }

  function detallarPerfil() {
    setPerfilCargado(true)
  }

  return (
    <div className="perfil" onClick={() => detallarPerfil()}>
      <img src={`.../assets/images/${perfil.imagen}`} alt={perfil.nombre} />
      <h2>{perfil.nombre}</h2>
      <p>{perfil.cantSeguidores} seguidores</p>
      <p>{perfil.cantSeguidos} seguidos</p>

    </div>
  )
}

export default Perfil