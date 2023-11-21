import { FC, useRef, useState } from 'react'

import { useCart } from '../../../hooks/useCart'

import { formatToCurrency } from '../../../utils/format-to-currency'

// import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import Nav from '../nav/Nav'

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	return (
		<>
			<Nav />
			<div>
				{cart.length ? (
					cart.map(item => <CartItem item={item} key={item.id} />)
				) : (
					<div>Cart is empty!</div>
				)}
			</div>
		</>
	)
}

export default Cart
