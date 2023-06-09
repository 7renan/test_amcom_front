import { Sale } from "./models";
import { api, baseUrlV1 } from "../../api.service";

// models
import { SaleCreate as SaleCreateModel } from "./models";

export class SaleRepository {
  public static async saleList(){
    try {
      const payload = await api.get(`${baseUrlV1}/sales`)
      console.log(payload.data)
      return payload.data
    } catch (err) {
      throw err
    }
  }

  public static async saleCreate(data: SaleCreateModel){
    try {
      const payload = await api.post(`${baseUrlV1}/sales/`, data=data)
      return payload.data
    } catch (err) {
      throw err
    }
  }

  public static async saleDetail(id: number){
    try {
      const payload = await api.get(`${baseUrlV1}/sales/${id}`)
      return payload.data
    } catch (err) {
      console.log(`A merda do erro ${err}`) 
      throw err
    }
  }

  public static async saleDelete(id: number){
    try {
      await api.delete(`${baseUrlV1}/sales/${id}/`)
    } catch (err) {
      throw err
    }
  }

  public static async saleUpdate(id: string, data: Sale){
    try {
      const payload = await api.put(`${baseUrlV1}/sales/${id}`, data=data)
      return payload.data
    } catch (err) {
      throw err
    }
  }


}