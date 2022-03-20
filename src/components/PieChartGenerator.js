import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import { Container, ROI, ROISection } from '../css/PieStyles';
import { findROI, darkenPie, undarkenPie, addSecondObject, renderCustomizedLabel } from '../helperFunctions.js'

const PieChartGenerator = (props) => {
  const company = props.company;
  const data = addSecondObject(company);
  const colors = ['#4babff', 'green'];

  return (
    <div>
      <Container className='pieContainer' aspect={1}>
        <PieChart>
          <Pie
            className={`${company.name}`}
            data={data}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius='69%'
            fill='#ff5656'
            dataKey='pie'
            onMouseOver={ () => darkenPie(company.name, company.id) }
            onMouseOut={ () => undarkenPie(company.name, company.id) }
            >
            {data.map((entry, index) =>
              <Cell
              dataKey='pie'
              key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            )}
          </Pie>
        </PieChart>
    </Container>
    <ROISection>
      <ROI className={`${company.id}-roi`}>{ findROI(company.value, company.cost) }</ROI>
    </ROISection>
  </div>
  );
};

export default PieChartGenerator;
