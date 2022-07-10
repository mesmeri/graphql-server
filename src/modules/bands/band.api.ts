import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

import { CreateBandDto, UpdateBandDto } from "./band.types";

class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3003/v1/bands";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("authorization", this.context.token);
  }

  async getBandById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  // TODO: implement pagination
  async getAll() {
    const data = await this.get("/");
    return data.items;
  }

  async create(createBandDto: CreateBandDto) {
    return await this.post("/", createBandDto);
  }

  async update(id: string, updateBandDto: UpdateBandDto) {
    return await this.put(`/${encodeURIComponent(id)}`, updateBandDto);
  }

  async deleteBand(id: string): Promise<any> {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}

export default BandAPI;
