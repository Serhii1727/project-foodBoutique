import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import logo from '../../images/icon.svg';
import cart from '../../images/cart.svg';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <div className={css.navLogo}>
            <NavLink to="/">
              <div>
                <img src={logo} alt="Logo Food Boutique" />
                Food Boutique
              </div>
            </NavLink>
          </div>

          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cart">
                <div>
                  <img src={cart} alt="Logo Cart" />
                  Cart
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default SharedLayout;
