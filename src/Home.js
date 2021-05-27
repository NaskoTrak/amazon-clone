import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';
import { db } from './firebase';

const Home = () => {

	const [products, setProducts] = useState([]);

	const getProducts = () => {
		db.collection('products1').onSnapshot((snapshot) => {
			let tempProducts = [];

			tempProducts = snapshot.docs.map((doc) => (
				{
					id: doc.id,
					product: doc.data(),
				}
			));
			setProducts(tempProducts);
		})
	};

	useEffect(() => {
		getProducts();
	}, []);


	return (
		<Container>
			<Banner>
			</Banner>
			<Content>
				{
					products.map((data) => (
						<Product
							title={data.product.name}
							price={data.product.price}
							rating={data.product.rating}
							image={data.product.image}
							id={data.id}
						/>
					))
				}
			</Content>
		</Container>
	)
}

export default Home;

const Container = styled.div`
	max-width: 1500px;
	margin: 0 auto;  // --- !  Center mid on the screen
`;

const Banner =styled.div`
	background-image: url('https://images-eu.ssl-images-amazon.com/images/G/03/kindle/journeys/YTNkYTJjMWMt/YTNkYTJjMWMt-NmViMjNmNzgt-w1500._CB670724971_.jpg');
	min-height: 600px;
	background-position: center;  // --- !
	background-size: cover; // --- !
	z-index: 1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
	// padding: 0 10px;   !
	padding-left: 20px;  
	margin-top: -350px; 
	display: flex;
	flex-wrap: wrap;
`;