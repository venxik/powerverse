import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import { screen } from '@testing-library/react-native';
import FlatlistError from '..';

describe('FlatlistError', () => {
  it('can render', () => {
    render(<FlatlistError />);
    expect(screen).toBeDefined();
  });
});
