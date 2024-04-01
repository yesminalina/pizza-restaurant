import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Icon from '@mdi/react'
import { mdiTrashCanOutline } from '@mdi/js'
import { useContext, useEffect } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import '../assets/css/carrito.css'

const Carrito = () => {
  const { cart, addToCart, removeFromCart, removeAllFromCart, getTotal, total } = useContext(PizzaContext)
  const navigate = useNavigate()
  const payAndBackHome = () => {
    Swal.fire({
      title: '¿Estás seguro de realizar el pedido?',
      text: 'Si aceptas, el pago no podrá revertirse',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, comprar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: '!Pedido realizado con éxito!',
          text: 'Gracias por tu compra.',
          icon: 'success',
          confirmButtonColor: '#D11E36'
        })
        removeAllFromCart()
        navigate('/')
      }
    })
  }

  useEffect(() => {
    getTotal()
  }, [cart])

  const renderItems = cart.map((item) => (
    <Row className='py-2 gx-2 justify-content-center align-items-center mb-2 border-bottom border-warning-subtle' xs={2} md={4} key={item.id}>
      <Col><img src={item.img} width='150' /></Col>
      <Col><h3 className='text-uppercase'>{item.name}</h3></Col>
      <Col className='fs-5'>$ {item.price * item.qty}</Col>
      <Col className='d-flex justify-content-center align-items-center text-center'>
        <Button onClick={() => removeFromCart(item)} variant='secondary'>-</Button>
        <p className='mx-2 mb-0'>{item.qty}</p>
        <Button onClick={() => addToCart(item)} variant='danger'>+</Button>
      </Col>
    </Row>

  ))

  return (
    <Container className='carrito-div'>
      {cart.length > 0
        ? <Container className='bg-white border border-2 border-danger-subtle rounded-3 carrito'>
          Tu pedido:
          {renderItems}
          <Row className='justify-content-between align-items-center'>
            <Col className='d-flex m-3 justify-content-center align-items-center'>
              <h3 className='mb-0 me-2'>Total: $ {total}</h3>
              <Button size='lg' variant='warning' onClick={payAndBackHome}>Ir a Pagar</Button>
            </Col>
            <Col className='d-flex justify-content-end align-items-center me-4'>
              <span><p className='mb-0 pe-1'>Vaciar carrito</p></span>
              <Button size='sm' variant='outline-secondary' onClick={removeAllFromCart}><Icon path={mdiTrashCanOutline} size={0.8} /></Button>
            </Col>
          </Row>
        </Container>
        : <Container className='d-flex w-50 justify-content-center bg-white border border-2 border-dark-subtle rounded-3 opacity-75'>
          <h1>Carrito Vacío</h1>
        </Container>}
    </Container>
  )
}
export default Carrito
