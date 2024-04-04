import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Layout() {
  
  let a=5;
  let b=8;
  console.log(a,b)
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Layout;