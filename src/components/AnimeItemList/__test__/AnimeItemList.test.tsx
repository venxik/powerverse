import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import AnimeItemList from '..';
import { fireEvent, screen } from '@testing-library/react-native';
import {
  mockAnimeItem,
  mockAnimeItemWithEmptyData,
} from '../../../../__mocks__/responses';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const actualModule = jest.requireActual('@react-navigation/native');
  return {
    ...actualModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
    useIsFocused: jest.fn(),
  };
});

describe('AnimeItemList', () => {
  it('can render', () => {
    render(<AnimeItemList data={mockAnimeItem} />);
    expect(screen).toBeDefined();
  });

  it('can show correct data', () => {
    render(<AnimeItemList data={mockAnimeItem} />);
    expect(screen.getByTestId('txt-rating')).toHaveTextContent('G - All Ages');
    expect(screen.getByTestId('txt-score')).toHaveTextContent('Score: 90');
    expect(screen.getByTestId('txt-year')).toHaveTextContent('2001');
  });

  it('can show "-" when no data or text', async () => {
    render(<AnimeItemList data={mockAnimeItemWithEmptyData} />);
    expect(screen.getByTestId('txt-rating')).toHaveTextContent('-');
    expect(screen.getByTestId('txt-score')).toHaveTextContent('Score: -');
    expect(screen.getByTestId('txt-year')).toHaveTextContent('-');
  });

  it('can navigate to detail screen', async () => {
    render(<AnimeItemList data={mockAnimeItem} />, {
      preloadedState: { main: { selectedAnime: null } },
    });
    const button = screen.getByTestId('anime-item');

    fireEvent.press(button);
    expect(mockedNavigate).toHaveBeenCalledWith('DetailScreen');
  });
});
