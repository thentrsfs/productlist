import AddCartSvg from '/images/icon-add-to-cart.svg';
const Button = ({ addToCart, item, removeFromCart, cartItem }) => {
	const quantity = cartItem ? cartItem.quantity : 0;
	return (
		<div>
			<button
				className={`${
					quantity ? 'hidden' : 'block'
				} bg-white absolute bottom-[83px] left-[50%] translate-x-[-50%]  border border-rose-400 rounded-3xl w-[160px] h-[44px] flex items-center justify-center gap-2 cursor-pointer`}
				onClick={() => addToCart(item)}>
				<img
					src={AddCartSvg}
					alt='add to cart icon'
					className={'w-[20px] h-[20px]'}
				/>
				<span className='text-4 font-redhat-semibold w-[76px]'>
					Add to Cart
				</span>
			</button>

			<button
				className={` ${
					quantity ? 'block' : 'hidden'
				} bg-red flex absolute bottom-[83px] left-[50%] translate-x-[-50%]  border border-rose-400 rounded-3xl w-[160px] h-[44px] items-center justify-center gap-2 cursor-pointer`}>
				<span
					className='text-white flex items-center justify-center w-[18px] h-[18px] border rounded-xl text-xl pb-0.5 '
					onClick={() => removeFromCart(item)}>
					-
				</span>

				<span className='text-4 font-redhat-semibold w-[76px] text-white'>
					{quantity}
				</span>

				<span
					className='text-white flex items-center justify-center w-[18px] h-[18px] border rounded-xl text-xl '
					onClick={() => addToCart(item)}>
					+
				</span>
			</button>
		</div>
	);
};

export default Button;
