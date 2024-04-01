import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import Icon from '@mdi/react'
import { mdiCartVariant } from '@mdi/js'
import { useContext, useEffect, useState } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import '../assets/css/navigation.css'

const Navigation = () => {
  const { cart, total, getTotal } = useContext(PizzaContext)

  const itemsCount = cart.reduce((acc, curr) => (acc + curr.qty), 0)

  useEffect(() => {
    getTotal()
  }, [cart])

  // cambia color del navbar
  const [colorNav, setColorNav] = useState(false)
  const changeColorNav = () => {
    window.scrollY >= 90 ? setColorNav(true) : setColorNav(false)
  }
  window.addEventListener('scroll', changeColorNav)

  return (
    <Navbar fixed='top' className={colorNav ? 'nav-bar nav-bar-scroll' : 'nav-bar'}>
      <Container>
        <Navbar.Brand className='brand-text'>
          <NavLink to='/'>
            <img
              alt=''
              src='/pizza-icon-nav.png'
              width='30'
              height='30'
              className='d-inline-block align-top'
            />{' '}¡Mamma Mía!
          </NavLink>
        </Navbar.Brand>
        <Nav className='align-items-center'>
          <NavLink to='/carrito' className='position-relative me-3 mt-2'>
            <Icon path={mdiCartVariant} size={1.5} color='white' />
            <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
              {itemsCount}
            </span>
          </NavLink>
          {cart.length !== 0 ? <Nav>$ {total}</Nav> : null}
        </Nav>
      </Container>
    </Navbar>
  )
}
export default Navigation
