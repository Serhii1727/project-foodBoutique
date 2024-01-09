import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
