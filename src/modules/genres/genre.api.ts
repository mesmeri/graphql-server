import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

import { CreateGenreDto, UpdateGenreDto } from "./genre.types";

class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/v1/genres";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("authorization", this.context.token);
  }

  async getGenreById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }

  // TODO: implement pagination
  async getAll() {
    const data = await this.get("/");
    return data.items;
  }

  async create(createGenreDto: CreateGenreDto) {
    return await this.post("/", createGenreDto);
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    return await this.put(`/${encodeURIComponent(id)}`, updateGenreDto);
  }

  async deleteGenre(id: string): Promise<any> {
    return await this.delete(`/${encodeURIComponent(id)}`);
  }
}

export default GenreAPI;
