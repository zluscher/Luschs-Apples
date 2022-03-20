import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { addUnownedEquity, darkenBar, lightenBar } from '../helperFunctions';
import { Container } from '../css/BarStyles';

const BarGraphGenerator = (props) => {
  const company = props.company;
  return (
    <Container
      className='barContainer'
      height='auto'
      aspect={1}
      key={company.id}
      >
      <BarChart
        width='5%'
        data={addUnownedEquity(company)}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
        <CartesianGrid strokeDasharray='2 2' />
        <XAxis dataKey='name'/>
        <YAxis />
        <Tooltip />
        <Bar
          dataKey='Equity Possessed'
          stackId='a'
          fill='#9a95f1'
          className={`${company.id}-bar`}
          onMouseOver={ () => darkenBar(company.id) }
          onMouseOut={ () => lightenBar(company.id) }
          />
        <Bar
          dataKey='Remaining Equity'
          stackId='a' fill='#93dcae'
          className={`${company.id}-bar bargph`}
          onMouseOver={ () => darkenBar(company.id) }
          onMouseOut={ () => lightenBar(company.id) }
          />
      </BarChart>
    </Container>
  );
};

export default BarGraphGenerator;
