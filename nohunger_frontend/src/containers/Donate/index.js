import React, { useState } from 'react';
import Layout from '../../components/Layout';
import  {Container,Form,Button,Col,Row,Alert} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

import Input from '../../components/UI/Input';

import {Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { authConstants, userContants } from "../../actions/constants";
import axios from "axios";


/**
*@author
*function Signup
*/


export default class  Donate  extends React.Component {
	state={
        name : "",
        city : "",
        food : "",
        variantc : "",
        errorc : "",
        foodtype : "",
        people : "",
        time : "",
        contact : "",
        selectedFile : null

	};

handleChange1= event =>{
        
        this.setState({ name: event.target.value });
    };
    handleChange2= event =>{
        
        this.setState({ city: event.target.value });
    };
handleChange3= event =>{
        
        this.setState({ food: event.target.value });
    };
handleChange4= event =>{
        
        this.setState({ foodtype: event.target.value });
    };

handleChange5= event =>{
        
        this.setState({ people: event.target.value });
    };
handleChange6= event =>{
        
        this.setState({ time: event.target.value });
    };
handlecontact= event=>{
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
}


fileSelectedHandler = event=>{
    this.setState({
        selectedFile : event.target.files[0]
    })
}

fileUploadHnadler =() =>{
    const fd = new FormData();
     fd.append('posted_by',this.state.name);
     fd.append('city',this.state.city);
     fd.append('items',this.state.food);
     fd.append('food_type',this.state.foodtype);
     fd.append('max_people',this.state.people);
     fd.append('image',this.state.selectedFile);
    fd.append('hour',this.state.time);


    axios.post('http://127.0.0.1:3030/userroutes/donatefood',fd)
        .then(res =>{
            console.log(res);
            alert("donation complete,you can see fooditems after login..");
            window.location='/';
    })
        .catch(error =>{
        console.log(error);
        alert("all fields are required");
        window.location='/donate';

    })
}

	render() {
		return (
            <body style={{ background : "linear-gradient(to right, #44a08d, #093637)" }}>
		<Layout>
				 <Container className="container" >
              <div>
                <Row style={{ marginTop: '50px',marginBottom :'50px'}}>
                    <Col md={{ span: 7, offset: 2 }}>
                         <label style={{ color : '#fff'}}>Enter your Name</label>
                        <Input placeholder="Enter your name " name="name"  value={this.state.name}
                                        onChange={this.handleChange1}/>
                        
                         <Row>
                                <Col md={7} xs={7}>
                                <label style={{ color : '#fff'}}>City</label>
                             <Input  placeholder="Enter your city name"  value={this.state.city}
                                        onChange={this.handleChange2}/>
                                
                                </Col>
                            
                                <Col md={5} xs={5}>
                                <label style={{ color : '#fff'}}>Contact</label>
                             <Input  placeholder="Enter your Contact"  value={this.state.contact}
                                        onChange={this.handlecontact}/>
                            
                                </Col>

                        </Row>
                          <Row>
                            <Col md={7} xs={7}>
                            </Col>

                            <Col md={5} xs={5}>
                                            <div >
                                                <Alert  variant={this.state.variantc}>
                                                             {this.state.errorc}
                                                </Alert>
                                            </div>
                                </Col>


                            </Row>






                             <Row>
                                <Col md={7} xs={7}>
                                <Input placeholder="Enter your food item in short"  value={this.state.food}
                                        onChange={this.handleChange3}/>
                        
                                </Col>
                                <Col md={5} xs={5}>
                            <Input placeholder="Food type "  value={this.state.foodtype}
                                        onChange={this.handleChange4}/>
                         
                                </Col>

                        </Row>
                        <Row>
                                <Col md={7} xs={7}>
                                <Input placeholder="Max-person can eat"  value={this.state.people}
                                        onChange={this.handleChange5}/>
                              
                                </Col>
                                <Col md={5} xs={5}>
                                <Input type="text" placeholder="expiry-time:(Hour)" name="time"  value={this.state.time}
                                        onChange={this.handleChange6}/>
                            
                                </Col>

                        </Row>

                        <Input type="file" onChange={this.fileSelectedHandler}  />
                        <Row>
                            <Col md={4} xs={4}></Col>
                            <Col md={4} xs={4}>
                                <div style={{ marginTop: '70px',alignItems : 'center',justifyContent : 'center'}} >
                                    <Button onClick={this.fileUploadHnadler}>upload</Button>
                                </div>
                            </Col>
                            <Col md={4} xs={4}></Col>
                        </Row>
                    </Col>
                </Row>
                </div>
            </Container>

		</Layout>
        </body>
	);
}

}
