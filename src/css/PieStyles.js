import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

export const PieGraphs = styled.div`
  display: grid;
  grid-template-columns: 80% 20%;
  text-align: center;
  margin-top: 10vw;
  margin-bottom: 2vw;
`;

export const PieKeys = styled.div`
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

export const PieSection = styled.section`
  width: 22vw;
  min-height: 3px
  min-height: 3px
`;

export const Container = styled(ResponsiveContainer)`
  height: 22vw;
  margin-top: -1.5vw;
  min-width: 1px;
  min-height: 1px;
`;

export const CompanyName = styled.span`
  font-size: 1.6vw;
  margin-left: -.5vw;
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

export const BlueRectangle = styled.rect`
  width: 1vw;
  height: 1vw;
  fill: #4babff;
`;

export const RedRectangle = styled.rect`
  width: 4vw;
  height: 4vw;
  fill: red;
`;

export const Key = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
  cursor: default;
`;

export const ROISection = styled.div`
  margin: -1.5vw 0 1vw 0;
  font-size: 1.3vw;
`;

export const ROI = styled.span`
  background-color: #ff4040;
  padding: 3px 5px;
  border-radius: 5px;
  color: white;
  visibility: hidden;
  transition: visibility 0.3s linear, opacity 0.3s linear;
  opacity: 0;
`;

export const Label = styled.text`
  fill: white;
  font-size: 0.9vw;
`
export const CustomKey = styled(Key)`
  font-size: 2vw

`;
