import EmptyCart from '/images/illustration-empty-cart.svg';
import CarbonNeutralIcon from '/images/icon-carbon-neutral.svg';
const Cart = ({
	cart,
	cartQuantity,
	cartTotal,
	removeGroupFromCart,
	setOrderConfirmed,
}) => {
	return (
		<div className='px-7 py-6 mt-8 xl:mt-[-3.5rem] xl:h-fit bg-white rounded-xl '>
			<h3 className='text-2 pb-6 text-red font-redhat-bold'>
				Your Cart ({cartQuantity})
			</h3>
			<div
				className={`${
					cart.length !== 0 ? 'hidden' : 'block'
				} flex flex-col items-center gap-3 py-5 transition duration-500`}>
				<img src={EmptyCart} alt='empty cart' />
				<p className='text-4 font-redhat-semibold text-rose-500'>
					Your added items will appear here
				</p>
			</div>
			{cart.map((item) => (
				<ul key={item.id}>
					<li key={item.id} className='flex justify-between text-4 py-3 '>
						<div className='flex flex-col gap-1'>
							<span className=' font-redhat-semibold text-rose-900'>
								{item.description}
							</span>

							<div className='flex gap-2'>
								<span className='text-red font-redhat-semibold'>
									{item.quantity}x
								</span>
								<span className='text-rose-500'>
									@ ${item.price.toFixed(2)}
								</span>
								<span className='text-rose-500 font-redhat-semibold'>
									${Math.abs(item.price * item.quantity).toFixed(2)}
								</span>
							</div>
						</div>
						<button
							className='border border-rose-400 text-rose-400 rounded-xl my-[15px] p-[0.2rem] pb-[0.3rem] cursor-pointer hover:border-rose-900 hover:text-rose-900 leading-0 flex items-center justify-center w-[20px] h-[20px]'
							onClick={() => removeGroupFromCart(item)}>
							x
						</button>
					</li>
					<hr className='text-rose-100' />
				</ul>
			))}
			<div className={`${cart.length !== 0 ? 'block' : 'hidden'}`}>
				<div className='flex justify-between py-7'>
					<span className='text-4 text-rose-900'>Order Total</span>
					<span className='text-2 font-redhat-bold text-rose-900'>
						${Math.abs(cartTotal).toFixed(2)}
					</span>
				</div>
				<div className='bg-rose-50 p-3 mb-6 rounded-xl text-center text-rose-900 text-4 flex justify-center gap-2'>
					<img src={CarbonNeutralIcon} alt='carbon neutral icon' />
					<div>
						This is a{' '}
						<span className='font-redhat-semibold'>carbon-neutral</span>{' '}
						delivery
					</div>
				</div>
				<button
					className='bg-red text-white py-3 rounded-3xl w-full cursor-pointer font-redhat-semibold hover:bg-darkred'
					onClick={() => setOrderConfirmed(true)}>
					Confirm Order
				</button>
			</div>
		</div>
	);
};

export default Cart;
