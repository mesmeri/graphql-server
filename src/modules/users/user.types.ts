export interface RegisterDto {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  favouriteArtistIds: string[];
  favouriteSongsIds: string[];
  favouriteBandsIds: string[];
  favouriteGenresIds: string[];
}
