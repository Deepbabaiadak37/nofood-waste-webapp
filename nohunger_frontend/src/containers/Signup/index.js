import React, { useState } from 'react';
import Layout from '../../components/Layout';
import  {Container,Form,Button,Col,Row,Alert} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

import Input from '../../components/UI/Input';

import {Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authConstants, userContants } from "../../actions/constants";
import axios from "../../helpers/axios";


/**
*@author
*function Signup
*/


export default class  Signup  extends React.Component {
	state={
		username : "",
		email : "",
        key1 : "",
        key2 : "",
        key3 : "",
        key4 : "",
		password : "",
        variante :"",
        variantu :"",
        variantp :"",
        variantc :"",
        errore : "",
        erroru: "",
        type : "",
        errorp : "",
        errorc : "",
        address : "",
		contact : ""

	};



handleaddress= event =>{
//console.log(event.target.value);
this.setState({
    address : event.target.value
})

}

handletype= event =>
{
this.setState({
    type : event.target.value
})
}

handleChange1= event =>{
        if(!/^[A-Za-z]{3,}/i.test(event.target.value))
        {
            this.setState({ username: event.target.value });
            this.setState({ erroru: "user name  in  alphabets only valid and more than 3 letters" });
            this.setState({ variantu: "danger" });
            this.setState({ key1 : "false"})
        }
        else
        {
        this.setState({ username: event.target.value });
        this.setState({ erroru:"Looking nice" });
        this.setState({ variantu : "success"})    		
        this.setState({ key1 : "true"})	
        }
	};



	handleChange2= event =>{

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(event.target.value)) {
        this.setState({ email: event.target.value });
        this.setState({ errore: "invalid email address" });
        this.setState({ variante : "danger"})
        this.setState({ key2 : "false"})

        }
  else
  {
		
		this.setState({ email: event.target.value });
        this.setState({ errore: "valid email ok" });
        this.setState({ key2 : "true"})        
        this.setState({ variante : "success"})        
    }
	};



handleChange3= event =>{
    
		 if(event.target.value.length<=7)
        {
            this.setState({ password: event.target.value });
            this.setState({ errorp: "password length need to be  8 or greater" });
            this.setState({ variantp: "danger" });
            this.setState({ key3 : "false"})
        }
        else
        {
            this.setState({ password: event.target.value });
        this.setState({ errorp:"nice password" });
        this.setState({ variantp : "success"});
        this.setState({ key3 : "true"})          
    
        }		
	};
handleChange4= event =>{
		 if(event.target.value.length<=9 )
        {
            this.setState({ contact: event.target.value });
            this.setState({ errorc: "Invalid phone number" });
            this.setState({ variantc: "danger" });
            this.setState({ key4 : "false"})
        }
        else if (event.target.value.length>=11)
        {
            this.setState({ contact: event.target.value });
            this.setState({ errorc: "Invalid phone number" });
            this.setState({ variantc: "danger" });
            this.setState({ key4 : "false"})

        }
        else
        {
        this.setState({ contact : event.target.value });
        this.setState({ errorc : "validated" });
        this.setState({ variantc : "success"}) 
        this.setState({ key4 : "true"})         
    
        }       

	};


handleSubmit= ()=>{
    if(this.state.key1 == "false" || this.state.key2 == "false" || this.state.key3 == "false" || this.state.key4 == "false")
    {
        alert("pls input valid entries");
        console.log(this.state.key1 , this.state.key2 , this.state.key3 ,this.state.key4 )
    }
    else if(this.state.key1 == "true" || this.state.key2 == "true" || this.state.key3 == "true" || this.state.key4 == "true")
    {
        	console.log(this.state);
        	axios.post('http://127.0.0.1:3030/userroutes/signup',this.state)
        	.then(response=>{
        		console.log(response.data);
                alert("Signup complete....");
                window.location='/signin';
        	   

        	})
        	.catch(error =>{

        		alert(error);
                alert("user exists");

        	})

    }
}


	render() {
		return (
		<Layout>
				 <Container>
              
                <Row style={{ marginTop: '100px',marginBottom :'50px'}}>
                    <Col md={{ span: 6, offset: 3 }}>
                        
                            <h1 className="text-center" style={{ background: "linear-gradient(to right, #fc4a1a, #f7b733)",color : "white",borderRadius : '10px'}}>Sign-Up</h1>
                            <Row>
                                <Col md={12} xs={12}>
                                    <Input
                                        label="User Name"
                                        placeholder="User Name"
                                        value={this.state.username}
                                        onChange={this.handleChange1}
                                        type="text"
                                       
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} xs={12}>
                                <div >
                                    <Alert variant={this.state.variantu}>
                                                 {this.state.erroru}
                                    </Alert>
                                </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} xs={6}>
                                    <Input
                                        label="Email"
                                        placeholder="Email"
                                         value={this.state.email}
                                        onChange={this.handleChange2}
                                        title="Please enter a valid email."
                                        type="email"
                                        
                                    />
                                </Col>
                                <Col md={6} xs={6}>
                                    <Input
                                        label="organisation/person"
                                        placeholder="organisation/person"
                                         value={this.state.type}
                                        onChange={this.handletype}
                                        title="Please enter a valid email."
                                        type="email"
                                        
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6} xs={6}>
                                <div >

                                    <Alert  variant={this.state.variante}>
                                                 {this.state.errore}
                                    </Alert>
                                </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col md={12} xs={12}>
                                        <Input
                                           
                                            label="Password"
                                            placeholder="Password"
                                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" 
                                            required 
                                     		value={this.state.password}
                                            onChange={this.handleChange3}    
                                            type="password"
                                           
                                        />
                                </Col>
                            </Row>
                            <Row>
                                
                                <Col md={12} xs={12}>
                                            <div >
                                                <Alert  variant={this.state.variantp}>
                                                             {this.state.errorp}
                                                </Alert>
                                            </div>
                                </Col>
                            </Row>

                            <Row>

                                <Col md={6} xs={6} >
                                    <Input
                                        label="Contact number"
                                        placeholder="Contact"
                                        value={this.state.contact}
                                        onChange={this.handleChange4}
                                        type="text"
                                        
                                    />
                                </Col>
                                
                                <Col md={6} xs={6} >
                                    <Input
                                        label="Address"
                                        placeholder="Address"
                                        value={this.state.address}
                                        onChange={this.handleaddress}
                                        type="text"
                                        
                                    />
                                </Col>


                            </Row>
                            <Row>
                            <Col md={6} xs={6}>
                                            <div >
                                                <Alert  variant={this.state.variantc}>
                                                             {this.state.errorc}
                                                </Alert>
                                            </div>
                                </Col>


                            </Row>
                            <Button onClick={this.handleSubmit}  type="submit">
                                Submit
                            </Button>
                       


                    </Col>
                </Row>

            </Container>
		</Layout>
	);
}

}
