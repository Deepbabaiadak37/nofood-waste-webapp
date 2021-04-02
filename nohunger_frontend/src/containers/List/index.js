import React ,{useState}from 'react';
import Layout from '../../components/Layout'
import {Jumbotron,Searchbar,Footer,Navbar,FormControl,Form,Container,im,Col,Button,Row} from 'react-bootstrap';
import {Text} from 'react-router-dom';
import {Card,Toast,Nav,CardDeck} from "react-bootstrap";
import Input from '../../components/UI/Input';
import axios from 'axios';
import {NavLink} from 'react-router-dom'
import { BsPersonPlus,BsPerson,BsHouseDoor,BsBoxArrowInRight,BsList} from 'react-icons/bs';

export default class  List  extends React.Component  {

		state={
		
		tok : "",
		key : true,
		listname : "Added to list",
		foo : [],
		isLoggedIn : true
	
	};


handleList=event =>{

	window.location="/list";

}  
handleSearch= () =>{
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
		const tok=localStorage.getItem("token");
			
		
		var config={
			method : 'get',
			url : 'http://127.0.0.1:3030/userroutes/auth/claimedlist',
			headers : {
				'authorization' : 'Bearer '+tok,
				'Content-Type' : 'application/json'
			}
		};


		axios(config)
		.then(response=>{
					//console.log(JSON.stringify(response.data));
			 // console.log(response.data);
			  
			
			  this.setState({ foo : response.data})
			  console.log(this.state.foo)
			  this.setState({ key : false })

		})
		.catch(error=>{
			console.log(error);
		});



		}
		
		console.log("hellow")
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
			                            <Button onClick={this.handleSearch} variant="danger"><BsBoxArrowInRight size="1.5rem" color="violet"/>Log-Out</Button>
			                      		</div>

			                 

			         
			            </Navbar.Collapse>  
			       

			             </Col>
			           
			        </Navbar>
	

					<Jumbotron style={{  background : 'linear-gradient(to right,  #fc00ff, #00dbde)' }}>	
						
					    <Row>
					    		<Col xs="4" sm="4">
					    		</Col>
					    		
					    		<Col xs="4" sm="4">
					    		<h1 style={{color : 'white'}} className="text-center">
					    		These are your claim food lists
					    		</h1>
					    		</Col>
								
								<Col xs="4" sm="4">
					    		</Col>
					    </Row>                     
					                     
					</Jumbotron>




						{this.state.foo.map((i)=>

								
								
								<div style={{display : 'inline-block'}} className="box">
										<Card  style={{marginLeft :'25px',width :'17rem',borderRadius : '18px',padding : '10px'}}>
											  <img class="card-img-top"  style={{height : '190px'}}src={ i.imageUrl}  alt="Card image cap"/>
											  
											  <div class="card-body">
											    <h5 class="card-title">{i.items}</h5>
											    <p class="card-text">
											    		<ul>
											    		<li><h4>{i.city}</h4></li>
											    		<li>FOOD-TYPE: {i.food_type}</li>
											    		<li>Max PEOPLE: {i.max_people}</li>
											    		
											    	</ul>
											    </p>
											   
											    <div>
												    <Card.Footer className="blockqoute-footer">
												    	<small className="text-muted">
												    	Posted By---<cite title>{i.posted_by}</cite>
												    	</small>
												    </Card.Footer>
												 </div>
											  </div>
											   <div className="text-center">
											    <Button variant="outline-dark" className="text-muted">{this.state.listname}</Button>
											    </div>
										</Card>
								</div>
								

							)
						}


			</>

						
			
	

	
		);
	}
}

