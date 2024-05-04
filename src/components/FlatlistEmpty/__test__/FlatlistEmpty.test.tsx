import React from 'react';
import { render } from '../../../../__mocks__/wrapper';
import { screen } from '@testing-library/react-native';
import FlatlistEmpty from '..';

describe('FlatlistEmpty', () => {
  it('can render', () => {
    render(<FlatlistEmpty />);
    expect(screen).toBeDefined();
  });
});
