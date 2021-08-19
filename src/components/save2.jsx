
import { useState } from 'react';
import { events } from './dataBank';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function SearchEntries() {
let randomDate;
let randomEntry;
let [state, setState] = useState(randomDate,randomEntry);

 let entries = events.map((e,i)=>e.remark)
  randomEntry= entries[Math.floor(Math.random()*entries.length)]
 let periods= events.map((d,i,c)=> d.date)
 randomDate=periods[Math.floor(Math.random()*periods.length)]
	return (<h3>We we</h3>,
	<div>
		
		<button onClick= {()=> setState(`${randomDate} ${randomEntry}`)} >Open</button>
		<button onClick={()=>setState(state ="")} >close</button>
		Count: {state}
	</div>


)


	
}