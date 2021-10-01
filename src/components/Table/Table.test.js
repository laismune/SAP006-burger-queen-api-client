import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { Table } from './Table'

afterEach(cleanup)

describe('Testing the Table component', () => {

  it ('The Tablecomponent should be rendered in the document.', () => {
    const {queryByTestId} = render(<Table/>);
    expect(queryByTestId('table-div')).toBeInTheDocument();
  });

  
});
