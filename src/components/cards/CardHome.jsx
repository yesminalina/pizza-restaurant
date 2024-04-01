import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import AddButton from '../buttons/AddButton'
import DetailsButton from '../buttons/DetailsButton'

const CardHome = ({ pizza }) => {
  return (
    <Card className='card-home'>
      <Card.Img variant='top' src={pizza.img} className='pb-0' />
      <Card.Body className='pb-0'>
        <Card.Title className='name'>{pizza.name}</Card.Title>
      </Card.Body>
      <Card.Body className='py-1'>
        <Card.Subtitle>Ingredientes:</Card.Subtitle>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        {pizza.ingredients.map((ingredient) => (
          <ListGroup.Item className='pt-0 pb-0' key={ingredient}><img alt='' src='/pizza-nav.svg' width='30' height='30' className='d-inline-block align-top me-1' />{ingredient}</ListGroup.Item>))}
      </ListGroup>
      <Card.Body className='pt-2 pb-0'>
        <Card.Title>$ {pizza.price}</Card.Title>
      </Card.Body>
      <Card.Body className='d-flex justify-content-between py-1 mb-2'>
        <DetailsButton id={pizza.id} />
        <AddButton pizza={pizza} />
      </Card.Body>
    </Card>
  )
}
export default CardHome
