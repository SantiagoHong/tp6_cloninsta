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
        
         <h2>{perfil.nombre}</h2>
        <img className="pfp" src={Juan} alt={perfil.nombre} />
        <h1 className="descripcion">Descripción</h1>
        <p>{perfil.biografia}</p>
        <p>{perfil.cantSeguidores} seguidores</p>
        <p>{perfil.cantSeguidos} seguidos</p>
      </div>
    </>
    
  )
}

export default PerfilDetalle