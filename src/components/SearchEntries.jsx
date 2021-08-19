
import { useState } from 'react';
import { events } from './dataBank';
import { Table, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function SearchEntries() {
	
	
	

return (
<ClickHandler/>
)

}
function ClickHandler() {
const [entryIndex, setEntryIndex]=useState(0)
	
	return (
		events.map((entry,index)=> {if (entryIndex===index) { 
			return <div key={index}>
				<Table variant="dark"  >
					<thead key={index}>
						<tr>
							
							<td>Date</td>
							<td>Entry</td>
						</tr>
					</thead>
					<tbody >
						<tr>
							<td >
								{entry.date}
							</td>
							<td>{entry.remark}</td>
						</tr>
					</tbody>
				</Table>
				<Button variant="outline-primary" onClick={(e)=> setEntryIndex(entryIndex +1)} >Load Next</Button>
			</div>}}
			
		
		
	
	)
	
	
	)
	
}