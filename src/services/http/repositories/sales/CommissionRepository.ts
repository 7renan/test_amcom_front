import { Sale } from "./models";
import { api, baseUrlV1 } from "../../api.service";

export class CommissionRepository {
  public static async commissions(date_init: string = '2023-06-01', date_final: string = '2023-06-06'){
    try {
      const payload = await api.get(`${baseUrlV1}/sales/comissions/?date_init=${date_init}&date_final=${date_final}`)
      return payload.data
    } catch (err) {
      throw err
    }
  }

}