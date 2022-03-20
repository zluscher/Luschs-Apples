import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavButton = styled(NavLink)`
  text-decoration: none;
  color: #060d41;
  font-weight: 600;
  width: 100%;
  height: 3vw;
  font-size: 1.2vw;
  background-color: white;
  outline: none;
  border: none;
  cursor: pointer;
  border-left-style: solid;
  border-color: #b9b9b9;
  :hover {
    background-color: #060d41;
    -webkit-transition: background-color .3s linear;
    -ms-transition: background-color .3s linear;
    transition: background-color .3s linear;
  }
  :hover p {
    color: white;
    -webkit-transition: color .3s linear;
    -ms-transition: color .3s linear;
    transition: color .3s linear;
  }
`;

export const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  margin-bottom: 2vw;
  background-color: white;
  border-style: solid;
  border-width: 4px;
  border-color: #b9b9b9;
  box-shadow: 0 0 2px 6px black;
`;

export const HomeNavButton = styled(NavButton)`
  font-size: 2vw;
`;

export const FirstNavButton = styled(NavButton)`
  border-left-style: none;
`;

export const NavText = styled.p`
  margin-top: .8vw;
`;

export const HomeNavText = styled.p`
  margin-top: .4vw;
`;
