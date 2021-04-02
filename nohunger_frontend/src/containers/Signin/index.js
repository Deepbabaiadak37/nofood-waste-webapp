import React, { useState } from 'react';
import Layout from '../../components/Layout';
import  {Container,Form,Button,Col,Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Home from '../Home';
import Input from '../../components/UI/Input';
import { Route } from 'react-router-dom';

import {Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authConstants, userContants } from "../../actions/constants";
import axios from "../../helpers/axios";


/**
/**
*@author
*function Signin
*/







export default class  Signin  extends React.Component {
	state={
		
		email : "",
		password : "",
		isLoggedIn : false
		

	};

	handleChange2= event =>{

    
		this.setState({ email: event.target.value,  });
	};

handleChange3= event =>{
		
		this.setState({ password: event.target.value });
	};


handleSubmit= ()=>{
	console.log(this.state);
	axios.post('http://127.0.0.1:3030/userroutes/login',this.state)
	.then(response=>{
		console.log(response);
			if(response.data.result == "ok")
			{
					       console.log("login  successfull");
					      
					   		 this.state ={
					              isLoggedIn : true,
					        		token : response.data.token       
					              }
					              localStorage.setItem("logstatus","true");
					              localStorage.setItem("token",this.state.token);
					            
					              //console.log(this.state.token);
					              window.location='/mainpage';
					              }

	})
	.catch(error =>{
		console.log(error)
	})
}






	render() {


      

							return (
							<Layout>
									 <Container  >
					              
					                <Row style={{ marginTop: '100px',marginBottom :'300px'}}>
					                    <Col md={{ span: 6, offset: 3 }}>
					                    	<h1 className="text-center" style={{ background: "linear-gradient(to right, #fc4a1a, #f7b733)",color : "white",borderRadius : '10px'}}>Sign-In</h1>
					                        	
					                        	 <Input
					                                label="Email"
					                                name="email"

					                                placeholder="Email"
					                         		value={this.state.email}
					                                onChange={this.handleChange2}    
					                                type="email"
					                               
					                            />
                                      
					                            <Input
					                                label="Password"
					                                name="password"
					                                placeholder="Password"
					                         		value={this.state.password}
					                                onChange={this.handleChange3}    
					                                type="password"
					                               
					                            />

					                            <Button onClick={this.handleSubmit}  type="submit">
					                                Log-In
					                            </Button>
					                       


					                    </Col>
					                </Row>

					            </Container>
							</Layout>
						);
		

		
        

	}

}