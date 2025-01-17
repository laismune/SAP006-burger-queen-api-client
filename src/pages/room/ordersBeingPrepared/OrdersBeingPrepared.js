import {useState, useEffect} from 'react';

import { NavbarRoom } from '../../../components/Navbar/Navbar';
import { CurrentOrder } from '../../../components/CurrentOrder/Current.Order';
import { DefaultModal } from '../../../components/Modal/Modal';
import { Button } from '../../../components/Button/Button';

import { getErrorCase } from '../../../services/general';
import { getTotalOrderBill } from '../../../services/ordersMath';
import { getAllOrders, deleteOrder, changeOrderStatus } from '../../../services/orders';

import './OrderStatusGeneral.scss'

export const OrdersBeingPrepared = () => { 
  const token = localStorage.getItem('currentEmployeeToken');

  const [currentOrders, setCurrentOrders] = useState([]);
  const [ordersToPrint, setOrdersToPrint] = useState([]);

  const handleAPIErrors = (data) => {
    const result = getErrorCase(data.code);
    Object.keys(data).includes('code') && setModalContent(modalContent => ({...modalContent, Text: result, Type: 'one-button-modal'}));
    Object.keys(data).includes('code') && setModal(true);
  }

  const getOrders = () => {
    getAllOrders(token)
      .then(responseJson => {
        handleAPIErrors(responseJson);        
        const menu = (JSON.parse(localStorage.getItem('menu')));
        getTotalOrderBill(responseJson, menu);
        setCurrentOrders(responseJson);   
      })
  }

  useEffect(() => {
    getOrders()
  }, []);
        
  useEffect(() => {
    setOrdersToPrint(currentOrders.filter((order) => order.status === 'pending'))
  },[currentOrders]);
    
    const deleteTargetOrder = (orderToBeDeleted) => {
      deleteOrder(orderToBeDeleted, token)
      .then(responseJson => {
        handleAPIErrors(responseJson);
        const newOrders = currentOrders.filter((order) => order.id !== responseJson.id);
        setCurrentOrders([...newOrders])
      })
    }

  const changeTargetOrderStatus = (id, status) => {
    changeOrderStatus(id, token, status)
    .then((responseJson) => {
      handleAPIErrors(responseJson);
      const targetOrder = currentOrders.filter((order) => order.id === responseJson.id);
      targetOrder[0].status = 'Pronto';
      const ordersWithoutTargetOrder = currentOrders.filter((order) => order.id !== responseJson.id);
      const newOrders = [...ordersWithoutTargetOrder, targetOrder[0]];
      setCurrentOrders([...newOrders]);
    })
  }

  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    Type:'',
    Text:'',
    ButtonChildren:'',
    ButtonClick:'',
    ButtonSecondChildren:'',
    ButtonSecondClick:'',
  })

  return (
    <div>
      <header>
        <NavbarRoom/>
      </header>
      <Button  ButtonClass='kitchen-get-orders' children='Carregar Pedidos' ButtonOnClick={() => getOrders(token)}/>
      <main className='order-status-main'>
        <section className='current-orders-section'>
          {ordersToPrint.length > 0 &&   
            ordersToPrint.sort((a,b) => b.id - a.id).map((order) => 
              <CurrentOrder
                role = {localStorage.getItem('currentEmployeeRole')}
                key={order.id}
                order={order}
                ButtonId={order.id}
                ButtonDeleteOrder = {(event)=> [
                  setModalContent(modalContent => ({...modalContent, 
                    Type: 'two-buttons-modal',
                    Text: 'Você tem certeza que deseja deletar este pedido?',
                    ButtonSecondClick: () => {
                      deleteTargetOrder(event.target.id);
                      setModal(false);
                    }
                  })), 
                  setModal(true),
                ]}
                OrderReadyButton = {() => changeTargetOrderStatus(order.id, 'Pronto')}
              /> 
            )
          }
        </section>  
      </main>
      <section>
        {modal && 
          <DefaultModal
            Type = {modalContent.Type}
            ModalContent = {modalContent.Text === 'Informações insuficientes!' ? 
            'Não há alterações para fazer neste pedido' : modalContent.Text }
            ButtonChildren = 'Fechar'
            ButtonOnClick = {() => setModal(false)}
            ButtonSecondAuthModalOptionChildren= 'Excluir'
            ButtOnClickSecondAuthModalOption = {modalContent.ButtonSecondClick}
          />
        }
      </section>
    </div>
  )
}