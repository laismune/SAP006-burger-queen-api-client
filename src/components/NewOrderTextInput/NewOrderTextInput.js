     
import React from 'react';

export const NewOrderTextInput = ({Label, onChangeInput}) => { 

  return (
    <div data-testid='new-order-text-input'>
      <label>{Label}&nbsp;&nbsp;</label>
      <input 
        className='table-input' 
        type='text' 
        placeholder= {Label === 'Mesa' ? '___' : '________________'}
        autoComplete='off' 
        onChange={onChangeInput}/>
      </div>
    )
  }

