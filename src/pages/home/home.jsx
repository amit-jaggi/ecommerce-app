import './home.scss';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductCard from '../../components/molecules/product-card/product-card';

const Home = () => {
	const dispatch = useDispatch();

	const [product, setProduct] = useState({
		isLoading: true,
		list: []
	});

	const { isLoading, list } = product;

	const getProducts = async () => {
		setProduct((prevState) => ({ ...prevState, isLoading: true }));

		try {
			const response = await fetch('https://dummyjson.com/products');

			if (response?.status === 200) {
				const dataList = await response.json();

				setProduct((prevState) => ({ ...prevState, list: dataList.products }));
			} else {
				throw new Error(response);
			}
		} catch (error) {
			console.log(`Error: `, error);
		} finally {
			setProduct((prevState) => ({ ...prevState, isLoading: false }));
		};
	};

	useEffect(
		() => {
			getProducts();
		}, []
	);

	return (
		<section className={`home-page-wrapper`}>
			<div className={`label-container`}>
				Our Product(s)
			</div>

			<div className={`products-container`}>
				{
					isLoading
						? Array(10).fill(null).map(
							(_, loaderIndex) => (
								<ProductCard
									key={`card-loader-${loaderIndex}`}
									isLoading={isLoading}
								/>

							)
						) : Boolean(list.length)
							? list.map(
								(productObj, productIndex) => {
									return (
										<ProductCard
											key={`product-card-${productIndex}`}
											isLoading={isLoading}
											productDetails={productObj}
										/>
									)
								}
							) : (
								<>No Products available.</>
							)
				}
			</div>
		</section>
	);
};

export default Home;