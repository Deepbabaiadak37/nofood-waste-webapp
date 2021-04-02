import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header';
import Footer from '../Footer';
/**
*@author
*function Layout
*/


const Layout = (props) => {

	return (
		< >
			<Header />
			
				{props.children}

			<Footer/>
		</>
	)
}

export default Layout;