import React from 'react';
import './StripeButton.css'
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price*100;
	const publishableKey = "pk_test_IFQZY1aObNUuXenu1Ekned1R00QR1eCzhB";

	const onToken = (token) => {
		console.log(token)
		alert('Payment Successful')
	}

	return (
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
		)
}

export default StripeCheckoutButton;