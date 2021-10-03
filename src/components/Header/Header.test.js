import React from 'react';
import { render, cleanup} from '@testing-library/react';

afterEach(cleanup)

const resizeWindow = (x, y) => {
  window.innerWidth = x;
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
}


describe('Testing the Header component', () => {
  
  
  it('The Header img should rendered in the document with Portrait Layout.', () => {
    resizeWindow(768, 1024);
  
    const {queryByTestId} = render(<img alt='Logo Berg'data-testid='img-logo' className='logo'/>);
    expect(queryByTestId('img-logo')).toBeInTheDocument();
  });

  it('The Header img should rendered in the document with Landscape Layout.', () => {
    const {queryByTestId} = render(<img data-testid='img-auth-welcome'className='auth-welcome' alt='Welcome'/>);
    expect(queryByTestId('img-auth-welcome')).toBeInTheDocument();
  });

});