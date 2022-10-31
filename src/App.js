/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";
import Detail from './Detail.js';
function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
              <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
              <Nav.Link onClick={()=>{navigate('./Detail')}}>Cart</Nav.Link>
            </Nav>
        </Container>
      </Navbar>


    <Routes>
      <Route path="/" element={
        <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
              {
                shoes.map((a, i)=>{
                  return(
                    <Card shoes={shoes[i]} i={i+1}></Card>
                  )
                })
              }        
                </div>
            </div>
        </>    
      } />
        <Route path="/detail" element={<Detail/>} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>

 

      
    </div>
  );

function Card(props){
  return(
      <div className="col-md-4">
        <img src={'https://codingapple1.github.io/shop/shoes'+ props.i +'.jpg'} width="80%"/>
        <h4>{ props.shoes.title }</h4>
        <p>{ props.shoes.price }</p>
      </div>
  )
}


}

export default App;
