import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { NotFound } from './NotFound'

afterEach(cleanup)

describe('Testing the NotFound Page', () => {

  it ('The  NotFound Page should be rendered in the document.', () => {
    const {queryByTestId} = render(<NotFound/>);
    expect(queryByTestId('not-found-page')).toBeInTheDocument();
  });

  
});
