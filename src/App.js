import './App.css';
import Install from './install';
import StartRating from './components/StarRating';
import Cart from './cart/Cart';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">


      <Routes>

        <Route path='/' element={
          <>
            <h1>PWA 테스트</h1>
            <Install />
            <StartRating itemId={1} />
            <StartRating itemId={2} />
            <StartRating itemId={3} />


          </>
        }></Route>
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Page" element={<Page />} />
      </Routes >
    </div>

  );
}

export default App;
