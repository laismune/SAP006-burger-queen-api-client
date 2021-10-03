import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { ProductCard } from './ProductCard'

afterEach(cleanup)

describe('Testing the ProductCard component', () => {
 
  it ('The ProductCard should be rendered in the document.', () => {
    const products = {name:'productcard', id:'first'}
    const {queryByTitle} = render(<ProductCard id={products.id} className='menu-card-div' data-testid='product-card-div'/>);
    expect(queryByTitle('product-card-div')).toBeInTheDocument();
  });

  
});
