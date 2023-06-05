
import { api, baseUrlV1 } from "../../api.service";

export class ProductRepository {
  public static async products(){

    try {
      const payload = await api.get(`${baseUrlV1}/products/`)
      return payload.data
    } catch (err) {
      throw err
    }
  }

}