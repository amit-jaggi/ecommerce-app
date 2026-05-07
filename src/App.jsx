import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import DashboardLayout from './components/templates/main-layout-wrapper/main-layout-wrapper';

const HomePage = lazy(() => import('./pages/home/home'));
const CartPage = lazy(() => import('./pages/cart/cart'));
const WishlistPage = lazy(() => import('./pages/wishlist/wishlist'));


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path={'/'} element={<HomePage />} />

            <Route path={'/cart'} element={<CartPage />} />

            <Route path={'/wishlist'} element={<WishlistPage />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
