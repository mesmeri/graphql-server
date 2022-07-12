import { CreateGenreDto } from "./../genres/genre.types";
import { CreateArtistDto } from "./../artists/artist.types";

interface MemberDto {
  artist: CreateArtistDto;
  instrument: string;
  years: string[];
}

export interface CreateBandDto {
  name: string;
  origin: string;
  members: MemberDto;
  website: String;
  genres: CreateGenreDto;
}

export type UpdateBandDto = Partial<CreateBandDto>;
