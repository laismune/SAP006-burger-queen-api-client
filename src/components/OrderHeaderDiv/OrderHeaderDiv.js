     
import React from 'react';

export const OrderHeaderDiv= ({Title, Value}) => { 

  return (
    <div data-testid='order-header-div'>
     <span>{Title}&nbsp;</span><span>{Value}</span>
    </div>
    )
  }

