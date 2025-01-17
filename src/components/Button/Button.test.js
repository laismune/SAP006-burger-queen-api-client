import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { Button } from './Button'

afterEach(cleanup)

describe('Testing the Button component', () => {

  it ('The Button component should rendered in the document.', () => {
    const {queryByTestId} = render(<Button Role='test'/>);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it ('The Button component should be rendered in the document with the given label.', () => {
    const label = 'test'
    render(<Button Role='test'>{label}</Button>);
    const btn = screen.getByText(label);
    expect(btn).toBeInTheDocument();
  });

  it ('The Button component should dispatch a function when clicked.', () => {
    const fn = jest.fn();
    const {queryByTestId} = render(<Button Role='test' ButtonOnClick={fn}/>)
    fireEvent.click(queryByTestId('button'))
    expect(fn).toHaveBeenCalledTimes(1);
  });

  


});