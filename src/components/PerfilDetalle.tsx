import type { Usuario } from '../types'

function PerfilDetalle({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {
  if (!perfil) {
    return null
  }

  function Back() {
    setPerfilCargado(false)
  }
  return (
    <div>
      <button onClick={Back}>Volver</button>
      <img src={perfil.imagen} alt={perfil.nombre} />
      <h2>{perfil.nombre}</h2>
      <p>{perfil.biografia}</p>
      <p>{perfil.cantSeguidores} seguidores</p>
      <p>{perfil.cantSeguidos} seguidos</p>
    </div>
  )
}

export default PerfilDetalle