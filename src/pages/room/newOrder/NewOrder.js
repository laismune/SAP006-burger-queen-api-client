/* eslint-disable no-sequences */

import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../../components/Button/Button';
import { DefaultModal } from '../../../components/Modal/Modal';
import { NewOrderTextInput } from '../../../components/NewOrderTextInput/NewOrderTextInput';
import { NewOrderFilterButton, NewOrderProductButton } from '../../../components/NewOrderFilterButton/NewOrderFilterButton';

import { getErrorCase } from '../../../services/general';
import { orderManipulation} from '../../../services/ordersMath'
import { sendOrderToKitchen, getAllOrders  } from '../../../services/orders';

import './NewOrder.scss';

export const NewOrder = () => {
  const history = useHistory();

  const [table, setTable] = useState('');
  const [customer, setCustomerName] = useState('');

  const [filteredMenu, setFilteredMenu] = useState([]);
  const [showAllProducts, setShowAllProducts] = useState(true);

  const [orderedProducts, setOrderedProducts] = useState([]);

  const [currentOrders, setCurrentOrders] = useState([]);
  const [occupiedTables, setOccupiedTables] = useState([]);

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  const menu = (JSON.parse(localStorage.getItem('menu')));
  const token = localStorage.getItem('currentEmployeeToken');

  const orderedProductsData = orderManipulation(menu, orderedProducts, 'data');
  const orderResume = orderManipulation(menu, orderedProducts, 'resume');
  const orderBill = orderManipulation(menu, orderedProducts, 'bill');

  const orderInformation = { token, customer, table, orderResume};

  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setModalContent(modalContent => ({...modalContent, Text: result, Type: 'one-button-modal'}));
    Object.keys(data).includes('code') && setModal(true);
  }

  useEffect(() => {
    getAllOrders(token)
    .then(responseJson => {
      handleAPIErrors(responseJson);
      setCurrentOrders(responseJson);
    })   
  }, [token]);
  
  useEffect(() => {
    const orderTables = [];
    currentOrders.map((order) => orderTables.push(order.table.toString()));
    setOccupiedTables(orderTables.filter((v, i, a) => a.indexOf(v) === i));
  }, [currentOrders]);
  
  const filterMenuButtons = ([productProp], value) => {
    const filteredMenu = menu.filter((product) => product[productProp] === value);
    return filteredMenu;
  }
  const decreaseProductQuantity = (value) => {
    let array = [...orderedProducts];
    const index = array.indexOf(value);
    if (index > -1){
      array.splice(index, 1);
      setOrderedProducts(array);
    }
  }

  const checkCustomerData = () => {
    if(customer.length <2){
      setModalContent(modalContent => ({...modalContent, 
        Type: 'one-button-modal',
        Text: 'Por favor, insira o nome do cliente',
        ButtonChildren: 'OK'
      }))
      setModal(true);
      return 'Error';
    }
    else if(table.length < 1||table.length > 2 || table[0] === "0" || parseInt(table) > 12){
      setModalContent(modalContent =>
        ({...modalContent, 
          Type: 'one-button-modal',
          Text: 'Por favor, insira um número de mesa válido. O zero à esquerda não deve ser incluso.',
          ButtonChildren: 'OK' 
        }))
      setModal(true);
      return 'Error';
    }
    else if(orderResume.length <1){
      setModalContent(modalContent =>
        ({...modalContent, 
          Type: 'one-button-modal',
          Text: 'O resumo do pedido está vazio!', 
          ButtonChildren: 'OK'
        }))
      setModal(true);
      return "Error";
    }
  }

  const sendOrder = () =>{
    if (occupiedTables.includes(table)) {
      setModalContent(modalContent =>
        ({...modalContent, 
          Type: 'two-buttons-modal',
          Text: 'Atenção! Esta mesa está ocupada.', 
          ButtonChildren:'Escolha outra mesa',
          ButtonSecondChildren:'Insira novos pedidos nesta mesa',
          ButtonSecondClick: () => {
            sendOrderToKitchen({orderInformation})
            .then((responseJson) => {
              handleAPIErrors(responseJson);
              setModalContent(modalContent =>
                ({...modalContent, 
                  Type: 'two-buttons-modal',
                  Text: 'As chefs já estão dando conta do pedido! O que você  deseja fazer?.', 
                  ButtonChildren:'Fazer um novo pedido',
                  ButtonSecondChildren:'Voltar para o salão',
                  ButtonSecondClick: () => history.push('/room')
                })
              ) 
              setCurrentOrders(currentOrders => [...currentOrders, responseJson])
            }).then(() => setModal(true)) 
          }
        })
      )
      setModal(true)
    } else {
      sendOrderToKitchen({orderInformation})
      .then((responseJson) => {
        handleAPIErrors(responseJson);
        setModalContent(modalContent =>
          ({...modalContent, 
            Type: 'two-buttons-modal',
            Text: 'As chefs já estão dando conta do pedido! O que você  deseja fazer?.', 
            ButtonChildren:'Fazer um novo pedido',
            ButtonSecondChildren:'Voltar para o salão',
            ButtonSecondClick: () => history.push('/room')
          })
        )
        setCurrentOrders(currentOrders => [...currentOrders, responseJson])
      }).then(() => setModal(true))
    } 
  }
  
  return (
    <div>
      <main className='new-order-main'>
        <Button ButtonClass='new-order-go-back-button' ButtonOnClick={() => history.push('/room')}/>
        <div className='new-order-section'>
          <section className='new-order-note-div'>
            <fieldset>
              <NewOrderTextInput Label = 'Mesa' onChangeInput={(event)=> setTable(event.target.value)}/>
              <NewOrderTextInput Label = 'Cliente' onChangeInput={(event)=> setCustomerName(event.target.value)}/>
            </fieldset>
            <div className='new-order-products-list-head'>
              <h1>Produto</h1>
              <h1>Qtd.</h1>
              <h1>R$</h1>
            </div>
            <div className='new-order-full-list'>
              {orderedProductsData.map((product) => 
                <div className='new-order-products-list-content' key={product.id}>
                  <p className='new-order-product-list-name'>{product.name}</p>
                  <div className='new-order-quantity-div'>
                    <Button ButtonClass='new-order-modify-quantity new-order-modify-quantity-minus' ButtonOnClick={ () => decreaseProductQuantity(product.id)}/>
                    <p className='new-order-product-list-quantity'>{product.qtd}</p>
                    <Button ButtonClass='new-order-modify-quantity new-order-modify-quantity-plus' ButtonOnClick={ () => setOrderedProducts(orderedProducts => [...orderedProducts, product.id])}/>
                  </div>
                  <p className='new-order-product-list-price'>{product.total}</p>
                  <Button ButtonClass='new-order-trash' ButtonOnClick={ () => setOrderedProducts(orderedProducts.filter(elements => elements !== product.id))}/>
                </div>
              )}
            </div>
            <div className='new-order-price'>
                <h1>Total</h1><h1>R$ {orderBill}</h1>
            </div>
          </section>
          <Button 
            ButtonClass='new-order-send-order-to-kitchen' 
            children='Enviar para cozinha' 
            ButtonOnClick={() => checkCustomerData() !== 'Error' && sendOrder()}
          />
          <section className='new-order-filter-buttons-div'>
            <NewOrderFilterButton children='Alles' ButtonOnClick ={() => 
              setShowAllProducts(true)
            } />
            <NewOrderFilterButton children='Snacks' ButtonOnClick ={() => [
              setShowAllProducts(false), 
              setFilteredMenu(filterMenuButtons(['sub_type'], 'snacks')), 
            ]} />
            <NewOrderFilterButton children='Burgers'   ButtonOnClick={() => [
              setShowAllProducts(false), 
              setFilteredMenu(filterMenuButtons(['sub_type'], 'hamburguer')), 
            ]} />
            <NewOrderFilterButton children='Drinken'   ButtonOnClick={() => [
              setShowAllProducts(false), 
              setFilteredMenu(filterMenuButtons(['sub_type'], 'drinks')), 
            ]} />
            <NewOrderFilterButton children='Morgen'    ButtonOnClick={() => [
              setShowAllProducts(false), 
              setFilteredMenu(filterMenuButtons(['type'], 'breakfast')), 
            ]} />
            <NewOrderFilterButton children='Dag'     ButtonOnClick={() => [
              setShowAllProducts(false), 
              setFilteredMenu(filterMenuButtons(['type'], 'all-day')), 
            ]} />
          </section>
          <section className='new-order-product-buttons-div'>
            {showAllProducts 
            ? menu.map((product) => 
              <NewOrderProductButton product={product} ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}/>
              ) 
            : filteredMenu.map((product) => 
              <NewOrderProductButton product={product} ButtonOnClick={(event)=> [setOrderedProducts(orderedProducts => [...orderedProducts, event.target.id])]}/>
            )}
          </section>
        </div> 
      </main>
      <section>
        {modal && 
          <DefaultModal
            Type = {modalContent.Type}
            ModalContent = {modalContent.Text}
            ButtonChildren = {modalContent.ButtonChildren}
            ButtonOnClick = {() => setModal(false)}
            ButtonSecondAuthModalOptionChildren= {modalContent.ButtonSecondChildren}
            ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick}
          />
        }
      </section>
    </div>
  )
}

