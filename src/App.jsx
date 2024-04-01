import { Routes, Route } from 'react-router-dom'
import Carrito from './views/Carrito'
import Home from './views/Home'
import Pizza from './views/Pizza'
import NotFound from './views/NotFound'
import Navigation from './components/Navigation'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <Navigation />
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/pizza/:id' element={<Pizza />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
export default App
