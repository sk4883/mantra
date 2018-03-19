import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "./jsonData.json";

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
    	if(value === "More"){
    		this.setState({
    			showGetTime: true
    		});
    	}else if(value === "Oneday")
    	this.setState({
    		showGetTime: false,
    	    proceedForSelection: true
    	});
    }
    handleLanguageSelect(value) {
    	
    }
    proceedButton(e) {
    	e.preventDefault();
    	if(this.state.src && this.state.des && this.state.getRideTime) {
			this.setState({
				errorSrc: false,
				errorDes: false,
				errorGettime:false
				
			});
    }
    else if(this.state.src || this.state.des || this.state.getRideTime){
    	
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
		if(!this.state.getTime) {
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
			    	         <Link to="Srcdes">
			    			<button className="w3-button w3-blue w3-hovor-green btnstyle w3-col s4 m4 l4"> city </button>
			    			</Link>
			    			<button className="w3-button w3-yellow w3-hovor-green btnstyle w3-col s4 m4 l4"> Outstation </button>
			    			
			    			<Link to="rental">
			    			<button className="w3-button w3-blue w3-hovor-green btnstyle w3-col s4 m4 l4"> Rental </button>
			    			</Link>
			    		</div>

			    		<div className="w3-row formpos namepos">
			    			<label> Pickup From </label>
			    			&nbsp;&nbsp;&nbsp;
			    			<input className="textbox namepos " type ="text" onChange={this.src.bind(this)}placeholder="Destination" />
			    			{(this.state.errorSrc) ? 
	        		        <label className="warning">Pickup must not be empty!</label>
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
						  <input className="formpos" type="radio" name="trip"  value="Oneday"   onChange={this.changeOne.bind(this, "Oneday")} /> Oneday
						  <input className="formpos" type="radio" name="trip" value="More"  onChange={this.changeOne.bind(this, "More")} /> Multiple
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
						</div>s
			    		
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
