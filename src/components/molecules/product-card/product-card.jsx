import './product-card.scss';
import Shimmer from '../../atoms/shimmer/shimmer';
import { useDispatch, useSelector } from 'react-redux';
import { appendCart, removeCart } from '../../../redux/feature-slices/cart-slice';
import { getOriginalPrice } from '../../../utils/functions';

const ProductCard = ({
	isLoading = false,
	productDetails = {}
}) => {
	const cartList = useSelector((store) => store?.cartStore?.cart);
	const dispatch = useDispatch();

	const handleAddToCart = (obj) => {
		let cartObj = { ...obj, quantity: 1 };

		dispatch(appendCart(cartObj));
	};

	const handleRemoveFromCart = (cartId) => {
		dispatch(removeCart(cartId));
	};

	const isAddedToCart = (cartList || []).find(
		(el) => el?.id === productDetails?.id
	);


	return (
		<div className={`product-card-wrapper`}>
			<div className={`top-section`}>
				<div className={`image-container`}>
					{
						isLoading
							? (
								<Shimmer type={`rect`} />
							) : (
								<img
									className={`product-image`}
									src={productDetails?.thumbnail}
									alt={productDetails?.title}

								/>
							)
					}
				</div>
			</div>

			<div className={`bottom-section`}>
				<div className={`left-section`}>
					{
						isLoading
							? (
								<div className={`title-loader-container`}>
									<Shimmer type={`rect`} />
								</div>
							) : (

								<div className={`title-container`}>
									{productDetails?.title}
								</div>
							)
					}

					{

						isLoading
							? (
								<div className={`price-loader-container`}>
									<Shimmer type={`rect`} />
								</div>
							) : (
								<div className={`price-container`}>
									$ <span style={{ textDecoration: 'line-through' }}>
										{
											getOriginalPrice(
												productDetails?.discountPercentage,
												productDetails?.price
											).toFixed(2)
										}
									</span>

									&nbsp;

									{productDetails?.price}
								</div>

							)
					}
				</div>

				{
					isLoading
						? (
							<div className={`right-loader-section`}>
								<Shimmer type={`rect`} />
							</div>
						) : (
							<div
								className={`right-section ${isAddedToCart ? 'remove-from-cart' : 'add-to-cart '}`}
								onClick={
									() => {
										if (isAddedToCart) handleRemoveFromCart(productDetails?.id);
										else handleAddToCart(productDetails)
									}
								}
							>
								{
									isAddedToCart
										? "Remove from Cart" : "Add to Cart"
								}
							</div>
						)
				}
			</div>
		</div>
	);
};

export default ProductCard;