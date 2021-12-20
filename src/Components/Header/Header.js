import React from 'react'
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { IoHome} from 'react-icons/io5';
import { BiMoviePlay} from 'react-icons/bi';
import { IoLogInOutline} from 'react-icons/io5';
import AddModel from '../AddModel/AddModel';
const Header = ({handleAdd}) => {
    return (
        <div className='header'>
           <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand className='title' href="#home" style={{color: 'red'}}>Movie app</Navbar.Brand>
    <Nav className="hearder-text">
      <Nav.Link href="#home"><IoHome size={20} style={{ fill: 'white' }}/> HOME</Nav.Link>
      <Nav.Link href="#features"><BiMoviePlay size={20} style={{ fill: 'white' }}/> MOVIES</Nav.Link>
      <Nav.Link href="#pricing" className='addModel'><AddModel handleAdd={handleAdd} /> Add Movie </Nav.Link>
      <Nav.Link href="#pricing"><IoLogInOutline size={20} style={{ fill: 'white' }}/>  LOGIN</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
