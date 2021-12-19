import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoHome} from 'react-icons/io5';
import { BiMoviePlay} from 'react-icons/bi';
import { CgScreen} from 'react-icons/cg';
import { IoLogInOutline} from 'react-icons/io5';
const Header = () => {
    return (
        <div className='header'>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" style={{color: 'red', Size:"30px"}}>Movie app</Navbar.Brand>
    <Nav className="hearder-text">
      <Nav.Link href="#home"><IoHome size={20} style={{ fill: 'white' }}/> HOME</Nav.Link>
      <Nav.Link href="#features"><BiMoviePlay size={20} style={{ fill: 'white' }}/> MOVIES</Nav.Link>
      <Nav.Link href="#pricing"><CgScreen size={20} style={{ fill: 'white' }}/> SERIES</Nav.Link>
      <Nav.Link href="#pricing"><IoLogInOutline size={20} style={{ fill: 'white' }}/>  LOGIN</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
