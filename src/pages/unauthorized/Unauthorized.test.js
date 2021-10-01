import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react';
import { Unauthorized } from './Unauthorized'
import { Button } from '../../components/Button/Button'
import { createMemoryHistory } from "history";
import { Router } from "react-router";

afterEach(cleanup)

describe('Testing the Unauthorized Page', () => {

  it ('The  Unauthorized Page should be rendered in the document.', () => {
    const {queryByTestId} = render(<Unauthorized/>);
    expect(queryByTestId('unauthorized-page')).toBeInTheDocument();
  });

  it('The first Button in Unauthorized should call a fuction and should go to Login."', () => {
    const history = createMemoryHistory();
    const fn = jest.fn()
    const {queryByTestId} = render(<Button ButonClass='unauthorized-button unauthorized-sign-out-button' ButtonOnClick={fn}/>);
    const button = queryByTestId('button');

    fireEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1);
    expect(history.location.pathname).toBe("/")
  });

  it('The second Button in Unauthorized should call a fuction and should go to two different paths according to the employee role."', () => {
    const history = createMemoryHistory();
    const fn = jest.fn()
    const {queryByTestId} = render(<Button ButonClass='unauthorized-button unauthorized-go-back-button' currentEmployeeRole = 'kitchen' ButtonOnClick={fn}/>);
    
    const button = queryByTestId('button');
    fireEvent.click(button)
    expect(fn).toHaveBeenCalledTimes(1);
  });
  
});
