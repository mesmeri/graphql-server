import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";
import { CreateAlbumDto, UpdateAlbumDto } from "./album.types";

class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3005/v1/albums";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("authorization", this.context.token);
  }

  async getAlbumById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  // TODO: implement pagination
  async getAll() {
    const data = await this.get("/");
    return data.items;
  }

  async create(createAlbumDto: CreateAlbumDto) {
    return await this.post("/", createAlbumDto);
  }

  async update(id: string, updateAlbumDto: UpdateAlbumDto) {
    return await this.put(`/${encodeURIComponent(id)}`, updateAlbumDto);
  }

  async deleteArtist(id: string): Promise<any> {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}

export default AlbumAPI;
