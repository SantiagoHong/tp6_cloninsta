import type { Usuario } from "../types"
import Juan from '../../assets/Juan.jpg'
import '../styles/Perfil.css'

function Perfil({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {
  if (!perfil) {
    return null
  }

  function detallarPerfil() {
    setPerfilCargado(true)
  }

  return (
    <div className="perfil" onClick={() => detallarPerfil()}>
      <img src={Juan} alt={perfil.nombre} />
      <h2>{perfil.nombre}</h2>
      <p><span className="destacado">{perfil.cantSeguidores}</span> seguidores</p>
      <p><span className="destacado">{perfil.cantSeguidos}</span> seguidos</p>

    </div>
  )
}

export default Perfil