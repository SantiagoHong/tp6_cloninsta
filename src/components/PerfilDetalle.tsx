import type { Usuario } from '../types'
import '../styles/PerfilDetalle.css'
import Juan from '../../assets/Juan.jpg'

function PerfilDetalle({ perfil, setPerfilCargado }: { perfil: Usuario | null, setPerfilCargado: any }) {
  if (!perfil) {
    return null
  }

  function Back() {
    setPerfilCargado(false)
  }
  return (
    <>
      <button onClick={Back}>Volver</button>

      <div className="PerfilDetalle">
        <h1 className="nombre">{perfil.nombre}</h1>
        <img className="pfp" src={Juan} alt={perfil.nombre} />
        <h1 className="descripcion">Descripción</h1>
        <p className="biografia">{perfil.biografia}</p>
        <div className="seguidores">
          <p><span className="destacado">{perfil.cantSeguidores}</span> seguidores</p>
          <p><span className="destacado">{perfil.cantSeguidos}</span> seguidos</p>
        </div>
      </div>
    </>
    
  )
}

export default PerfilDetalle