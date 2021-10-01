     
import React from 'react';
import './ProductCard.scss';


import { Button } from '../Button/Button';

export const ProductCard = ({ButtonOnClick, products}) => { 

  return (
    <div className='menu-card-div' id={products.id} title='product-card-div'>
      <Button ButtonClass='menu-open-ingredients-modal' children='+' ButtonOnClick={ButtonOnClick} ButtonId={products.id}/>
      <img className='menu-card-img' src={products.importedImg}  alt={products.alt}/>
    </div>
    )
  }

