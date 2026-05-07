import "./header.scss";
import { Link } from 'react-router';
import { useSelector } from 'react-redux';

const Header = () => {
	const cartCount = useSelector((store) => store?.cartStore?.cart.length);

	return (
		<section className={`header-container-wrapper`}>
			<div className={`left-wrapper logo-container`}>Company Logo</div>

			<div className={`center-wrapper`}>
				<Link
					to={`/`}
					className={`navigate-button`}
				>
					Home
				</Link>

				<Link
					to={`/wishlist`}
					className={`navigate-button`}
				>
					Wishlist ♥️
				</Link>
			</div>

			<div className={`right-wrapper`}>
				<Link
					to={`/cart`}
					className={`link-button`}
				>
					View Cart ({cartCount})
				</Link>

				{/* <Link
					to={`#`}
					className={`link-button`}
				>
					Login
				</Link> */}
			</div>
		</section>
	);
};

export default Header;
