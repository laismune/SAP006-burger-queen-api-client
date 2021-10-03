/* eslint-disable no-sequences */


export const getTotalOrderBill = (orders, menu) => {
  orders.map((order) => order.Products.map((element) => element = Object.assign(element, Object.assign({}, ...menu.filter((product) =>  product.id === element.id)) ) ));
  orders.map((order) => order.Products.map((element) => element.total = element.price * element.qtd));
  orders.map((order) => order.orderTotals = order.Products.map((element) => element.total));
  orders.map((order) => order.orderTotalBill = order.orderTotals.reduce((acc, curr) => acc + curr, 0));
}
  
export const getTotalTableBill = (orders, tableId) => {
  orders = orders.filter((order) => order.table.toString() === tableId)
  const tableOrdersBill = orders.map((order) => order.orderTotalBill)
  const totalTableBill = tableOrdersBill.reduce((acc, curr) => acc + curr, 0);
  return totalTableBill
}
  
export const orderManipulation = (menu, chosenProducts, expectedValue) => {
  const productTotals = [];
  menu.map((product) => product.id = product.id.toString());
 const qtdOfChosenProducts = chosenProducts.reduce((acc, curr) => (acc[curr] = (acc[curr] || 0) + 1, acc), {});
 
 const chosenProductsData = menu.filter((product) => chosenProducts.includes(product.id));
 chosenProductsData.map((product) => product.qtd = qtdOfChosenProducts[product.id]);  
 chosenProductsData.map((product) => product.total = [product.qtd]*[product.price]);
 chosenProductsData.map((product) => productTotals.push(product.total));

  const orderData = chosenProductsData;
  const orderBill = productTotals.reduce((acc, curr) => acc + curr, 0);
  const orderResume = chosenProductsData.map(product => ({ id: product.id, qtd:product.qtd.toString()}));
  
  switch(expectedValue) {
    case 'data':
      return orderData;
    case 'bill':
      return orderBill;
    case 'resume':
      return orderResume;
    default:
      return 'ERROR'
  }
}




 

