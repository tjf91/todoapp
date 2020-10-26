import React, { useEffect, useState } from "react"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function LoginForm (){ 
    const [number, setNumber] = useState(0)

    function incrementNumber(){
        setNumber(number=>number+1)
    }
    function decrementNumber(){
        setNumber(number=>number-1)
    }
    

    return(



    <Container>
     <Row>
        <Col xs={4}>
          <div id="orangediv">
             <Button onClick={incrementNumber}  variant="primary" size="lg">+</Button>{' '}
          </div>
      
      </Col>
      
        <Col xs={3}>
            <div id="bluediv" style={{height: 47}}>{number}</div>
            
        </Col>
     
        <Col xs={4}>
        <div id="orangediv">
            <Button onClick={decrementNumber} variant="primary" size="lg">-</Button>{' '}
            </div>
        </Col>
      
      
      
      
    </Row>
  </Container>  
    )
}
export default LoginForm;