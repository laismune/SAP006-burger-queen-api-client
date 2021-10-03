import { getTotalOrderBill, getTotalTableBill, orderManipulation } from "../ordersMath";

const menu = [{'name':'cafe-com-leite',
'id':1,
'price':7,
},
{'name':'cafe-americano',
'id':2,
'price':5,
},
{'name':'sanduiche-presunto-queijo',
'id':3,
'price':10,
},
{'name':'suco-de-fruta-natural',
'id':4,
'price':7,
},]
 
const ordersToGetMenuInformation = [{
  'id':2860, 
  'Products':[{
    'id':1,
    'qtd':1,
  },
  {
    'id':2,
    'qtd':3,
  }],
}]


const orders = [{
  'id':2860, 
  'orderTotalBill':9, 
  'table':4, 
  'Products':[{
    'id':1,
    'price':7,
    'qtd':1,
    'total':5
  },
  {
    'id':1,
    'price':4,
    'qtd':1,
    'total':5
  }]
}, {
  'id':2860, 
  'orderTotalBill':20, 
  'table':5, 
  'products':[{
    'id':29,
    'price':5,
    'qtd':1,
    'total':5
  },
  {
    'id':29,
    'price':15,
    'qtd':1,
    'total':5
  }]
},
{
  'id':2860, 
  'orderTotalBill':29, 
  'table':5, 
  'products':[{
    'id':29,
    'price':5,
    'qtd':1,
    'total':5
  },
  {
    'id':29,
    'price':14,
    'qtd':1,
    'total':5
  }]
}]

describe('getOrderTotalBill', () => {
  it('getOrderTotalBill should be a function', () => {
    expect(typeof getTotalOrderBill).toBe('function')
  })

  it('when orders = orderstoGetMenuInformation, the totalOrderBill = hgfhgf', () => {
    console.log(ordersToGetMenuInformation)
    getTotalOrderBill(ordersToGetMenuInformation, menu)

    console.log(ordersToGetMenuInformation)
   
    
  })
})

describe('getTotalTableBill', () => {
  it('getTotalTableBill should be a function', () => {
    expect(typeof getTotalTableBill).toBe('function')
  })

  it('when orders = orders and tableId =5, getTotalOrderBil = 15', () => {
    const result = getTotalTableBill(orders, '5')
    expect(result).toBe(49)
  })
})

describe('orderManipulation', () => {
  it('orderManipulation should be a function', () => {
    expect(typeof orderManipulation).toBe('function')
  })
})