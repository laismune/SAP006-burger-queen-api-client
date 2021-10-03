import React from 'react';
import { render, fireEvent, cleanup} from '@testing-library/react';
import { DefaultModal, MenuModal, TableOrdersModal } from './Modal'

afterEach(cleanup)

describe('Testing the Default component', () => {
  it('The Default Modal should rendered in the document.', () => {
    const {queryByTestId} = render(<DefaultModal />);
    expect(queryByTestId('default-modal')).toBeInTheDocument();
  });
})

describe('Testing the MenuModalcomponent', () => {
  it('The Menu Modal should rendered in the document.', () => {
    const {queryByTestId} = render(<MenuModal />);
    expect(queryByTestId('menu-modal')).toBeInTheDocument();
  });
})

const orders = [{'id':'test', 'createdAt':'test'}, {'id':'test2', 'createdAt':'test2'}, {'id':'test3', 'createdAt':'test3'}]

describe('Testing the TableOrdersModal component', () => {
  it('The TableOrdersModal should rendered in the document.', () => {
    const {queryByTestId} = render(<TableOrdersModal orders={orders}/>);
    expect(queryByTestId('table-orders-modal')).toBeInTheDocument();
  });
})
