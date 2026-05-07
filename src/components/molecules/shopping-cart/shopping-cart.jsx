import './shopping-cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, changeQuantity } from '../../../redux/feature-slices/cart-slice';
import { getOriginalPrice } from '../../../utils/functions';

const ShoppingCart = ({
	cartObj = {},
}) => {
	const dispatch = useDispatch();

	const handleProductQuantityChange = (productId, quantity, changeType) => {
		dispatch(
			changeQuantity(
				{
					productId,
					updatedQuantity: changeType === 'INCREMENT'
						? quantity + 1
						: quantity - 1
				}
			)
		);
	};

	const handleRemoveProductFromCart = (productId) => {
		dispatch(
			removeCart(productId)
		);
	};


	return (
		<section className={`shopping-cart-wrapper`}>
			<div className={`left-section`}>
				<div className={`product-image-container`}>
					<img
						className={`product-image`}
						src={cartObj?.thumbnail}
						alt={`product-image`}
					/>
				</div>

				<div className={`product-description`}>
					<div className={`product-label`}>{cartObj?.title}</div>

					<div className={`product-info`}>{cartObj?.description}</div>

					<div
						className={`remove-product`}
						onClick={() => handleRemoveProductFromCart(cartObj?.id)}
					>
						Remove
					</div>
				</div>

			</div>

			<div className={`right-section`}>
				<div className={`product-quantity`}>
					<div
						className={`quantity-button remove-quantity ${cartObj?.quantity < 2 ? 'disable-button' : 'enable-button'}`}
						onClick={
							() => {
								if (cartObj?.quantity > 1) handleProductQuantityChange(cartObj?.id, cartObj?.quantity, 'DECREMENT')
							}
						}
					>-</div>

					<div className={`total-quantity`}>
						{cartObj?.quantity}
					</div>

					<div
						className={`quantity-button add-quantity enable-button`}
						onClick={() => handleProductQuantityChange(cartObj?.id, cartObj?.quantity, 'INCREMENT')}
					>+</div>
				</div>

				<div className={`product-price`}>
					$ <span style={{ textDecoration: 'line-through' }}>{
						getOriginalPrice(
							cartObj?.discountPercentage,
							cartObj?.price,

						).toFixed(2)
					}</span> &nbsp; {cartObj?.price}
				</div>
			</div>
		</section>
	);
};

export default ShoppingCart;