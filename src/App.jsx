import { Route, Routes } from 'react-router-dom';
import HomePages from './pages/HomePages';
import ShopPages from './pages/ShopPages';
import SingleProduct from './pages/SingleProduct';
import ProductComparison from './pages/ProductComparison';
import CartPages from './pages/CartPages';
import CheckoutPages from './pages/CheckoutPages';
import ContactPages from './pages/ContactPages';
import BlogPages from './pages/BlogPages';
import CartSidebar from './pages/CartSidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/shop" element={<ShopPages />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/cart-sidebar" element={<CartSidebar />} />
        <Route path="/product-comparison" element={<ProductComparison />} />
        <Route path="/cart" element={<CartPages />} />
        <Route path="/checkout" element={<CheckoutPages />} />
        <Route path="/contact" element={<ContactPages />} />
        <Route path="/blog" element={<BlogPages />} />
      </Routes>
    </>
  );
}

export default App;
