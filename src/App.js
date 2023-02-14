import './App.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import data from './data.js'
import { useState } from 'react';
import Card from './card.js';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Detail from './pages/detail';
import axios from 'axios';

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div className="main-bg"></div>
      </div>
      {
        <Routes>
          <Route path="/" element={
            <div className="container">
              <div className="row">
                {shoes.map((item, index) => {
                  return (
                    <Card key={index} shoes={shoes} index={index}/>
                  )
                })}
              </div>
            </div>
          }></Route>
          <Route path='/detail/:id' element={<div><Detail shoes={shoes} /></div>}></Route>
        </Routes>
      }
    </div>
    <button onClick={()=>{
      axios.get("https://codingapple1.github.io/shop/data2.json")
      .then((result)=>{
        let copy = [...shoes, ...result.data];
        setShoes(copy);
      })
      .catch(()=>{
        alert("데이터를 잘 못 가져왔어요.")
      })
    }}>더보기</button>
    </>
  );
}

export default App;
