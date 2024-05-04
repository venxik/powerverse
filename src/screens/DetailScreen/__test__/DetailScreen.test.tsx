import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import { screen } from '@testing-library/react-native';
import DetailScreen from '..';
import {
  mockAnimeItem,
  mockAnimeItemWithEmptyData,
} from '../../../../__mocks__/responses';

describe('DetailScreen', () => {
  it('can render', () => {
    render(<DetailScreen />);
    expect(screen).toBeDefined();
  });

  it('can show Running on device text and correct data', async () => {
    render(<DetailScreen />, {
      preloadedState: {
        main: {
          selectedAnime: mockAnimeItem,
        },
      },
    });

    expect(screen.getByTestId('txt-rating')).toHaveTextContent('G - All Ages');
    expect(screen.getByTestId('txt-score')).toHaveTextContent('90');
    expect(screen.getByTestId('txt-year')).toHaveTextContent('2001');
    expect(await screen.findByText('Running on device')).toBeOnTheScreen();
  });

  it('can show "-" when no data or text', async () => {
    render(<DetailScreen />, {
      preloadedState: {
        main: {
          selectedAnime: mockAnimeItemWithEmptyData,
        },
      },
    });

    expect(screen.getByTestId('txt-rating')).toHaveTextContent('-');
    expect(screen.getByTestId('txt-score')).toHaveTextContent('-');
    expect(screen.getByTestId('txt-year')).toHaveTextContent('-');
  });
});
