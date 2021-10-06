import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CurrentOrder } from './Current.Order';

afterEach(cleanup)

const orders = {id:'test', createdAt:'test', Products:[{id:'1', content:'a'}, {id:'2', content:'a'}, {id:'3', content:'a'}]}
const ordersBeingPrepared = {id:'test', status:'pending', createdAt:'test', Products:[{id:'1', content:'a'}, {id:'2', content:'a'}, {id:'3', content:'a'}]}
const ordersReady = {id:'test', status:'Pronto', createdAt:'test', Products:[{id:'1', content:'a'}, {id:'2', content:'a'}, {id:'3', content:'a'}]}
const ordersDelivered = {id:'test', status:'Entregue', createdAt:'test', Products:[{id:'1', content:'a'}, {id:'2', content:'a'}, {id:'3', content:'a'}]}
const roleRoom = 'room'

describe('Testing the CurrentOrder  component', () => {
  it ('The Current Order Component should be rendered in the document.', () => {
    const {queryByTestId} = render(<CurrentOrder order={orders} data={orders}/>);
      expect(queryByTestId('current-order-div')).toBeInTheDocument();
  });

  it ('The Current Order Component with status pending should have the class "current-order-div order-being-prepared-div" .', () => {
    const {queryByTestId} = render(<CurrentOrder order={ordersBeingPrepared} data={orders}/>);
      expect(queryByTestId('current-order-div')).toHaveClass('current-order-div order-being-prepared-div');
  });

  it ('The Current Order Component with status ready should have the class "current-order-div order-ready-div" .', () => {
    const {queryByTestId} = render(<CurrentOrder order={ordersReady} data={orders}/>);
      expect(queryByTestId('current-order-div')).toHaveClass('current-order-div order-ready-div');
  });

  it ('The Current Order Component with status delivered should have the class "current-order-div order-delivered-div" .', () => {
    const {queryByTestId} = render(<CurrentOrder order={ordersDelivered} data={orders}/>);
      expect(queryByTestId('current-order-div')).toHaveClass('current-order-div order-delivered-div');
  });

  it ('The Current Order Button', () => {
    const {queryAllByTestId} = render(<CurrentOrder order={ordersBeingPrepared} data={orders} role={roleRoom}/>);
      expect(queryAllByTestId('button'[0])).toHaveClass('kitchen-order-status-button kitchen-being-prepared-order-button');
  });
})
  