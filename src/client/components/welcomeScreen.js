import React, {Component,useState} from "react"
import styles from "./styles.css"

import Form from "react-bootstrap/Form";

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import LoginForm from "./form";







export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return( 
      
      <div>        
        <div><LoginForm /></div>
        <div><LoginForm /></div>
        </div>
      
      

  )
  }

};
