import React,{Component} from 'react';
import Layout from '../../components/Layout'
import {Jumbotron,Footer,Link,Navbar,Container,im,Col,Button,Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import './home.css';
import { BsPlusSquareFill,BsPersonPlus,BsFillPuzzleFill,BsAward } from 'react-icons/bs';
import { AiOutlineBulb} from 'react-icons/ai';
/**
/**
*@author
*function Home
*/


export default class  Home extends React.Component  {



	render(){

		

	return (
		<Layout>
			<div className="bckim" style={{  
				  backgroundImage: "url(" + "https://images.unsplash.com/photo-1592868859049-dfdcd6c07c29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" + ")",
				  backgroundPosition: 'center',
				height : '500px',
				paddingTop : '130px',
				  backgroundSize: 'cover',
				  backgroundRepeat: 'no-repeat'
				}}>

<Jumbotron style={{marginLeft : '2rem',height: '300px',marginRight : '2rem',background : '#D7DDE8', color : 'black',opacity: '0.4'}} className="text-center">
			<h1 style={{ color : 'black'}}>

					WASTING

					FOOD IS LIKE 
					<h1 style={{background:'black',color :'white',fontStyle : 'bold'}}>
					STEALING FROM THE POOR
					</h1>
			</h1>

			</Jumbotron>
						

				</div>








<Jumbotron style={{margin : '2rem',background : '#0575e6', color : '#fff',opacity: '0.8'}} className="text-center">
			<h1 style={{fontSize : '50px'}}>
											Welcome to our page

										</h1>
										<p style={{ color  : '#fff',fontStyle :'bold'}}>
											Food waste or food loss is food that is not eaten. The causes of food waste or loss are numerous and occur throughout the food system, during production, processing, retail and consumption. Global food loss and waste amount to between one-third and one-half of all food produced.
											Keep Donate with us .
										</p>

				

				<p>
				
				        
					<Button style={{opacity : 10.5}} className="donate">
					<NavLink to="/donate" style={{color : "white"}} className="nav-link">
							<BsPlusSquareFill color="white"  />     DONATE</NavLink>	
					</Button>
					
				</p>

			</Jumbotron>
			
			<Container style={{width: '100%',paddingRight : '30px'}}>
			
				<Row>
			        <Col xs="4" sm="4">
			        	<img alt="food1" style={{borderRadius : '15px'}} className="img-thumbnail" src={ process.env.PUBLIC_URL+"/image/h1.jpg"} width="300px" />
			        	<h5>In Lockdown help Others</h5>
			        </Col>
			        <Col xs="4" sm="4">
			        	<img alt="food2" style={{borderRadius : '15px'}} className="img-thumbnail" src={ process.env.PUBLIC_URL+"/image/h4.jpg"} width="300px" />
			        	<h5>Get From us </h5>
			        </Col>
			        <Col xs="4" sm="4">
			        	
			        	<img alt="food3" style={{borderRadius : '15px'}} className="img-thumbnail" src={ process.env.PUBLIC_URL+"/image/h3.jpg"} width="300px" />
			        	<h5>With good quality Foods</h5>
			        </Col>
		      </Row>
		</Container>
		
		<Jumbotron  style={{marginTop : '2rem',opacity : '0.6',height : '300px',background:"linear-gradient(to right, #ff00cc, #333399)", color : '#fff'}} className="text-center">
			
				<Row style={{marginTop : '0px'}}>
			        <Col xs="9" sm="9">
			        	<h3 style={{color : '#fff'}}>HOW TO REDUCE FOOD WASTES AT HOME?</h3>
			        	<li>WRITE GOOD LISTS & SNAP GOOD SHELFIES</li>
			        	<li>BEING THRIFTY WITH YOUR FOOD</li>
			        	<li>OPTIMISE YOUR AT-HOME STORAGE</li>
			        	<li>CHILL THE FRIDGE OUT</li>
			        	<li>SAVE COST WITH A DEFROST</li>
			        	
			        </Col>
			   
			        <Col xs="3" sm="3">
			        	
			        	<img alt="food3"  style={{borderRadius : '15px',height : '200px'}} className="img-thumbnail" src={ process.env.PUBLIC_URL+"/image/desc.jpg"} width="300px" />
			        	
			        </Col>
		      </Row>
				
			</Jumbotron>

<Container className="text-center">		
		<Row>
		  <Col xs="4" sm="4">
		  	<AiOutlineBulb color="#f80759" size="100px"/>
		  </Col>

		<Col xs="4" sm="4">
		 <BsFillPuzzleFill color="#f80759" size="100px"/>
		  </Col>
		<Col xs="4" sm="4">
		<BsAward color="#f80759" size="100px"/>
		  </Col>


		</Row>
</Container>

			<Container>
			<div className="text-center">
				Once you know what’s in the freezer, it’s just about a little bit of forward planning to save money and a last-minute dash to the shops. For the least amount of hassle, pop the food you’ve previously frozen in the fridge overnight to defrost it. If you’re defrosting chicken, check the on-pack guidance and make sure you’ve left enough time for it to defrost properly in the fridge. And if you’re defrosting in the microwave, just make sure you’ve got no frozen or cold spots in the middle – using your microwave’s defrost setting will make this easier. Once defrosted, cook it within 24 hours. And once cooked, you’ve got a couple of days for it to stay in the fridge, or you can freeze it again if you need to. For more, hints and tips around freezing and defrosting food, check out our A-Z of Food Storage.

			</div>
			</Container>


					
	
	

		</Layout>
		);
	}

}