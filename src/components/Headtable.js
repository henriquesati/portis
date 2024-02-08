import React, { useEffect } from 'react';
import './headtable.css';
const data2 = [
    {
      id: 1,
      date_buy: '1',
      date_sell: '1',
      asset: 'AAPL',
      quantity: 10,
      buy_price: 150.5,
      actual_price: 160,
      sold_price: 170
    },
    {
      id: 2,
      date_buy: '1',
      date_sell: '1',
      asset: 'AAPL',
      quantity: 10,
        buy_price: 150.5,
        actual_price: 160,
      sold_price: 170
    }]
const Headtable = () => {
    let rowsAdded = false;
  useEffect(() => {
    if (rowsAdded){
        return
    }
    addRows(); // Call your function to add rows when the component mounts
    rowsAdded = true;
  }, []); // Empty dependency array means this effect will run once when the component mounts

  const addRows = () => {
  console.log("working")
  const tbody = document.querySelector('#tbody')
  data2.forEach((object) =>{
    console.log("times ex");
    const line = document.createElement('tr')
    for (const key in object){
        if (key !== 'id'){
            const cel = document.createElement('td')
            cel.textContent = object[key]
            line.appendChild(cel);
        }
    }
    tbody.appendChild(line)
  })


  };

  return (
    <table>
      <thead>
        <tr>
          <th>Asset</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Actual Price</th>
          <th>Lucro</th>
          <th>Date Buy</th>
          <th>Participation</th>
          <th>Sell</th>
        </tr>
      </thead>
      <tbody id="tbody">
        {/* Your dynamic rows will go here */}
      </tbody>
    </table>
  );
};

export default Headtable;
