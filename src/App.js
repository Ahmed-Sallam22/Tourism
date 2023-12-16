import { Route, Routes } from 'react-router';
import './App.css';
import Contrydetails from './components/Home/Contries/contry/Contrydetails';
import Morehotels from './components/Home/Contries/moreHotels/Morehotels';
import Morpls from './components/Home/Contries/moreplaces/Morpls';
import Moreres from './components/Home/Contries/moreRes/Moreres';
import Home from './components/Home/Home';
import Resdetails from './components/Home/Contries/contry/resturant/resdetails/Resdetails';
import SignUp from './components/Home/SignUp/SignUp';
import Login from './components/Home/Login/Login';
import List from './components/List/List';
import VisitedCity from './components/vistedcity/VisitedCity';
import Visited2 from './components/visited2/Visited2';
import Hoteldetail from './components/hoteldetails/Hoteldetails';
import Placedet from './components/placedet/Placedet';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='contrydetails' element={<Contrydetails/>}/>
        <Route path='/moreres' element={<Moreres/>}/>
        <Route path='/morpls' element={<Morpls/>}/>
        <Route path='/morhots' element={<Morehotels/>}/>
        <Route path='/resdet' element={<Resdetails/>}/>
        <Route path='/hotdet' element={<Hoteldetail/>}/>
        <Route path='/placedet' element={<Placedet/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/visited' element={<VisitedCity/>}/>
        <Route path='/visited2' element={<Visited2/>}/>
        </Routes>
    </div>
  );
}

export default App;
