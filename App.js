import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux'
import Notification from './components/UI/Notification';
import {fetchCartData, sendCartData} from './store/cart-actions'

let isInitialState = true

function App() {

  const show = useSelector((state) => state.ui.showCart)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {

    dispatch(fetchCartData())

  },[dispatch])
  

  useEffect(()=>{
    
    if(isInitialState){ //this has been added to avoid initial pending and success errors shows even before we add products.
      isInitialState = false
      return
    }

    if(cart.changed){
      dispatch(sendCartData(cart))
    }

  },[cart,dispatch])

  return (
    <Fragment>
      {notification && <Notification 
        status={notification.status}
        title={notification.title}
        message={notification.message}
         />}
      <Layout>
        {show && <Cart /> }
        <Products />
      </Layout>
    </Fragment>
  );
  
}

export default App;
