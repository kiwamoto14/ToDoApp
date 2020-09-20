import React from 'react';
import Components from './features/components/Components';
import './App.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default function App() {
    return (
      <Container className="p-3">
        <Jumbotron>
          <div className="App">
          <h1 className="header">To-do App</h1><br></br>
          <Components />
          </div>
        </Jumbotron>
      </Container>
    );
  }

