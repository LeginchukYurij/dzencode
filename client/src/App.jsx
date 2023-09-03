import { Routes, Route } from 'react-router-dom';

import Products from '@pages/Products/Products';
import Orders from '@pages/Orders/Orders';
import Home from '@pages/Home/Home';
import Layout from '@components/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/products'
          element={<Products />}
        />
        <Route
          path='/orders'
          element={<Orders />}
        />
      </Routes>
    </Layout>
  );
};

export default App;
