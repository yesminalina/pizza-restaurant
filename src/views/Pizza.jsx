import CardDetails from '../components/cards/CardDetails'
import NotFound from '../views/NotFound'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { PizzaContext } from '../context/PizzaContext'
import Container from 'react-bootstrap/Container'
import '../assets/css/pizza.css'

const Pizza = () => {
  const { id } = useParams()
  const { pizzas } = useContext(PizzaContext)

  const foundPizza = () => {
    const index = pizzas.findIndex((pizza) => (pizza.id === id))
    return pizzas[index]
  }

  if (!foundPizza()) {
    return <NotFound />
  }

  return (
    <Container fluid className='details-div'>
      {
        foundPizza()
          ? <CardDetails pizza={foundPizza()} />
          : <NotFound />
      }

    </Container>

  )
}
export default Pizza
