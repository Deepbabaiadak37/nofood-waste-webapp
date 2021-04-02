import React from 'react';

import  {Navbar,Nav,Button,NavDropdown,span,Container,Col,Row} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import { BsPersonPlus,BsPerson,BsHouseDoor } from 'react-icons/bs';
import'./header.css';

/**
*@author
*function Header
*/


const Header= (props)=>{
  const mystyle={

  }

	return(
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            
            <Col xs='6' sm='4'>
                    
                    <NavLink to="/" className="nav-link1">
                      <Navbar.Brand style={{display : "flex"}}><BsHouseDoor size="1.5rem" color="white" style={{ display : "flex"}}/> <h4 style={{ color : '#fff'}}>No-HuNGry</h4></Navbar.Brand>
                   </NavLink>

            </Col>
              <Col xs='4' sm='3'>
            </Col>


            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
        <Col xs='6' sm='6'>
            <Navbar.Collapse id="responsive-navbar-nav">
          
        
            
                  <Nav>   
                         
                          <NavLink to="/signup" style={{marginRight : "50px"}} className="nav-link">
                          <Button className="myclass">
                               <BsPersonPlus size="1.5rem" color="white"/>Signup
                            </Button>
                          </NavLink>
                          
                      
                    
                           <NavLink to="/signin"  className="nav-link">
                              <Button className="myclass">
                                <BsPerson  size="1.5rem" color="white" /> Signin
                                </Button>
                           </NavLink>
                      

                  </Nav>

         
            </Navbar.Collapse>  
       

             </Col>
           
        </Navbar>

	)
}

export default Header;