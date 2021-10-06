import React from 'react';
import { render, cleanup, fireEvent} from '@testing-library/react';
import { NavbarRoom } from './Navbar'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom';

afterEach(cleanup)

describe('Testing the Navbar component', () => {
  beforeEach(() => jest.resetModules());

  it ('The Navbar should be rendered in the document.', () => {
    const {queryByTestId} = render(<NavbarRoom/>);
    expect(queryByTestId('navbar')).toBeInTheDocument();
  });

  it('The first Button in Navbar should have the class "navbar-sign-out"', () => {
    const {queryAllByTestId} = render(<NavbarRoom/>);
    const buttons = queryAllByTestId('button');
    const btn1 = buttons[0];
    expect(btn1).toHaveClass('navbar-sign-out');
  });








});
