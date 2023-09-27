//import component from third party library
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import from inner library
import ComponentLibraryList from '@/components/ComponentLibraryList';



export default function Home() {
  return (
    <main>
      <Container>
      <Row>
        <Col><Button variant="dark" size="lg"><h1>Hello there, the angel from my nightmare</h1></Button></Col>
        <Col><Button variant="dark" size="lg"><h1>The Shadow in the Background of the Morgue</h1></Button></Col>
      </Row>
      <Row>
        <Col><p>The unsuspecting victim</p></Col>
        <Col><p>Of darkness in the valley</p></Col>
      </Row>
      <Col>
        <Row><p>We can live like Jack and Sally if we want</p></Row>
        <Row><p>Where you can always find me</p></Row>
      </Col>
      <Row>
        <Col>
          <Button variant="primary"><ComponentLibraryList /></Button>
        </Col>
      </Row>
    </Container>
      
      
    </main>
  )
}
