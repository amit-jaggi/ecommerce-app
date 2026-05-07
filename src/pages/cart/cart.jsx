import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCart from '../../components/molecules/shopping-cart/shopping-cart';

const Cart = () => {
    const cartList = useSelector((store) => store?.cartStore?.cart);
    const dispatch = useDispatch();


    return (
        <div className={`cart-page-wrapper`}>
            <div className={`shopping-cart-section`}>
                {
                    Boolean(cartList.length)
                        ?  cartList.map(
                            (el, elIndex) => (
                                <ShoppingCart
                                    key={`cart-${elIndex}`}
                                    cartObj={el}
                                />
                            )
                        ) : (
                            <div className={`no-cart-added`}>
                                Cart is empty.
                            </div>
                        )
                }
            </div>

            <div className={`order-summary-section`}>
                <div className={`summary-label`}>Order Summary</div>

                <div className={``}>
                    {
                        
                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;