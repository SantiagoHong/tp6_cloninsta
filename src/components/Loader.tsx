import '../styles/Loader.css'
import loadingGif from '../../assets/loading.gif'

function Loader() {

  return <img className="loader" src={loadingGif} alt="Loading..." />
}

export default Loader