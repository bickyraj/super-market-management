import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Login from "./auth/Login.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Detail from "./menu/Detail.tsx";
import AdminLayout from "./layout/AdminLayout.tsx";
import AddNewProduct from "./product/AddNewProduct.tsx";
import AddNewCategory from "./productcategory/AddNewCategory.tsx";
import AddNewUnit from "./unit/AddNewUnit.tsx";
import OrderFood from "./order/OrderFood.tsx";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/" element={<AdminLayout />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/menu/details" element={<Detail />} />
                  <Route path="/product/add" element={<AddNewProduct />} />
                  <Route path="/product-category/add" element={<AddNewCategory />} />
                  <Route path="/unit/add" element={<AddNewUnit />} />
                  <Route path="/order/food" element={<OrderFood />} />
              </Route>
          </Routes>
      </Router>
  );
}
export default App;
