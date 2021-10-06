import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { DefaultModal, TableOrdersModal, MenuModal } from './Modal'

afterEach(cleanup)

describe('Testing the Default component', () => {
  it('The Default Modal should rendered in the document.', () => {
    const {queryByTestId} = render(<DefaultModal />);
    expect(queryByTestId('default-modal')).toBeInTheDocument();
  });

  it('The Default Modal when type is two-buttons-modal should have two Buttons.', () => {
    const {queryAllByTestId} = render(<DefaultModal Type='two-buttons-modal'/>);
    expect(queryAllByTestId('button')).toHaveLength(2);
  });
})


const orders = [
  {id:'test', createdAt:'test', Products:[{'id':'1'}, {'id':'2'}, {'id':'3'}]},
  {id:'test2', createdAt:'test2', Products:[{'id':'1'}, {'id':'2'}, {'id':'3'}]}, 
  {id:'test3', createdAt:'test3', Products:[{'id':'1'}, {'id':'2'}, {'id':'3'}]}
]

describe('Testing the TableOrdersModal component', () => {
  it('The TableOrdersModal should rendered in the document.', () => {
    const {queryByTestId} = render(<TableOrdersModal orders={orders}/>);
    expect(queryByTestId('table-orders-modal')).toBeInTheDocument();
  });
})

describe('Testing the MenuModal component', () => {
  it('The MenuModal should rendered in the document.', () => {
    const {queryByTestId} = render(<MenuModal/>);
    expect(queryByTestId('menu-modal')).toBeInTheDocument();
  });
})
