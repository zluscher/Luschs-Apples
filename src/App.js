import React, { useState, useEffect } from 'react';
import { Logo, Body, Wrapper } from './css/HomeStyles';
import logo from './images/aumni-logo.png';
import mockFunds from './mocks/funds.json';
import NavigationBar from './components/NavigationBar';


const App = () => {
  const [funds, setFunds] = useState([
    {"id": 1, "name": "Loading page...","companies":
      [{
        "id": 1,
        "name": "Dummy data",
        "logo": "https://aumni-public.s3.amazonaws.com/fake-logos-vector-color/1.svg",
        "cost": 100000,
        "equity": 0.99,
        "value": 100000,
        "founded": "2025-01-25"
      }]
    }
  ]);

  useEffect( () => {
    setFunds(mockFunds);
  }, []);

  return (
    <Wrapper>
      <Body>
        <Logo src={logo} alt='Aumni Logo' />
        <NavigationBar funds={funds} />
      </Body>
    </Wrapper>
  );
}

export default App;

