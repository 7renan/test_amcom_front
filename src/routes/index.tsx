import { Routes, Route } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";

// pages
import { Sale } from "../pages/sales/sales/Sale";
import { CustomerCreate } from "../pages/sales/salesCreate/SaleCreate";
import { SaleDetail } from "../pages/sales/saleDetail/SaleDetail";

import { Commision } from "../pages/sales/Comission/Comission";



export function MainRoutes() {
  return (
    <Routes>

      {/* sales */}
      <Route path={AppRoutes.saleList} element={<Sale />} />
      <Route path={AppRoutes.saleCreate} element={<CustomerCreate />} />
      <Route path={`${AppRoutes.saleDetail}/:id`} element={<SaleDetail />} />

      {/* commissions */}
      <Route path={AppRoutes.commissions} element={<Commision />} />

    </Routes>
  )
}
