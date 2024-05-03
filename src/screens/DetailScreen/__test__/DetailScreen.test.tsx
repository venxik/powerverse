import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import { screen } from '@testing-library/react-native';
import DetailScreen from '..';

const mockItem = {
  mal_id: 0,
  url: 'string',
  images: {
    jpg: {
      image_url: 'string',
      small_image_url: 'string',
      large_image_url: 'string',
    },
    webp: {
      image_url: 'string',
      small_image_url: 'string',
      large_image_url: 'string',
    },
  },
  trailer: {
    youtube_id: 'string',
    url: 'string',
    embed_url: 'string',
  },
  approved: true,
  titles: [
    {
      type: 'string',
      title: 'string',
    },
  ],
  title: 'string',
  title_english: 'string',
  title_japanese: 'string',
  title_synonyms: ['string'],
  type: 'TV',
  source: 'string',
  episodes: 0,
  status: 'Finished Airing',
  airing: true,
  aired: {
    from: 'string',
    to: 'string',
    prop: {
      from: {
        day: 0,
        month: 0,
        year: 0,
      },
      to: {
        day: 0,
        month: 0,
        year: 0,
      },
      string: 'string',
    },
  },
  duration: 'string',
  rating: 'G - All Ages',
  score: 0,
  scored_by: 0,
  rank: 0,
  popularity: 0,
  members: 0,
  favorites: 0,
  synopsis: 'string',
  background: 'string',
  season: 'summer',
  year: 0,
  broadcast: {
    day: 'string',
    time: 'string',
    timezone: 'string',
    string: 'string',
  },
  producers: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  licensors: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  studios: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  genres: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  explicit_genres: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  themes: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
  demographics: [
    {
      mal_id: 0,
      type: 'string',
      name: 'string',
      url: 'string',
    },
  ],
};

describe('DetailScreen', () => {
  it('can render', () => {
    render(<DetailScreen />);
    expect(screen).toBeDefined();
  });

  it('can show Running on device text', async () => {
    render(<DetailScreen />, {
      preloadedState: {
        main: {
          selectedAnime: mockItem,
        },
      },
    });

    expect(await screen.findByText('Running on device')).toBeOnTheScreen();
  });
});
