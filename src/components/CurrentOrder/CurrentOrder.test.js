import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CurrentOrder } from './Current.Order';

afterEach(cleanup)

describe('Testing the CurrentOrder  component', () => {

  const order = {'key':'test', 'id':'test', 'title':'test'}
  
    it ('The OrderTimeSection should be rendered in the document.', () => {
      const {queryByTestId} = render(<CurrentOrder order={order}/>);
      expect(queryByTestId('button')).toBeInTheDocument();
    });
  
   
    
  });
  