import React ,{useState}from 'react';
import Layout from '../../components/Layout'
import {Jumbotron,Searchbar,Footer,Navbar,FormControl,Form,Container,im,Col,Button,Row} from 'react-bootstrap';
import {Text} from 'react-router-dom';
import {Card,Toast,CardDeck} from "react-bootstrap";
import Input from '../../components/UI/Input';
import axios from 'axios';
import {NavLink,Link,Redirect} from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";


import { BsBoxArrowInRight,BsList,BsHouseDoor } from 'react-icons/bs';

export default class  Mainpage  extends React.Component  {

		state={
		
		city : "",
		listname : "Add to List",
		key : true,
		people :[],
		isLoggedIn : true
	
	};


handleList=event =>{

	window.location="/list";

}  

handleChange2= event =>{
		console.log(event.target.value);
		//complete...........................................................
		if(event.target.value=="")
		{
				
		axios.get('http://127.0.0.1:3030/userroutes/availabefood').then(response => {
			            
			            this.setState({people : response.data})
			            console.log("hagu")
						this.setState({ key : false })
			             })
		}
		this.setState({ city: event.target.value });


	};

handleSearch= () =>{
					
			 axios.get('http://127.0.0.1:3030/userroutes/availabefood?city='+this.state.city ).then(response => {
	            
	            this.setState({people : response.data})
	          // console.log(this.state.person);    
	            console.log(response.data);
	          //  console.log(this.state.person.length);
	          	if(response.data.length==0)
	          	{
	          		alert("no food items got")
	          	}
	           
	            })
		
	

}


addlist = (a) =>{
	

	//	console.log(a)
		const tok=localStorage.getItem("token");
	//	console.log(tok);

		var data=JSON.stringify({"food_id" : a});
	//	console.log(data);

		var config={
			method : 'patch',
			url : 'http://127.0.0.1:3030/userroutes/auth/claimfood',
			headers : {
				'authorization' : 'Bearer '+tok,
				'Content-Type' : 'application/json'
			},
			 data : data
		};


		axios(config)
		.then(function(response){
			console.log(JSON.stringify(response.data));
			alert("your item is added ")

		})
		.catch(function(error){
			console.log(error);
		});

}


		


logout = event =>{
	localStorage.setItem("logstatus","false");
		 localStorage.setItem("token","");
		console.log( localStorage.getItem("token"));
	
		window.location='/';
}

		

render(){
	
const ls=localStorage.getItem("logstatus");
if(ls=="false")
{

		 localStorage.setItem("token","");
		window.location='/';
	
}

		if ( this.state.key)	
	{		
		axios.get('http://127.0.0.1:3030/userroutes/availabefood').then(response => {
			            
			            this.setState({people : response.data})
			            console.log("hagu")
						this.setState({ key : false })
			             })

	}

			
	return (


			< >
					<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
					            <Col xs='6' sm='5'>
					                    
					                    <NavLink to="/mainpage" className="nav-link">
					                      <Navbar.Brand style={{display : "flex"}}><BsHouseDoor size="1.5rem" color="white" style={{ display : "flex"}}/> <h4 style={{ color : '#fff'}}>No-HuNGry</h4></Navbar.Brand>
					                   </NavLink>

					            </Col>
					              <Col xs='2' sm='3'>
					            </Col>


					            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
					            
					        <Col xs='4' sm='5'>
					            <Navbar.Collapse id="responsive-navbar-nav">
					          
					                
					                        <div style={{ paddingRight : "30px" }}> 
					                           <Button onClick={this.handleList} variant="light"><BsList size="1.5rem" color="blue"/>Your-List</Button>
					                          </div>
					                          <div>
					                            <Button  onClick={this.logout} variant="danger"><BsBoxArrowInRight size="1.5rem" color="violet"/>Log-Out</Button>
					                      		</div>

					                 

					         
					            </Navbar.Collapse>  
					       

					             </Col>
			           
			        </Navbar>
	
				
					
					<Jumbotron style={{  background : 'linear-gradient(to right,  #fc00ff, #00dbde)' }}>	
						<Row>
								<Col xs="2" sm="2">
					    		
								</Col>

							<Col xs="8" sm="8" >
								
								<Input
								placeholder='Enter City name from which you want to get Food'
								value={this.state.city}
					            onChange={this.handleChange2}    
					            type="text"

								/>

							</Col>
							<Col xs="2" sm="2">
					    		
								</Col>	
								   		 
					    </Row>
					    <Row>
					    		<Col xs="5" sm="5">
					    		</Col>
					    		
					    		<Col xs="4" sm="4">
					    		<Button  onClick={this.handleSearch}  type="search" style={{background: ' linear-gradient(to right, #fdfc47, #24fe41)' ,color : 'black'}} ><AiOutlineSearch/>Search</Button>
								</Col>
								
								<Col xs="3" sm="3">
					    		</Col>
					    </Row>                     
					                     
					</Jumbotron>



						
						{
							this.state.people.map((item)=>

								
								
								<div style={{display : 'inline-block'}} className="box">
										<Card  style={{marginLeft :'25px',width :'17rem',borderRadius : '18px',padding : '10px'}}>
											  <img class="card-img-top"  style={{height : '190px'}}src={ item.imageUrl}  alt="Card image cap"/>
											  
											  <div class="card-body">
											    <h5 class="card-title">{item.items}</h5>
											    <p class="card-text">
											    		<ul>
											    		<li><h4>{item.city}</h4></li>
											    		<li>FOOD-TYPE: {item.food_type}</li>
											    		<li>Max PEOPLE: {item.max_people}</li>
											    		
											    	</ul>
											    </p>
											   
											    <div>
												    <Card.Footer className="blockqoute-footer">
												    	<small className="text-muted">
												    	Posted By---<cite title>{item.posted_by}</cite>
												    	</small>
												    </Card.Footer>
												 </div>
											  </div>
											   <div className="text-center">
											    <Button  onClick={() => this.addlist(item._id) }  variant="primary">{this.state.listname}</Button>
											    </div>
										</Card>
								</div>
								

							)
						}

								<div>
									<Jumbotron fluid style={{margin : '2rem',background : '#0575e6', color : '#fff',height : '100%'}} className="text-center">
										  <Container>
										    <h1>Search For your nearby location and  find fooditems available or not </h1>
										    <p>
										    	<h1>Finally claim in your List</h1>
										    </p>
										    <p>
										    Any problem :  Conatct Us : +91- 6291259627
										    </p>
										  </Container>
										</Jumbotron>

							</div>


			</>

						
			
	

	
		);
	}
}

