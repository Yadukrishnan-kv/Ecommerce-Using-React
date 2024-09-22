
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Loginsignup from './Pages/Loginsignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Shop/>}></Route>
       <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}></Route>
       <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}></Route>
       <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}></Route>
       <Route path='/product' element={<Product/>}>
       <Route path=':productId' element={<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>}></Route>
       <Route path='/login' element={<Loginsignup/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
