
import { useCart } from "../../contexts/CartContext";
import { loadStripe } from '@stripe/stripe-js';

export default function Cart() {
	const { cart, calcTotalQuantity, calcTotalPrice, updateCartItemQuantity, removeCartItem } = useCart();

	const handleQuantityChange = (itemId, newQuantity) => {
		updateCartItemQuantity(itemId, newQuantity);
	};

	const handleRemoveItem = (itemId) => {
		removeCartItem(itemId);
	};

	const makePayment = async () => {
		const stripe = await loadStripe('pk_test_51PcswSCSdnd4jNhfBj4aNe3Dnd8ZrAo9PJPKZbicISrdRPAvZDWKHTYpexGKp5CpQsiEvanTZ4m7wxBgt97hy7DR00dJSuZnUd');
		const body = {
			products: cart
		}

		const headers = {
			'Content-Type': 'Application/json'
		}

		const response = await fetch('http://localhost:3030/api/checkout', {
			method: "POST",
			headers: headers,
			body: JSON.stringify(body)
		})

		const session = await response.json();

		const result = stripe.redirectToCheckout({ sessionId: session.id });

		if (result.error) {
			console.log(result.error);
		}
	}


	return (
		<div className="my-5">
			<h2 className="text-3xl font-kreon">Shopping Cart</h2>
			{cart.length === 0 ? (
				<p className="text-2xl mt-5">Your cart is empty</p>
			) : (
				<div>
					<ul>
						{cart.map(item => (
							<li key={item._id} className="flex flex-col justify-center items-center border-b-2 py-4">
								<div className="flex justify-center items-center gap-10">
									<div>
										<img src={item.image} alt={item.title} className="w-32 h-32 object-cover" />
									</div>
									<div className="flex gap-20">
										<div>
											<h3 className="text-2xl font-medium font-laila">{item.title}</h3>
											<p className="text-lg text-slate-700">€{item.price} x {item.quantity}</p>
										</div>
										<div className="flex gap-2 justify-center items-center border-2 border-[#898170] rounded-2xl bg-slate-100 px-5">
											<button className="px-2 rounded-full" onClick={() => handleQuantityChange(item._id, item.quantity - 1)}>-</button>
											<span className="text-xl">{item.quantity}</span>
											<button className="px-2 rounded-full" onClick={() => handleQuantityChange(item._id, item.quantity + 1)}>+</button>
										</div>
										<button onClick={() => handleRemoveItem(item._id)} className="text-white bg-red-400 px-5 border-2 rounded-lg hover:bg-red-500">Remove</button>
									</div>
								</div>
								<div>
									<p className="text-lg font-laila font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
								</div>
							</li>
						))}
					</ul>
					<div className="flex justify-between items-center mt-10">
						<h3 className="text-2xl font-laila">Total Quantity: {calcTotalQuantity()}</h3>
						<button onClick={makePayment} className="text-2xl px-3 py-5 border-2 rounded-xl bg-lime-300 hover:bg-lime-400 hover:text-white">Checkout</button>
						<h3 className="text-2xl font-laila">Total Price: €{calcTotalPrice().toFixed(2)}</h3>
					</div>
				</div>
			)}
		</div>
	);
}