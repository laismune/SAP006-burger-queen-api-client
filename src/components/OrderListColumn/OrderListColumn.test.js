import React from 'react';
import { render, cleanup} from '@testing-library/react';
import { OrderListColumn } from './OrderListColumn'

afterEach(cleanup)

describe('Testing the OrderListColumn  component', () => {

const Products =  [{'name':'cafe-com-leite',
 'title':'Café Com Leite',
 'id':'cafe-com-leite',
 'ingredientes':'1. Leite de vacas livres; 2. Café artesanal, semeado, colhido, moído e embalado por pequenos produtores na Etiópa (terra mãe do café).',
 'setor':'bebida',
 'tipo':'bebida-quente',
 'menu':'cafe-da-manha',
 'valor':7,
 'adicional':'nao',
 'img':'../assets/images-menu/cafe-com-leite.png',
 'alt':'Café com Leite',
 'importedImg':''
},
{'name':'cafe-americano',
 'title':'Café Americano',
 'id':'cafe-americano',
 'ingredientes':'1. Café artesanal, semeado, colhido, moído e embalado por pequenos produtores na Etiópa - terra mãe do café.',
 'setor':'bebida',
 'tipo':'bebida-quente',
 'menu':'cafe-da-manha',
 'valor':5,
 'adicional':'nao',
 'img':'../assets/images-menu/cafe-americano.png',
 'alt':'Café Americano',
 'importedImg':''
},
{'name':'sanduiche-presunto-queijo',
 'title':'Sanduíche de Presunto e Queijo',
 'id':'sanduiche-presunto-queijo',
 'ingredientes':'1. Pão de fermentação natural feito em casa. 2. Queijo artesanal. 3. Proteína de soja temperada, saborizada e texturizada como presunto.',
 'setor':'comida',
 'tipo':'sanduiche',
 'menu':'cafe-da-manha',
 'valor':10,
 'adicional':'sim',
 'img':'../assets/images-menu/sanduiche-presunto-queijo.png',
 'alt':'Sanduíche de Presunto e Queijo',
 'importedImg':''
}]
  
  it ('The OrderListColumn should be rendered in the document.', () => {
    const {queryByTestId} = render(<OrderListColumn Products={Products}/>);
    expect(queryByTestId('order-column')).toBeInTheDocument();
  });

  
});
