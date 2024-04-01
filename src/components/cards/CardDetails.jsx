import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import AddButton from '../buttons/AddButton'

const CardDetails = ({ pizza }) => {
  return (
    <Card className='container mt-5 cardborder border-3 rounded-4'>
      <Row className='d-flex align-items-center g-0 row row-cols-1 row-cols-md-2'>
        <Col>
          <Card.Img className='text-center' src={pizza.img} />
        </Col>
        <Col>
          <Card.Body className='text-center mt-3'>
            <Card.Title className='title fw-bold text-uppercase'>{pizza.name}</Card.Title>
            <Card.Text>{pizza.desc}</Card.Text>
            <Card.Subtitle className='text-start pb-1'>Ingredientes:</Card.Subtitle>
            <ListGroup className='list-group-flush text-start'>
              {pizza.ingredients.map((ingredient) => (
                <ListGroup.Item key={ingredient}><img alt='' src='/pizza-nav.svg' width='30' height='30' className='d-inline-block align-top me-1' />{ingredient}</ListGroup.Item>
              ))}
            </ListGroup>
            <Container fluid className='d-flex justify-content-between align-items-center mt-1'>
              <h3>Precio: $ {pizza.price}</h3>
              <AddButton pizza={pizza} />
            </Container>
          </Card.Body>
        </Col>
      </Row>

    </Card>
  )
}
export default CardDetails
