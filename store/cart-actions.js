import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () => {
    return async (dispatch) => {

        const fetchData = async () => {

            const response = await fetch('https://react-redux-7e9f1-default-rtdb.firebaseio.com/cart.json')

            if(!response.ok){
                throw new Error('fetching data is failed')
            }

            const data = await response.json()
            return data
        }

        try{
            const fetchedData = await fetchData()
            dispatch(cartActions.replaceCart({
                items: fetchedData.items || [],
                totalQuantity: fetchedData.totalQuantity
            }))
            
        }catch(error){
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'error..',
                message: 'cart data is failed to sent'
              }))
        }
    }  
}


export const sendCartData = (cart) => {

    return async (dispatch) => {
 
        const sendDataToServer = async () => {

            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'sending..',
                message: 'cart data is been sending'
              }))
        
            const response = await fetch('https://react-redux-7e9f1-default-rtdb.firebaseio.com/cart.json',{
                                method: 'PUT',
                                body: JSON.stringify({
                                    items: cart.items,
                                    totalQuantity:cart.totalQuantity
                                })
                              })
            if(!response.ok){
              throw new Error('sending Cart is failed')
            }
        }

            try{
                await sendDataToServer()

                dispatch(uiActions.showNotification({
                    status: 'success',
                    title: 'success..',
                    message: 'cart data is been sent'
                  }))
            }catch(error){
                dispatch(uiActions.showNotification({
                    status: 'error',
                    title: 'error..',
                    message: 'cart data is failed to sent'
                  }))
            }         
      
    }
}