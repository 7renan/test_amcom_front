
import { api, baseUrlV1 } from "../../api.service";

export class CustomerRepository {
  public static async customers(){

    try {
      const payload = await api.get(`${baseUrlV1}/customers/`)
      return payload.data
    } catch (err) {
      throw err
    }
  }

}