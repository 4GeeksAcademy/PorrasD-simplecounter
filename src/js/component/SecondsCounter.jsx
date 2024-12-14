import React, { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { FaRedo } from 'react-icons/fa';

const SecondsCounter = () => {
  const [count, setCount] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggleCounter = () => {
    setIsActive(prevState => !prevState);
  };

  const resetCounter = () => {
    setCount(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <Container 
      fluid 
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Card style={{ width: '18rem', textAlign: 'center', padding: '20px' }}>
        <Card.Body>
          <Card.Title>Contador:</Card.Title>
          <div className="counter-display" style={{ marginBottom: '20px' }}>
            {isActive && (
              <Spinner 
                animation="border" 
                role="status" 
                style={{ fontSize: '50px', marginBottom: '10px' }}
              >
                <span className="visually-hidden">Cargando...</span>
              </Spinner>
            )}
            <h1 
              style={{ 
                color: isActive ? 'black' : 'gray', 
                fontFamily: "fantasy", 
                fontSize: '3rem',
                marginTop: '10px'
              }}
            >
              {count}
            </h1>
          </div>
          <Row>
            <Col className="d-flex justify-content-center" style={{ marginBottom: '10px' }}>
              <Button 
                variant="dark" 
                onClick={toggleCounter} 
                style={{ width: '120px', fontSize: '1.2rem' }}
              >
                {isActive ? 'Pause' : 'Start'}
              </Button>
            </Col>
            <Col className="d-flex justify-content-center">
              <Button 
                variant="primary" 
                onClick={resetCounter} 
                style={{ width: '120px' }}
              >
              <FaRedo />
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default SecondsCounter;
