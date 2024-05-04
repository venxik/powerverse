import React from 'react';
import { waitFor, renderHook, fireEvent } from '@testing-library/react-native';
import { AllTheProviders, render } from '../../../../__mocks__/wrapper';
import { useGetAnimeListQuery } from '@Services/queries/getAnime';
import { HomeScreen } from '@Screens';
import fetchMock from 'jest-fetch-mock';
import {
  mockAnimeItem,
  mockGetAnimeListResponse,
} from '../../../../__mocks__/responses';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe('HomeScreen', () => {
  it('can show loading indicator and 1 data', async () => {
    const screen = render(<HomeScreen />);
    fetchMock.mockResponse(JSON.stringify(mockGetAnimeListResponse));

    renderHook(() => useGetAnimeListQuery({ status: 'complete', q: '' }), {
      wrapper: AllTheProviders,
    });

    expect(screen.getByTestId('flatlist-loading')).toBeDefined();

    await waitFor(() => {
      expect(screen.queryAllByTestId('anime-item')).toHaveLength(2);
      expect(screen.getByTestId('separator')).toBeDefined();
    });
  });

  it('can show error text', async () => {
    const screen = render(<HomeScreen />);

    fetchMock.mockReject(new Error('Unknown error occurred'));

    renderHook(() => useGetAnimeListQuery({ status: 'complete', q: '' }), {
      wrapper: AllTheProviders,
    });

    expect(await screen.findByTestId('flatlist-error')).toBeDefined();
  });

  it('can show empty text', async () => {
    const screen = render(<HomeScreen />);

    fetchMock.mockResponse(JSON.stringify({ data: [], pagination: {} }));

    renderHook(() => useGetAnimeListQuery({ status: 'complete', q: '' }), {
      wrapper: AllTheProviders,
    });

    expect(await screen.findByTestId('flatlist-empty')).toBeDefined();
  });

  it('can change text on search bar and return new data', async () => {
    const screen = render(<HomeScreen />);

    fetchMock.mockResponse(JSON.stringify(mockGetAnimeListResponse));

    renderHook(() => useGetAnimeListQuery({ status: 'complete', q: '' }), {
      wrapper: AllTheProviders,
    });

    await waitFor(async () => {
      const textInput = screen.getByTestId('search-bar');
      fireEvent.changeText(textInput, 'query');

      const mockItemUpdated = {
        ...mockGetAnimeListResponse,
        data: [{ ...mockAnimeItem, title: 'This is query data' }],
      };

      fetchMock.mockResponse(JSON.stringify(mockItemUpdated));

      await waitFor(() => {
        expect(screen.getByTestId('search-bar')).toHaveDisplayValue('query');
        expect(screen.getByText('This is query data')).toBeDefined();
      });
    });
  });
});
