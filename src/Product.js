import React from 'react';
import styled from 'styled-components';
import { db } from './firebase';

const Product = ({ title, price, rating, image, id }) => {
	const addToCart = () => {
		const cartItem = db.collection('cartItems1').doc(id);
		cartItem.get().then((doc) => {
			if (doc.exists) {
				cartItem.update({
					quantity: doc.data().quantity + 1,
				});
			} else {
				db.collection('cartItems1').doc(id).set({
					name: title,
					image: image,
					price: price,
					quantity: 1,
				});
			}
		});
	};

	return (
		<Container>
			<Title>{title}</Title>
			<Price>${price}</Price>
			<Rating>
				{
					Array(rating)
						.fill()
						.map((rating) => (
							<p>⭐</p>
						)) //Win-key + . for emoji
				}
			</Rating>
			<Image src={image} />
			<ActionSection>
				<AddToCartBtn onClick={addToCart}>Add to Cart</AddToCartBtn>
			</ActionSection>
		</Container>
	);
};

export default Product;

const Container = styled.div`
	background-color: white;
	z-index: 100;
    max-width: 370px;
    min-width: 305px;
	max-height: 400px;
	display: flex;
	flex-direction: column;
	flex: 1;
    flex-grow: 0;
	padding: 20px;
	margin: 10px;
`;

const Title = styled.span``;

const Price = styled.span`
	font-weight: 500;
	margin-top: 3px;
`;

const Rating = styled.div`
	display: flex;
`;

const Image = styled.img`
	max-height: 200px;
	object-fit: contain;
`;

const ActionSection = styled.div`
	// display: flex;
	// align-items; center;  -- !  The same as bellow
	// justify-content: center;
	display: grid;
	place-items: center;
	margin-top: 12px;
`;

const AddToCartBtn = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius; 2px;
    cursor: pointer;
`;
