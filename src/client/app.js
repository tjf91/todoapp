import React, {Component} from "react"
import WelcomeScreen from './components/welcomeScreen'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <body><WelcomeScreen /> </body>      
    

  );
  }
};

export default App;
