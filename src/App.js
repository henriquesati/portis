import logo from './logo.svg';
import ReactDOM from "react-dom";
import Navi from './components/Navi';
import Headtable from './components/Headtable'
import './App.css';
const baseurl = 'localhost:3000'
const mock = [
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
  }
]

function App() {
  return (
      
  <div>
     <Navi/>
  <div id='vai'>
    <Headtable/>

    </div>
      <header className="App-header">
        <p>
          Edit <code>url</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);



export default App;
