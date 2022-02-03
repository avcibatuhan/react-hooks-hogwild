import React, { useState } from "react";
import Nav from "./Nav";
import 'semantic-ui-css/semantic.min.css'
import hogs from "../porkers_data";
import HogCard from "./Card";

function App() {
	const [greased,setGreased] = useState(false);
	const [filter,setFilter] = useState("");
	const handleFilterChange = (e) => {
		setFilter(e.target.value)
		//returnHogs = hogs.filter((x)=>x.name.toLowerCase().includes(filter.toLowerCase()));
	}
	const handleGreasedChange = (e) => {
		setGreased(!greased)
	}
	var returnHogs = hogs;
	if(greased === true){
		if(filter !== "")
		{
			returnHogs = hogs.filter((x) => x.greased === true)
			returnHogs = returnHogs.filter((x)=>x.name.toLowerCase().includes(filter.toLowerCase()));
			console.log(returnHogs)
		} 
		else
		{
			returnHogs = hogs.filter((x) => x.greased === true)
		}
	}
	if(greased === false){
		if(filter !== ""){
			returnHogs = hogs.filter((x)=>x.name.toLowerCase().includes(filter.toLowerCase()));
			
		}else {
			returnHogs = hogs
		}
	}
	return (
		<div className="App">
			<Nav />
			<label>
			<input type="checkbox" onChange={handleGreasedChange}/>
			Only Greased Hogs
			</label> <br/>
			<label>
				<input type="text" onChange={handleFilterChange} value={filter}/>
				Filter By Name
			</label> <br/>
			<label>
			<input type="text" />
				Filter By Weight
			</label><br/>
			<div style={{display:'flex'}}>
			{
			
			returnHogs.map((hog,index)=>{
				return <HogCard key={index} hog={hog} />
			})}
			</div>

		</div>
	);
}

export default App;
