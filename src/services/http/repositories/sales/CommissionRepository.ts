import { Sale } from "./models";
import { api, baseUrlV1 } from "../../api.service";

export class CommissionRepository {
  public static async commissions(date_init?: string, date_final?: string){
    var url = `${baseUrlV1}/sales/comissions/`

    if (date_init && date_final){
       url = `${baseUrlV1}/sales/comissions/?date_init=${date_init}&date_final=${date_final}`
    }
    try {
      const payload = await api.get(url)
      return payload.data
    } catch (err) {
      throw err
    }
  }

}