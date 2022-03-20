import React from 'react';
import BarGraphGenerator from './BarGraphGenerator';
import { BarGraphs, BarKeys, CompanyFunds, Key, PurpleRectangle, GreenRectangle, VectorRectangle, SingleBar } from '../css/BarStyles';
import '../css/recharts.css';

const BarEquitySection = (props) => {
  const companies = props.fund.companies;

  return (
    <BarGraphs>
    <CompanyFunds data-testid='bar'>
      {companies.map(company =>
      <SingleBar key={company.id} width='20vw'>
      <BarGraphGenerator company={company} key={company.id} />
      </SingleBar>
      )}
    </CompanyFunds>
    <BarKeys>
        <Key>
          <VectorRectangle>
            <GreenRectangle/>
          </VectorRectangle>
          Remaining Apples (%)
        </Key>
        <Key>
          <VectorRectangle>
            <PurpleRectangle/>
          </VectorRectangle>
          Apples Possessed (%)
        </Key>
      </BarKeys>
    </BarGraphs>
  )
}

export default BarEquitySection;
