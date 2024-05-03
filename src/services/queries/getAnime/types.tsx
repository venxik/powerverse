export type AnimeItem = {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  trailer: Record<any, any>;
  approved: boolean;
  titles: any[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: any[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Record<any, any>;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Record<any, any>;
  producers: any[];
  licensors: any[];
  studios: any[];
  genres: any[];
  explicit_genres: any[];
  themes: any[];
  demographics: any[];
};

export type GetAnimeRequest = {
  status: 'airing' | 'complete' | 'upcoming';
  page?: number;
  q: string;
};
