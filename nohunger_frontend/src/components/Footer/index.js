import React from 'react';

import  {Nav,Container,Navbar,Row,Col} from 'react-bootstrap';
import { AiFillFacebook, AiFillTwitterCircle,AiOutlineWhatsApp,AiFillLinkedin,AiTwotonePhone} from "react-icons/ai";

/**
*@author
*function Footer
*/


const Footer= (props)=>{

	return(
            <Nav style={{ background: 'linear-gradient(to right, #2b5876, #4e4376)' }} >
    			<Container>
    			<Row>
    				
	    				<Col xs="3" sm="3" style={{paddingRight : '100px'}}>
									<div style={{ color : '#fff',fontStyle : 'bold'}}>Who we are</div>		
														    						
	    				</Col>

                        <Col xs="3" sm="3" >
                            <p style={{ color : 'white'}}>About Us</p>
                        </Col>
    				
    				<Col xs="3" sm="3" style={{ offset: 1 }}>
    								<div style={{ color : '#fff',fontStyle : 'bold'}}>Contact-Us  </div>
    								<p style={{color : 'white'}}><AiTwotonePhone/>+91-678798879</p>
    				</Col>
    				

	    				<Col xs="3" sm="3" style={{ display : 'flex'}}>
            	    				<AiFillFacebook size="10rem" color="white"/>

                                    <AiFillTwitterCircle size="10rem" color="white"/>

                                     <AiOutlineWhatsApp size="10rem" color="white"/>

                                     <AiFillLinkedin size="10rem" color="white"/>

	    				</Col>

    			</Row>
        		</Container>
  			</Nav>
        
			
	)
}

export default Footer;