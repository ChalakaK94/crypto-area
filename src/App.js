
import './App.css';
import {Navbar} from "./components/Navbar";
import {Layout, } from "antd";
import {Switch, Route, Link, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <div className='navbar'>
          <Navbar/>
      </div>
      <div className='main'>
        <Layout>
            <div className='routes'>
                <Switch>
                    <Routes exact  path='/'>
                        <HomePage/>
                    </Routes>
                    <Routes exact  path='/exchanges'>
                        <Exchanges/>
                    </Routes>
                    <Routes exact  path='/cryptocurrencies'>
                        <Cryptocurrencies/>
                    </Routes>
                    <Routes exact  path='/cryptocurrencies'>
                        <Cryptocurrencies/>
                    </Routes>
                </Switch>
            </div>
        </Layout>
      </div>
        <div className='footer'>

      </div>
    </div>
  );
}

export default App;
