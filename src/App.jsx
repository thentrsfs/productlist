import AddButton from './components/AddButton';
import Cart from './components/Cart';
import OrderConfirmed from './components/OrderConfirmed';
import { useState, useEffect } from 'react';
function App() {
	// Menu items
	const menu = [
		{
			id: 1,
			name: 'Waffle',
			description: 'Waffle with Berries',
			price: 6.5,
			imgMobile: '/images/image-waffle-mobile.jpg',
			imgDesktop: '/images/image-waffle-desktop.jpg',
			imgTablet: '/images/image-waffle-tablet.jpg',
			thumbnail: '/images/image-waffle-thumbnail.jpg',
		},
		{
			id: 2,
			name: 'Crème Brûlée',
			description: 'Vanilla Bean Crème Brûlée',
			price: 7.0,
			imgMobile: '/images/image-creme-brulee-mobile.jpg',
			imgDesktop: '/images/image-creme-brulee-desktop.jpg',
			imgTablet: '/images/image-creme-brulee-tablet.jpg',
			thumbnail: '/images/image-creme-brulee-thumbnail.jpg',
		},
		{
			id: 3,
			name: 'Macaron',
			description: 'Macaron Mix of Five',
			price: 8.0,
			imgMobile: '/images/image-macaron-mobile.jpg',
			imgDesktop: '/images/image-macaron-desktop.jpg',
			imgTablet: '/images/image-macaron-tablet.jpg',
			thumbnail: '/images/image-macaron-thumbnail.jpg',
		},
		{
			id: 4,
			name: 'Tiramisu',
			description: 'Classic Tiramisu',
			price: 5.5,
			imgMobile: '/images/image-tiramisu-mobile.jpg',
			imgDesktop: '/images/image-tiramisu-desktop.jpg',
			imgTablet: '/images/image-tiramisu-tablet.jpg',
			thumbnail: '/images/image-tiramisu-thumbnail.jpg',
		},
		{
			id: 5,
			name: 'Baklava',
			description: 'Pistachio Baklava',
			price: 4.0,
			imgMobile: '/images/image-baklava-mobile.jpg',
			imgDesktop: '/images/image-baklava-desktop.jpg',
			imgTablet: '/images/image-baklava-tablet.jpg',
			thumbnail: '/images/image-baklava-thumbnail.jpg',
		},
		{
			id: 6,
			name: 'Meringue',
			description: 'Lemon Meringue Pie',
			price: 5.0,
			imgMobile: '/images/image-meringue-mobile.jpg',
			imgDesktop: '/images/image-meringue-desktop.jpg',
			imgTablet: '/images/image-meringue-tablet.jpg',
			thumbnail: '/images/image-meringue-thumbnail.jpg',
		},
		{
			id: 7,
			name: 'Cake',
			description: 'Red Velvet Cake',
			price: 4.5,
			imgMobile: '/images/image-cake-mobile.jpg',
			imgDesktop: '/images/image-cake-desktop.jpg',
			imgTablet: '/images/image-cake-tablet.jpg',
			thumbnail: '/images/image-cake-thumbnail.jpg',
		},
		{
			id: 8,
			name: 'Brownie',
			description: 'Salted Caramel Brownie',
			price: 5.5,
			imgMobile: '/images/image-brownie-mobile.jpg',
			imgDesktop: '/images/image-brownie-desktop.jpg',
			imgTablet: '/images/image-brownie-tablet.jpg',
			thumbnail: '/images/image-brownie-thumbnail.jpg',
		},
		{
			id: 9,
			name: 'Panna Cotta',
			description: 'Vanilla Panna Cotta',
			price: 6.5,
			imgMobile: '/images/image-panna-cotta-mobile.jpg',
			imgDesktop: '/images/image-panna-cotta-desktop.jpg',
			imgTablet: '/images/image-panna-cotta-tablet.jpg',
			thumbnail: '/images/image-panna-cotta-thumbnail.jpg',
		},
	];
	// Cart
	const [cart, setCart] = useState([]);
	// Quantity of items in cart
	const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
	// Total of items in cart
	const cartTotal = cart.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);
	const [orderConfirmed, setOrderConfirmed] = useState(false);
	// Reset cart and start new order
	const startNewOrder = () => {
		setCart([]);
		setOrderConfirmed(false);
	};
	// Add item to cart
	const addToCart = (item) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem
				);
			} else {
				return [...prevCart, { ...item, quantity: 1 }];
			}
		});
	};
	// Remove item from cart
	const removeFromCart = (item) => {
		setCart((prevCart) => {
			const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
			if (existingItem.quantity === 1) {
				return prevCart.filter((cartItem) => cartItem.id !== item.id);
			} else {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id
						? { ...cartItem, quantity: cartItem.quantity - 1 }
						: cartItem
				);
			}
		});
	};
	// Remove group of items from cart
	const removeGroupFromCart = (item) => {
		setCart((prevCart) => {
			return prevCart.filter((cartItem) => cartItem.id !== item.id);
		});
	};
	// Check screen size
	const [isTablet, setIsTablet] = useState(
		window.innerWidth >= 768 && window.innerWidth < 1248
	);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1248);
	useEffect(() => {
		const handleResize = () => {
			setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1248);
			setIsDesktop(window.innerWidth >= 1248);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='flex relative'>
			<div className={orderConfirmed ? '' : 'hidden'}>
				<OrderConfirmed
					cart={cart}
					cartTotal={cartTotal}
					startNewOrder={startNewOrder}
				/>
			</div>
			<div
				className={`${
					orderConfirmed ? 'brightness-50 pointer-events-none' : ''
				} px-7 py-6 sm:px-18 sm:py-10 bg-rose-50 `}>
				<h1 className='text-1 pb-7 text-rose-900 font-redhat-bold'>Desserts</h1>
				<div className='xl:grid xl:grid-cols-3 xl:gap-10'>
					<div className='flex flex-col sm:grid sm:grid-cols-3 sm:grid-rows-3 gap-8 xl:col-span-2'>
						{menu.map((item) => {
							return (
								<div
									key={item.id}
									className='flex flex-col gap-4 relative'>
									<img
										src={
											isTablet
												? item.imgTablet
												: isDesktop
												? item.imgDesktop
												: item.imgMobile
										}
										alt='menu-item'
										className={`rounded-xl border-2 transition duration-250  ${
											cart.find((cartItem) => cartItem.id === item.id)
												? ' border-red'
												: 'border-transparent'
										}`}
									/>
									<AddButton
										item={item}
										addToCart={addToCart}
										cart={cart}
										removeFromCart={removeFromCart}
										setCart={setCart}
										cartItem={cart.find((cartItem) => cartItem.id === item.id)}
									/>
									<div>
										<p className='text-4 text-rose-500'>{item.name}</p>
										<h3 className='text-3 text-rose-900 font-redhat-semibold'>
											{item.description}
										</h3>
										<p className='text-3 text-red font-redhat-semibold'>
											${Math.abs(item.price).toFixed(2)}
										</p>
									</div>
								</div>
							);
						})}
					</div>
					<Cart
						cart={cart}
						removeGroupFromCart={removeGroupFromCart}
						cartTotal={cartTotal}
						setOrderConfirmed={setOrderConfirmed}
						startNewOrder={startNewOrder}
						cartQuantity={cartQuantity}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
