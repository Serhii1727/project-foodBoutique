import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import CartGoods from 'pages/CartGoods/CartGoods';
import SharedLayout from './SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route to="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<CartGoods />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
