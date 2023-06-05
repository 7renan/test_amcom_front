import { Routes, Route } from "react-router-dom";

import { AppRoutes } from "./AppRoutes";

// pages
import { Sale } from "../pages/sales/sales/Sale";
import { SaleDetail } from "../pages/sales/saleDetail/SaleDetail";
import { SaleEdit } from "../pages/sales/saleEdit/SaleEdit";

import { Commision } from "../pages/sales/Comission/Comission";



export function MainRoutes() {
  return (
    <Routes>

      {/* sales */}
      <Route path={AppRoutes.saleList} element={<Sale />} />
      <Route path={`${AppRoutes.saleDetail}/:id`} element={<SaleDetail />} />
      <Route path={`${AppRoutes.saleEdit}/:id`} element={<SaleEdit />} />

      {/* commissions */}
      <Route path={AppRoutes.commissions} element={<Commision />} />

    </Routes>
  )
}
