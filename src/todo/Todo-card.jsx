
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function TodoCard() {


   

  return (
    <Card >
      {/* <Card.Header>Featured</Card.Header> */}
      <Card.Body>
        <Card.Title> <b>Title:</b> {task.title}</Card.Title>
        <Card.Text>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default TodoCard;