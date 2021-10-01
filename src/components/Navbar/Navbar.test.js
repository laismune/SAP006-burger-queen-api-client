import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { act } from "react-dom/test-utils";
import { NavbarRoom } from './Navbar'
import { handleLogout } from './Navbar'

afterEach(cleanup)

describe('Testing the Navbar component', () => {

  it ('The Navbar should be rendered in the document.', () => {
    const {queryByTestId} = render(<NavbarRoom/>);
    expect(queryByTestId('navbar')).toBeInTheDocument();
  });

  it('The handleLogout should be a function', () => {
    expect(typeof handleLogout).toBe('function')
  })

  it('The first Button in Navbar should have the class "navbar-sign-out"', () => {
    const {queryAllByTestId} = render(<NavbarRoom/>);
    const buttons = queryAllByTestId('button');
    const btn1 = buttons[0];
    expect(btn1).toHaveClass('navbar-sign-out');
  });

  it('The second Button in Navbar should have the class "navbar-button navbar-button-menu"', () => {
    const {queryAllByTestId} = render(<NavbarRoom employeRole='Salão'/>);
    const buttons = queryAllByTestId('button');
    const btn1 = buttons[1];
    expect(btn1).toHaveClass('navbar-button navbar-button-home');
  });


});
