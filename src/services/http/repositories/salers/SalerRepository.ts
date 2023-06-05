
import { api, baseUrlV1 } from "../../api.service";

export class SalerRepository {
  public static async salers(){

    try {
      const payload = await api.get(`${baseUrlV1}/salers/`)
      return payload.data
    } catch (err) {
      throw err
    }
  }

}