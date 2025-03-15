import IconOrderConfirmed from '/images/icon-order-confirmed.svg';
const OrderConfirmed = ({ cart, cartTotal, startNewOrder }) => {
	return (
		<div className='fixed justify-center items-center md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] bottom-[-1px] z-50 bg-white md:rounded-xl rounded-t-xl p-7 md:w-lg w-full md:h-fit md:max-h-[80vh] h-[80vh] overflow-y-auto'>
			<img
				src={IconOrderConfirmed}
				alt='icon order confirmed'
				className='pb-3'
			/>
			<h3 className='text-1 font-redhat-bold text-rose-900 pb-2'>
				Order Confirmed
			</h3>
			<p className='text-rose-500 pb-5'>We hope you enjoy your food!</p>
			<div className='bg-rose-50 px-5 rounded-xl'>
				{cart.map((item) => (
					<ul key={item.id}>
						<li
							key={item.id}
							className='flex justify-between text-4 py-3  items-center '>
							<div className='flex justify-center items-center gap-3 py-2'>
								<img
									src={item.thumbnail}
									alt='thumbnail'
									className='w-[48px] h-[48px] rounded-md'
								/>
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
									</div>
								</div>
							</div>
							<span className='text-rose-900 font-redhat-semibold'>
								${Math.abs(item.price * item.quantity).toFixed(2)}
							</span>
						</li>
						<hr className='text-rose-100' />
					</ul>
				))}
				<div className='flex justify-between py-5'>
					<span className='text-4 text-rose-900'>Order Total</span>
					<span className='text-2 font-redhat-bold'>
						${Math.abs(cartTotal).toFixed(2)}
					</span>
				</div>
			</div>
			<button
				className='bg-red w-full rounded-3xl text-white text-3 font-redhat-semibold mt-5 py-2 cursor-pointer hover:bg-darkred '
				onClick={startNewOrder}>
				Start New Order
			</button>
		</div>
	);
};

export default OrderConfirmed;
