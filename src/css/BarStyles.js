import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const Container = styled(ResponsiveContainer)`
  margin: 1.5vw 0;
  min-width: 1px;
  min-height: 1px;
`;

export const BarGraphs = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  text-align: center;
  margin-top: 10vw;
`;

export const SingleBar = styled.div`
  width: 20vw
`;

export const BarKeys = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 1.2vw;
  font-size: 1.5vw;
  align-items: center;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  margin-right: 5vw;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const CompanyFunds = styled.div`
  display: flex;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  justify-content: space-evenly;
  flex-wrap: wrap-reverse;
`;

export const VectorRectangle = styled.svg`
  width: 1vw;
  height: 1vw;
  stroke-width: 2px;
  stroke: white;
`;

export const GreenRectangle = styled.rect`
  width: 1vw;
  height: 1vw;
  fill: #93dcae;
`;

export const PurpleRectangle = styled.rect`
  width: 1vw;
  height: 1vw;
  fill: #9a95f1;
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: default;
`;
