import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/Home/home";
import { ProductsItem } from "./components/Products/products";
import { ProductDetail } from "./components/productDetail/product-detail";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route>
          <Route path="/" element={<ProductsItem />} />
          <Route path="product/detail/:id" element={<ProductDetail />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
