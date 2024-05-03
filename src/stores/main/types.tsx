import { Nullable } from '@Model/api';
import { AnimeItem } from '@Services/queries/getAnime';

export type MainState = {
  selectedAnime: Nullable<AnimeItem>;
};
