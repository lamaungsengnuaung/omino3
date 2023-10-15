import { Fragment, useState } from 'react';
import Cart from './Componets/Cart/Cart';
import Header from './Componets/Layout/Header';
import Meal from './Componets/Meals/Meal';
import CartContext from './store/CartContext';
import CartProvider from './store/CartProvider';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meal />
      </main>
    </CartProvider>
  );
}

export default App;
