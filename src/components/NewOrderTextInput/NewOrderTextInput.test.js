import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { NewOrderTextInput } from './NewOrderTextInput'

afterEach(cleanup)


describe('Testing the NewOrderTextInput   component', () => {
  it ('The NewOrderTextInput should be rendered in the document.', () => {
    const {queryByTestId} = render(<NewOrderTextInput />);
    expect(queryByTestId('new-order-text-input')).toBeInTheDocument();
  });

  it ('The NewOrderTextInput, when the label === mesa, should have the paceholder = ___', () => {
    const {queryByPlaceholderText} = render(<NewOrderTextInput Label='Mesa'/>);
    expect(queryByPlaceholderText('___')).toBeInTheDocument();
  });

  it ('The NewOrderTextInput, when the label === cliente, should have the paceholder =________________', () => {
    const {queryByPlaceholderText} = render(<NewOrderTextInput Label='Cliente'/>);
    expect(queryByPlaceholderText('________________')).toBeInTheDocument();
  });
  
}); 
