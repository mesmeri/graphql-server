import { LoginDto, RegisterDto } from "./user.types";
import { RequestOptions, RESTDataSource } from "apollo-datasource-rest";

class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3004/v1/users";
  }

  willSendRequest(request: RequestOptions) {
    request.headers.set("Authorization", this.context.token);
  }

  async login(loginDto: LoginDto) {
    return await this.post("/login", loginDto);
  }

  async register(registerDto: RegisterDto) {
    return await this.post("/register", registerDto);
  }

  async getUserById(id: string) {
    return await this.get(`/${encodeURIComponent(id)}`);
  }
}

export default UserAPI;
