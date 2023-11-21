import { FC, useRef, useState } from 'react'

import { useCart } from '../../../hooks/useCart'

import { formatToCurrency } from '../../../utils/format-to-currency'

// import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'
import Nav from '../nav/Nav'
import Row from '../../ui/grid/Row'

const Cart: FC = () => {
	// const [isOpen, setIsOpen] = useState(false)
	// const btnRef = useRef<HTMLButtonElement>(null)

	const { cart, total } = useCart()

	return (
		<>
			<Nav />
			<div className='flex justify-center text-3xl'>
				<span>Total: {formatToCurrency(total)}</span>
			</div>
			<Row className='mt-10'>
				{cart.length ? (
					cart.map(item => <CartItem item={item} key={item.id} />)
				) : (
					<div>Cart is empty!</div>
				)}
			</Row>
		</>
	)
}

export default Cart
