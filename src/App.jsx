import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/Home/home";
import { ProductsItem } from "./components/Products/products";
import { ProductDetail } from "./components/productDetail/product-detail";
import { About } from "./pages/About/about";
import { Shop } from "./pages/Shop/Shop";
import { Project } from "./components/Project/project";
import { Newscard } from "./components/NewsCard/newscard";
import { Serves } from "./pages/servesc/serves";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}></Route>
          <Route path="shop" element={<Shop />}></Route>
          <Route path="projects" element={<Project />}></Route>
          <Route path="news" element={<Newscard />}></Route>
          <Route path="services" element={<Serves />}></Route>
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
