// TODO: add correct type instead of any

export interface CreateArtistDto {
  firstName: string;
  secondName: string;
  middleName: string;
  birthDate: string;
  birthPlace: string;
  country: string;
  bands: [any];
  instruments: string;
}

export type UpdateArtistDto = Partial<CreateArtistDto> & { _id: string };
