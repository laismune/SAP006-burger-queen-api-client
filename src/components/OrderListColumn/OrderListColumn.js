     
import React from 'react';

export const OrderListColumn= ({ColumnName, ColumnContent, data, }) => { 

  return (
    <div data-testid='order-column' className={`current-order-all-products-column current-order-product-column-${ColumnContent}`}>
      <p className='current-order-header-third'>{ColumnName}</p>
      {data.Products.map((product) => 
        <div className='current-order-product-content' key={product[ColumnContent]+ product.id.toString()}>
          <span>{product[ColumnContent] === null ? '-' : product[ColumnContent]}</span>
        </div>
      )}
    </div>
    )
  }

