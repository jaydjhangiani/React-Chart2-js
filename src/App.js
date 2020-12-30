import React from 'react'
import BarChart from './components/BarChart';
import DoughnutChart from './components/DoughnutChart';
import DynamicLineChart from './components/DynamicLineChart';
import Footer from './components/Footer';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import './App.css'

const App = () => {
  return(
    <>
    <BarChart/>
    <br/>
    <br/>
    <LineChart/>
    <br/>
    <br/>
    <PieChart/>
    <br/>
    <br/>
    <DoughnutChart/>
    <br/>
    <br/>
    <DynamicLineChart/>
    <br/>
    <Footer/>
    </>
  )
}

export default App;
