import React from 'react';
import './StripeButton.css'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price,user,cart}) => {
	const priceForStripe = price*100;
	const publishableKey = "pk_test_IFQZY1aObNUuXenu1Ekned1R00QR1eCzhB";

	const onToken = (token) => {
		fetch('https://still-escarpment-99159.herokuapp.com/payment',
			{
				method: 'post',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
						cart,
						amount:priceForStripe,
						token,
						userid: user.id
					})
			})
				.then(response => response.json())
				.then(responseSuccess => {
					if (responseSuccess === 'success') {
						alert('Payment Successfull')
					} else {
						alert('Failed to pay. Please use the provided credit card info')
					}
					}
				).catch(err => console.log(err))
	}

	return (user.id > 0 ?
		<StripeCheckout
			label="Proceed to Checkout"
			name="React Clothing Ltd."
			billingAdress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is ${price}$`}
			amount={priceForStripe}
			panelLable='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
		:
		<p>Log In to checkout</p>
		)
}

export default StripeCheckoutButton;