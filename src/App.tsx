import "./App.css";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
// import Login from "./auth/Login.tsx";
import Dashboard from "./dashboard/Dashboard.tsx";
import Detail from "./menu/Detail.tsx";
import AddNewProduct from "./product/AddNewProduct.tsx";
import AddNewCategory from "./productcategory/AddNewCategory.tsx";
import AddNewUnit from "./unit/AddNewUnit.tsx";
import OrderFood from "./order/OrderFood.tsx";
import AddSupplier from "./supplier/AddSupplier.tsx";
import AddWarehouse from "./warehouse/AddWarehouse.tsx";
import AdminLayoutRTL from "./layout/AdminLayoutRTL.tsx";
import AllProduct from "./product/AllProduct.tsx";

function App() {
  return (
      <Router>
          <Routes>
              {/*<Route path="/" element={<Login />} />*/}
              <Route path="/" element={<AdminLayoutRTL />}>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/menu/details" element={<Detail />} />
                  <Route path="/product/add" element={<AddNewProduct />} />
                  <Route path="/product/all" element={<AllProduct />} />
                  <Route path="/product-category/add" element={<AddNewCategory />} />
                  <Route path="/unit/add" element={<AddNewUnit />} />
                  <Route path="/order/food" element={<OrderFood />} />
                  <Route path="/supplier/add" element={<AddSupplier />} />
                  <Route path="/warehouse/add" element={<AddWarehouse />} />
              </Route>
          </Routes>
      </Router>
  );
}
export default App;
