import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Button } from '../src';

describe('Button', () => {
  it('Renders', async () => {
    const text = 'Feli Page Button!';
    render(<Button>{text}</Button>);
    screen.getByDisplayValue(text);
  });
  it('Click', async () => {});
});
