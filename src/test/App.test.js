import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import PieChartSection from '../components/PieChartSection';
import BarEquitySection from '../components/BarEquitySection';
import NavigationBar from '../components/NavigationBar';
import FundPage from '../components/FundPage';
import Home from '../components/Home';

const firm = {
  "id": 1,
  "name": "Hane and Sons Ventures",
  "companies": [
    {
      "id": 1,
      "name": "Greens Food Suppliers",
      "logo": "https://aumni-public.s3.amazonaws.com/fake-logos-vector-color/1.svg",
      "cost": 1700000,
      "equity": 0.34,
      "value": 5700000,
      "founded": "2020-05-10"
    },
  ]
};

const firms = [{
    "id": 1,
    "name": "Hane and Sons Ventures",
    "companies": [{
        "id": 1,
        "name": "Greens Food Suppliers",
        "logo": "https://aumni-public.s3.amazonaws.com/fake-logos-vector-color/1.svg",
        "cost": 1700000,
        "equity": 0.34,
        "value": 5700000,
        "founded": "2020-05-10"
      }]},{
    "id": 2,
    "name": "Windler Group",
    "companies": [{
        "id": 4,
        "name": "Cheshire County",
        "logo": "https://aumni-public.s3.amazonaws.com/fake-logos-vector-color/4.svg",
        "cost": 250000,
        "equity": 0.12,
        "value": 2000000,
        "founded": "2017-03-14"
      }]}];


describe('App component', () => {

  test('renders logo on homepage', () => {
    const { getByAltText } = render(<App />);
    const logo = getByAltText(/^aumni logo$/i);
    expect(logo).toBeInTheDocument();
  });

});


describe('PieChartSection component', () => {

  test('calculates ROI correctly', () => {
    const { getByText } = render(<PieChartSection fund={firm} />);
    const returnOnInvestment = getByText(/^3.35x roi$/i);
    expect(returnOnInvestment).toBeInTheDocument();
  });

  test('contains pie chart section', () => {
    const { getByTestId } = render(<PieChartSection fund={firm} />);
    const pieChart = getByTestId(/^piechart$/i);
    expect(pieChart).toBeInTheDocument();
  });

  test('renders pie chart', () => {
    render(<PieChartSection fund={firm} />);
    const pieChartSection = document.getElementsByClassName('pieContainer')[0];
    expect(pieChartSection).toBeInTheDocument();
  });

  test('renders keys', () => {
    const { getByText } = render(<PieChartSection fund={firm} />);
    const key1 = getByText(/^cost$/i);
    const key2 = getByText(/^implied value$/i);
    expect(key1).toBeInTheDocument();
    expect(key2).toBeInTheDocument();
  });

  test('renders rectangles for keys', () => {
    render(<PieChartSection fund={firm} />);
    const blueRectangle = document.getElementsByTagName('rect')[0];
    const redRectangle = document.getElementsByTagName('rect')[1];
    expect(blueRectangle).toBeInTheDocument();
    expect(redRectangle).toBeInTheDocument();
    expect(blueRectangle).toHaveStyle('fill: #4babff');
    expect(redRectangle).toHaveStyle('fill: #ff5656');
  });

  test('renders company name', () => {
    const { getByText } = render(<PieChartSection fund={firm} />);
    const company = getByText(/^greens food suppliers$/i);
    expect(company).toBeInTheDocument();
  });

});


describe('BarEquitySection component', () => {

  test('contains bar graph section', () => {
    const { getByTestId } = render(<BarEquitySection fund={firm} />);
    const barGraphSection = getByTestId(/^bar$/i);
    expect(barGraphSection).toBeInTheDocument();
  });

  test('renders bar graph', () => {
    render(<BarEquitySection fund={firm} />);
    const barGraph = document.getElementsByClassName('barContainer')[0];
    expect(barGraph).toBeInTheDocument();
  });

  test('renders keys', () => {
    const { getByText } = render(<BarEquitySection fund={firm} />);
    const key1 = getByText('Equity Possessed (%)');
    const key2 = getByText('Remaining Equity (%)');
    expect(key1).toBeInTheDocument();
    expect(key2).toBeInTheDocument();
  });

  test('renders rectangles for keys', () => {
    render(<BarEquitySection fund={firm} />);
    const greenRectangle = document.getElementsByTagName('rect')[0];
    const purpleRectangle = document.getElementsByTagName('rect')[1];
    expect(greenRectangle).toBeInTheDocument();
    expect(purpleRectangle).toBeInTheDocument();
    expect(greenRectangle).toHaveStyle('fill: #93dcae');
    expect(purpleRectangle).toHaveStyle('fill: #9a95f1');
  });

});


describe('Home component', () => {

  test('renders label for each section', () => {
    const { getAllByText } = render(<Home funds={firms} />);
    const ROISection = getAllByText('Return on Investment')[0];
    expect(ROISection).toBeInTheDocument();
  });

  test('renders homepage', () => {
    const { getByTestId } = render(<Home funds={firms} />);
    const homeScreen = getByTestId(/^home$/i);
    expect(homeScreen).toBeInTheDocument();
  });

  test('renders elements from homepage', () => {
    render(<NavigationBar funds={firms} />);
    const graphSection = document.getElementsByTagName('div')[0];
    const homeScreen = document.getElementsByTagName('div')[1];
    expect(graphSection).toBeInTheDocument();
    expect(homeScreen).toBeInTheDocument();
  });

});


describe('NavigationBar component', () => {

  test('renders text on navigation bar', () => {
    const { getByText } = render(<NavigationBar funds={firms} />);
    const barGraphSection = getByText(/^Kings Capital$/i);
    expect(barGraphSection).toBeInTheDocument();
  });

  test('renders custom home button', () => {
    const { getByTestId } = render(<NavigationBar funds={firms} />);
    const homeButton = getByTestId(/^fundPage$/i);
    expect(homeButton).toBeInTheDocument();
  });

  test('renders text inside of buttons', () => {
    render(<NavigationBar funds={firms} />);
    const firstNavButton = document.getElementsByTagName('p')[0];
    const secondNavButton = document.getElementsByTagName('p')[1];
    expect(firstNavButton).toBeInTheDocument();
    expect(secondNavButton).toBeInTheDocument();
  });

});

describe('Individual fund page component', () => {

  test('renders company logo', () => {
    const { getByAltText } = render(<FundPage fund={firm} />);
    const companyLogo = getByAltText(/^company logo$/i);
    expect(companyLogo).toBeInTheDocument();
  });

  test('renders the data table', () => {
    const { getByTestId } = render(<FundPage fund={firm} />);
    const dataTableKey = getByTestId(/^divider$/i);
    expect(dataTableKey).toBeInTheDocument();
  });

  test('correctly converts the date', () => {
    const { getByText } = render(<FundPage fund={firm} />);
    const date = getByText(/^May 10, 2020$/i);
    expect(date).toBeInTheDocument();
  });

  test('correctly calculated the equity', () => {
    const { getByText } = render(<FundPage fund={firm} />);
    const equity = getByText(/^34%$/i);
    expect(equity).toBeInTheDocument();
  });

  test('correctly converts number into abreviation', () => {
    const { getByText } = render(<FundPage fund={firm} />);
    const moneyFigure = getByText(/^5.7M$/i);
    expect(moneyFigure).toBeInTheDocument();
  });

});

