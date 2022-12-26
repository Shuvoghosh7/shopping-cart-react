import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' />
        <Route path='/cart' />

      </Routes>
    </div>
  );
}

export default App;
