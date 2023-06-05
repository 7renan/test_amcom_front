import { Routes, Route } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";

// pages - dashboards
import { Sale } from "../pages/sales/sales/Sale";
import { CustomerCreate } from "../pages/sales/salesCreate/CustomerCreate";
import { SaleDetail } from "../pages/sales/SaleDetail/SaleDetail";



export function MainRoutes() {
  return (
    <Routes>

      <Route path={AppRoutes.saleList} element={<Sale />} />
      <Route path={AppRoutes.saleCreate} element={<CustomerCreate />} />
      <Route path={`${AppRoutes.saleDetail}/:id`} element={<SaleDetail />} />
    </Routes>
  )
}
