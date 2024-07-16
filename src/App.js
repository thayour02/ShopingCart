import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Cart from './pages/cart'
import Home from './pages/home'
import Header from './component/header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
