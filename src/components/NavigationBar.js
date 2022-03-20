import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeNavButton, NavBar, FirstNavButton, NavButton, NavText, HomeNavText } from '../css/NavBarStyles';
import FundPage from './FundPage.js';
import Home from './Home';

const NavigationBar = (props) => {
  const funds = props.funds;
  const [luschsapples, setLuschsApples] = useState(false);

  const [home, setHome] = useState(true);


  const states = [luschsapples, home];
  const stateStrings = ['luschsapples', 'home'];

  const toggleButton = (classname) => {
    let previous;
    for (let i = 0; i < states.length; i++) {
      states[i] ? previous = stateStrings[i] : console.log(states[i]);
    }
    const toggleOn = document.getElementsByClassName(classname)[0];
    const toggleOff = document.getElementsByClassName(previous)[0];
    console.log(toggleOn, toggleOff)
    toggleOn.style.background = '#060d41';
    toggleOn.childNodes[0].style.color = 'white';
    toggleOff.style.background = 'white';
    toggleOff.childNodes[0].style.color = '#060d41';
  }

  const toggleState = (changeState, classname) => {
    setLuschsApples(false);
    setHome(false);

    changeState(true);
    toggleButton(classname);
  }

  return (
      <Router>
        <NavBar>
          <FirstNavButton
            to='/luschsapples'
            className='luschsapples'
            onClick={ () => toggleState(setLuschsApples, 'luschsapples') }
            >
            <NavText>Lusch's Big Daddy Apples</NavText>
            </FirstNavButton>
          <HomeNavButton
            to='/'
            data-testid='fundPage'
            className='home'
            onClick={ () => toggleState(setHome, 'home') }
            >
            <HomeNavText>Home</HomeNavText>
          </HomeNavButton>

        </NavBar>
        <Switch>
          <Route path='/luschsapples'>
            <FundPage fund={funds[0]} />
          </Route>


          <Route path='/'>
            <Home funds={funds}/>
          </Route>
        </Switch>
    </Router>
  );
};

export default NavigationBar;
