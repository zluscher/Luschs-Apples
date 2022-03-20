import styled from 'styled-components';

export const FundContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto auto;
  background-color: #b9b9b9;
  padding: 15px 0 25px;
  border-radius: 15px;
  margin: 4vw 0;
  box-shadow: 0 0 4px 8px black;
  row-gap: 5%;
  height: 40vw;
`;

export const LogoName = styled.div`
  grid-row: 1 / 2;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 0 4vw 0 0;
`;

export const CompanyName = styled.div`
  order: 1
  font-size: 5vw;
  background-color: green;
  border-radius: 8px;
  font-weight: 600;
  box-shadow:  3px 3px 4px 4px #000000;
  border-style: solid;
  color: white;
  border-width: 5px;
  cursor: pointer;
  height: 7.3vw;
  align-content: center;
  padding: 0 3%;
  cursor: default;
`;

export const CompanyText = styled.p`
font-size: 2vw;
  height: 100%;
  margin: .1vw .1vw .1 vw 0;
`;

export const Image = styled.img`
  height: 8vw;
  box-shadow: 2px 3px 4px 4px #000000;
  border-radius: 8px;
  background-color: white;
`;

export const Logo = styled.div`
  order: 2
`;

export const Statistics = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  font-size: 2vw;
`;
export const Divider = styled.div`
  height: 38px;
  background: linear-gradient(
    135deg
    ,#b9b9b9 25%,#90000000 25%) -20px 0,linear-gradient(
    225deg
    ,#b9b9b9 25%,transparent 25%) -20px 0,linear-gradient(
    315deg
    ,#b9b9b9 25%,#b9b9b900 25%),linear-gradient(
    45deg
    ,#b9b9b9 25%,transparent 25%);
  background-size: 40px 40px;
  background-color: #9c9c9c;
  width: 58%;
  grid-row: 2 / 3;
  grid-colum: 1 / 6;
  transform: rotateX( 294deg );
  justify-self: center;
  transform: scale(.2);
    width: 280%;
  }
`;

export const StatisticsSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: .1fr 31px 1.2fr;
  font-size: 2vw;
  align-self: center;
  align-items: end;
  margin-top: -6vw;
`;

export const StatTitle = styled.div`
  grid-row: 1 / 2
`;

export const Charts = styled.div`
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-self: center;
  width: 100%;
  height: 15vw;
  align-content: space-around;
  margin-bottom: -3%;
`;

export const BarGraph = styled.div`
  grid-column 2 / 3;
  display: flex;
  flex-direction: row;
  width: 95%;
  align-self: center;
`;

export const PieGraph = styled.div`
  grid-column: 1 / 2;
  display: grid;
  grid-template-columns: auto auto;
  transform: scale(.80);
  margin-top: 2vw;
`;
