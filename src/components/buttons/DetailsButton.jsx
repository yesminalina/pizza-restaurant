import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const DetailsButton = ({ id }) => {
  const navigate = useNavigate()
  const goToPizza = () => {
    navigate(`/pizza/${id}`)
  }

  return (
    <Button className='btn-det border-0' onClick={goToPizza}>Ver más</Button>
  )
}
export default DetailsButton
