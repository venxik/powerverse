import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import { screen } from '@testing-library/react-native';
import FlatlistLoading from '..';

jest.useFakeTimers();

describe('FlatlistLoading', () => {
  it('can render', () => {
    render(<FlatlistLoading />);
    expect(screen).toBeDefined();
  });
});
