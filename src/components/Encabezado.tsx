import logo from '../../assets/logo.png'
import config from '../../assets/config.png'
import foto from '../../assets/foto.png'
import mensaje from '../../assets/mensaje.png'
import '../styles/Encabezado.css'

function Encabezado() {

  return (
    <header className="encabezado">
      <img src={logo} alt="Logo" />
      <form>
        <input type="text" placeholder="Username, hashtag and story search" />
      </form>
      <img src={config} alt="Config" />
      <img src={foto} alt="Foto" />
      <img src={mensaje} alt="Mensaje" />
      <div>
        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5833 16.1442H9.75M15.5833 10.0865V16.1442V10.0865ZM15.5833 16.1442V22.2019V16.1442ZM15.5833 16.1442H21.4166H15.5833Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
          <path d="M15.5833 31.2885C23.6375 31.2885 30.1666 24.5082 30.1666 16.1442C30.1666 7.7803 23.6375 1 15.5833 1C7.52917 1 1 7.7803 1 16.1442C1 24.5082 7.52917 31.2885 15.5833 31.2885Z" stroke="white" stroke-width="2"/>
        </svg>

        <h2>New Post</h2>
      </div>
    </header>
  )
}

export default Encabezado
