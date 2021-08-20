
import { useState } from 'react';
import { events } from './dataBank';
import { Button, ListGroup,ListGroupItem,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchEntries() {

return (

<ClickHandler/>
)

}



function ClickHandler() {
const [entryIndex, setEntryIndex]=useState(0)
const [number, setNumber]=useState(1)
	return (
		events.map((entry,index)=> {if (entryIndex===index) { 
			return <div key={index}>
	 
<Card style={{ width: '18rem' }}>
   <Card.Img variant="top" style={{width:"fit-content", objectFit: "none"}} src={`https://picsum.photos/283/300?random=${number}`}/>
   <Card.Body>
    <Card.Title style={{color: "seagreen", border:"1px solid", width:"fit-content"}} >Get Random Entries</Card.Title>
    <Card.Text>
     {entry.remark}
    </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
    <ListGroupItem>{entry.date}</ListGroupItem>
    <ListGroupItem variant="info">
		<Button variant="outline-primary" onClick={()=> {
			setEntryIndex(entryIndex +1)
			setNumber(number+1)
		}} >Load Next</Button>
	 <Button variant="outline-primary" onClick={(e)=> setEntryIndex(entryIndex -1)} >Load Prev</Button>
	</ListGroupItem>  
  </ListGroup> 
</Card>
</div>}}
			
			
	
	))
	
}