import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Header from '../components/Header'
import CardHome from '../components/cards/CardHome'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../assets/css/home.css'

const Home = () => {
  const { pizzas } = useContext(PizzaContext)

  const renderPizzas = pizzas.map((pizza) => (
    <Col key={pizza.id}>
      <CardHome pizza={pizza} />
    </Col>
  ))

  return (
    <>
      <Header />
      <Container fluid className='py-3 px-4 gallery'>
        <Row xs={2} md={4} className='g-4 justify-content-center'>
          {renderPizzas}
        </Row>
      </Container>
    </>
  )
}
export default Home
