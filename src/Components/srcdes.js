import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./jsonData.json";
import Reveal from "./Reveal.js";

export default class Srcdes extends Component{
	constructor(args) {
		super(args);
		this.state = {
			src:"",
			errorSrc:false,
			des:"",
			errorDes:false,
			showGetTime: false,
			dataFile: data,
			getRideTime:"",
			errorGettime:false,
			proceedForSelection: false
		};
	}

	    src(e)
	    {
	 	let source= e.target.value;
		if(source.length > 0 ){
			this.setState({
				src:source
			});
			console.log("src check",this.state.src)
		}
		}


		des(e)
	{
		let destination= e.target.value;
		if(destination.length > 0 ){
			this.setState({
				des:destination
			             });
		}
    }
    changeOne(value){
    	console.log("~~~~~", value);
    	if(value === "later"){
    		this.setState({
    			showGetTime: true
    		});
    	}else if(value === "now")
    	this.setState({
    		showGetTime: false,
    		proceedForSelection: true
    	});
    }
   
    proceedButton(e) {
    	e.preventDefault();

    	console.log("check",this.state.src)
    	if(this.state.src && this.state.des && this.state.getTime) {
			this.setState({
				errorSrc: false,
				errorDes: false,
				errorGettime :false
			
				
			});
    }
    else if(this.state.src || this.state.des || this.state.getTime){
    	
			this.setState({
				errorSrc: false,
				errorDes: false,
				errorGettime: false
				
			});
    }
    if(!this.state.src){
			this.setState({

				errorSrc: true
			})
		} 
		if(!this.state.des) {
			this.setState({
				errorDes: true
			})
		} 
		
		if(!this.state.getRideTime) {
			this.setState({
				errorGettime: true
			})
		} 
	}

    getTime(e) {
    	let valueTime = e.target.value;
    	if(valueTime.length > 0){
    		this.setState({
    			getRideTime: valueTime
    		})
    	}
    }
    cardSelected(dataValue){
    	
    }

render(){
	var display = [];
	if(this.state.dataFile.length > 0) {
		display = this.state.dataFile.map((data, idx) => {
			console.log("~~~~", data);
			return (
					<div >
					<div className="w3-row" key={"index" + idx} style={{border: "1px solid #000", cursor: "pointer", padding: "20px", margin: "20px"}} onClick={this.cardSelected.bind(this, data)}>
						<label className="w3-col s4 m4 l4">{data.car_type}</label>
						<label className="w3-col s4 m4 l4">{data.price}</label>
						<img className="w3-col s4 m4 l4" src={data.path} style={{width: "30px", height: "30px"}} />
					</div>
					</div>
				);
		});
	}
		return(
			<div className="w3-container">
			    <div className="w3-row">

			    	<div className="w3-col s5 m5 l5">
			    	   <form style={{paddingTop:"60px"}}>
			    	    <div className="w3-row formpos">
			    			<button className="w3-button w3-yellow w3-hovor-green btnstyle w3-col s4 m4 l4"> city </button>
			    			<Link to="outstation">
			    			<button className="w3-button w3-blue w3-hovor-green btnstyle w3-col s4 m4 l4"> Outstation </button>
			    			</Link>
			    			<Link to="rental">
			    			<button className="w3-button w3-blue w3-hovor-green btnstyle w3-col s4 m4 l4"> Rental </button>
			    			</Link>
			    		</div>

			    		<div className="w3-row formpos namepos">
			    			<label> Pickup From </label>
			    			&nbsp;&nbsp;&nbsp;
			    			<input className="textbox namepos " type ="text" onChange={this.src.bind(this)}placeholder="Source" />
			    			{(this.state.errorSrc) ? 
	        		        <label className="warning">Source must not be empty!</label>
	        		        :null
	        				}
			    		
			    		</div>


			    		<div className="w3-row formpos namepos">
			    			<label> Drop To </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    			<input className="textbox namepos " type ="text" onChange={this.des.bind(this)}placeholder="Destination" />
			    			{(this.state.errorDes) ? 
	        		        <label className="warning">Destination must not be empty!</label>
	        		        :null
	        				}
			    		</div>

			    		<div className="w3-row">
						  <input className="formpos" type="radio" name="gender" value="now"   onChange={this.changeOne.bind(this, "now")} /> Now
						  <input className="formpos" type="radio" name="gender" value="later"  onChange={this.changeOne.bind(this, "later")} /> Later
						</div> 

						<div className="w3-row">
						{(this.state.showGetTime) ? 
							<div>
				            <input className="namepos formpos textbox" type="text" placeholder="Enter time here" onChange={this.getTime.bind(this)} />
							{display}
							{(this.state.errorGettime) ?
							<label className="Warning"> Enter Time</label> 
							: null
							 }
							 </div> :
							 <div>
							 {(this.state.proceedForSelection) ?
							 	<div>
							 	{display}
							 	</div> :
							 	null
							 }
							 </div>
							}
						</div>
			    		
			    		<div className="w3-row formpos">
			    			<button className="w3-button w3-yellow w3-hovor-green" onClick={this.proceedButton.bind(this)}> Proceed </button>
			    		</div>
			    	</form>

			    	</div>
			    	<div className="w3-col s7 m7 l7 backgroundimg" style={{minHeight: "100vh"}}>
			    	</div>
			    </div>
			</div>
			);
	}
	}
