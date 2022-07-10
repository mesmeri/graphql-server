import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

import { CreateTrackDto, UpdateTrackDto } from "./track.types";

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3006/v1/tracks";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("authorization", this.context.token);
  }

  async getTrackById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  // TODO: implement pagination
  async getAll() {
    const data = await this.get("/");
    return data.items;
  }

  async create(createTrackDto: CreateTrackDto) {
    return await this.post("/", createTrackDto);
  }

  async update(id: string, updateTrackDto: UpdateTrackDto) {
    return await this.put(`/${encodeURIComponent(id)}`, updateTrackDto);
  }

  async deleteTrack(id: string): Promise<any> {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}

export default TrackAPI;
