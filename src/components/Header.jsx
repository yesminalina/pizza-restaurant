import Container from 'react-bootstrap/Container'
import '../assets/css/header.css'

const Header = () => {
  return (
    <Container fluid className='d-flex flex-column justify-content-center align-items-center header'>
      <article className='container text-center border-bottom'>
        <h1 className='fw-bold'>¡Mamma Mía!</h1>
        <h3 className='mb-4'>Tenemos las mejores pizzas que podrás encontrar</h3>
      </article>
    </Container>
  )
}
export default Header
