import {Routes,Route} from 'react-router-dom'
import './style.css'
import Login from '../src/Pages/Login'
import Booking from '../src/Pages/Booking'
import Vendors from './Pages/Vendors';
import Dashboard from './Pages/Dashboard';
import PayHistory from './Pages/PayHistory';

function App() {
  return (

   <div className="App">

      <Routes>
       <Route path="/" element={ <Login/>}/>
       <Route path="/Booking" element={ <Booking/>}/>
       <Route path="/Vendors" element={ <Vendors/>}/>
       <Route path="/PayHistory" element={ <PayHistory/>}/>
       <Route path="/Dashboard" element={ <Dashboard/>}/>
       
      </Routes>

   </div>
    
  );
}

export default App;
