import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { OrderHeaderDiv } from './OrderHeaderDiv'

afterEach(cleanup)


describe('Testing the OrderHeaderDiv  component', () => {
  it ('The OrderHeaderDivshould be rendered in the document.', () => {
    const {queryByTestId} = render(<OrderHeaderDiv/>);
    expect(queryByTestId('order-header-div')).toBeInTheDocument();
  });
  
}); 
