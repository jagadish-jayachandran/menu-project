import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
  return (
    // <div className="App">
     
      <div >

        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">
              Canteen Dishes
           {/* <img src={logo} alt="Logo" />; */}
         </NavbarBrand>
          </div>
        </Navbar>
      <Menu dishes={this.state.dishes} />
      </div>
    // </div>
  );
}
}

export default App;
