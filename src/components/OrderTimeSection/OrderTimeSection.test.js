import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { OrderTimeSection } from './OrderTimeSection'

afterEach(cleanup)

describe('Testing the OrderTimeSection  component', () => {

  it ('The TOrderTimeSection should be rendered in the document.', () => {
    const {queryByTestId} = render(<OrderTimeSection />);
    expect(queryByTestId('order-time-header')).toBeInTheDocument();
  });

  
});
