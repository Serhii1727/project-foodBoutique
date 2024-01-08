import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import CartGoods from 'pages/CartGoods/CartGoods';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartGoods />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
