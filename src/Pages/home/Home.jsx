import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import Widget from '../../components/Widget/Widget';
import Chart from '../../components/Chart/Chart';
import Featured from '../../components/Featured/Featured';
import Table from '../../components/Table/Table';
import "./Home.scss";

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="home_container">
        <Navbar/>
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
      <div className="charts">
        <Featured/>
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Home