import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Shop from './pages/shop/Shop';
import Cart from './pages/cart/Cart';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) =>{
    let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
  }
  return (
    <div>
      <Navbar size={cart.length} />
      <Routes>
        <Route path='/' element={<Shop handleClick={handleClick} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}  handleChange={handleChange}/>}/>
      </Routes>
      {
        warning && <div className='warning'>Item is already added to your cart</div>
      }
    </div>
  );
}

export default App;
