export interface CreateAlbumDto {
  name: string;
  released: string;
  artistsIds: string[];
  bandsIds: string[];
  trackIds: string[];
  genresIds: string[];
}

export type UpdateAlbumDto = Partial<CreateAlbumDto> & { name: string };
