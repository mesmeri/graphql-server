export interface CreateGenreDto {
  name: string;
  description: string;
  country: string;
  year: number;
}

export type UpdateGenreDto = Partial<CreateGenreDto>;
