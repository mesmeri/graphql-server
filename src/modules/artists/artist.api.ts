import { CreateArtistDto, UpdateArtistDto } from "./artist.types";
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3002/v1/artists";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("authorization", this.context.token);
  }

  async getArtistById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  // TODO: implement pagination
  async getAll() {
    const data = await this.get("/");
    return data.items;
  }

  async create(createArtistDto: CreateArtistDto) {
    return await this.post("/", createArtistDto);
  }

  async update(id: string, updateArtistDto: UpdateArtistDto) {
    return await this.put(`/${encodeURIComponent(id)}`, updateArtistDto);
  }

  async deleteArtist(id: string): Promise<any> {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}

export default ArtistAPI;
