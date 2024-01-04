import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Topbar from './Component/Topbar';
import SignIn from './Component/SignIn';
import Search from './Component/Search';
import Home from './Component/Home';
import Help from './Component/Help';
import Cart from './Component/Cart';
import Offers from './Component/Offers';
import Mcdonalds from './Component/Mcdonalds';
import Createaccount from './Component/Createaccount';
 

function App() {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/Offers' element={<Offers/>}/>
    <Route path='/SignIn' element={<SignIn/>}/>
    <Route path='/Help' element={<Help/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/Mcdonalds' element={<Mcdonalds/>}/>
    <Route path='/create' element={<Createaccount/>}/>



   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
