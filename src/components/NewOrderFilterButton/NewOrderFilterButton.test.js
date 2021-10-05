import React from 'react';
import { render, cleanup } from '@testing-library/react';
import {  NewOrderProductButton, NewOrderFilterButton } from './NewOrderFilterButton'


afterEach(cleanup)

describe('Testing the OrderTimeSection  component', () => {

const product = {'key':'test', 'id':'test', 'title':'test'}

  it ('The OrderTimeSection should be rendered in the document.', () => {
    const {queryByTestId} = render(<NewOrderProductButton product={product}/>);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it ('The NewOrderFilterButton should be rendered in the document.', () => {
    const {queryByTestId} = render(<NewOrderFilterButton/>);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  
});
