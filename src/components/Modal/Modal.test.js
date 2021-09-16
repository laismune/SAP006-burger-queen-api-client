import React from 'react';
import { render, screen, fireEvent, cleanup} from '@testing-library/react';
import { Button } from '../Button/Button';
import { AuthModal } from './Modal'

afterEach(cleanup)

describe('Testing the AuthModal component', () => {

  it('The AuthModal Section component should be rendered in the document.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalSection')).toBeInTheDocument();
  });

  it('The AuthModal Section component should have the class "modal-background".', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalSection')).toHaveClass('modal-background');
  });

  it('The AuthModal Div component should be rendered in the document.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalDiv')).toBeInTheDocument();
  });

  it('The AuthModal Div component should have the class "modal-container".', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalDiv')).toHaveClass('modal-container');
  });

  it('The AuthModal Content component should be rendered in the document.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalContent')).toBeInTheDocument();
  });

  it ('The AuthModal Content component should be rendered in the document with the given label.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('authModalContent')).toHaveTextContent('test');
  });

  it('The AuthModal Button component should rendered in the document.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('button')).toBeInTheDocument();
  });

  it('The AuthModal Button component should be rendered in the document with the given label.', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('button')).toHaveTextContent('test');
  });

  it('The AuthModal Button component should be rendered in the document with the given label, role = authErrorModal-login.', () => {
    const {queryByTestId} = render(<AuthModal Role='authErrorModal-login' />);
    expect(queryByTestId('button')).toHaveTextContent('Tente novamente');
  });

  it('The AuthModal Button component should be rendered in the document with the given label, role = authErrorModal-register.', () => {
    const {queryByTestId} = render(<AuthModal Role='authErrorModal-register' />);
    expect(queryByTestId('button')).toHaveTextContent('Tente novamente');
  });

  it('The AuthModal Button component should have the class "auth-modal-button".', () => {
    const {queryByTestId} = render(<AuthModal Role='test' />);
    expect(queryByTestId('button')).toHaveClass('test-class');
  });

  it ('The AuthModal Button component should dispatch a function when clicked.', () => {
    const fn = jest.fn();
    const {queryByTestId} = render(<AuthModal Role='test' ButtonOnClick={fn}/>)
    fireEvent.click(queryByTestId('button'))
    expect(fn).toHaveBeenCalledTimes(1);
  });


});