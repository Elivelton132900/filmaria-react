import './styles.css'
import Routes from "./routes"
import '../node_modules/react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

// https://sujeitoprogramador.com/r-api/?api=filmes api

export default function App() {
  return(
    <div className="app">
      <Routes/>
      <ToastContainer autoClose={3000}></ToastContainer>
    </div>
  )
}