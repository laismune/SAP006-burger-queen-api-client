import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { OrderListColumn } from './OrderListColumn'

afterEach(cleanup)

const obj = {Products:[{id:'1', content:null}, {id:'2', content:null}, {id:'3', content:'test'}, {id:'4', content:'test'}]}
const obj1 = {Products:[{id:'1', content:null}]}
const obj2 = {Products:[{id:'1', content:'abobora'}]}


describe('Testing the OrderListColumn  component', () => {
  it ('The OrderListColumn should be rendered in the document.', () => {
    const {queryByTestId} = render(<OrderListColumn data={obj}/>);
    expect(queryByTestId('order-column')).toBeInTheDocument();
  });

  it ('If column content === null, the content should be "-"', () => {
    const {queryByTestId} = render(<OrderListColumn data={obj1} ColumnContent='content'/>);
    expect(queryByTestId('column-content')).toHaveTextContent('-');
  });
  
  it ('If column content !== null, the content should be equal to the content variable', () => {
    const {queryByTestId} = render(<OrderListColumn data={obj2} ColumnContent='content'/>);
    expect(queryByTestId('column-content')).toHaveTextContent('abobora');
  });
  
}); 
