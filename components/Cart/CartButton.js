import classes from './CartButton.module.css';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const cartTotal = useSelector((state) => state.cart.totalQuantity)

  const toggleButtonHandler = () => {
    dispatch(uiActions.toggle())
  }
  
  return (
    <button onClick={toggleButtonHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotal}</span>
    </button>
  );
};

export default CartButton;
