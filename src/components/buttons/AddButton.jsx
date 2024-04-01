import Button from 'react-bootstrap/Button'
import { useContext } from 'react'
import { PizzaContext } from '../../context/PizzaContext'

const AddButton = ({ pizza }) => {
  const { addToCart } = useContext(PizzaContext)

  return (
    <>
      <Button className='btn-add' variant='danger' onClick={() => addToCart(pizza)}>Añadir</Button>
    </>
  )
}
export default AddButton
