import logo from '../../assets/logo.png'
import config from '../../assets/config.png'
import foto from '../../assets/foto.png'
import mensaje from '../../assets/mensaje.png'
import newPost from '../../assets/newPost.png'
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
        <img src={newPost} alt="New Post" />
        <h2>New Post</h2>
      </div>
    </header>
  )
}

export default Encabezado
