
import { useState } from 'react';
import { events } from './dataBank';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchEntries() {
	const [state, setState]=useState("")
	const {counter,setCounter}=useState(0)
	

return (

  <div>
  <label for="search">Search Entry by date</label>
	<input name="search" type="text" placeholder="enter date" value={state} onChange={(e)=>setState(e.target.value)}/>
	<h1>{state.toLocaleLowerCase()} </h1>

	{events.map(result=>{
	  let x = result.date.toLocaleLowerCase()
	  if(x.includes(state)){
		return (
		  <Table striped bordered hove variant="info">
		   <thead>
			 <tr>
			<th>Date</th>
			<th>Remark</th>          
			 </tr>
			 </thead> 
			 <tbody>
			   <tr key={()=>setCounter(counter+1	)}>
			  <td>{result.date}</td>
			  <td>{result.remark}</td>
			   </tr>
			 </tbody>
			
		   
		  </Table>
		)
	  } 
	})}
  
  </div>
);
	
}