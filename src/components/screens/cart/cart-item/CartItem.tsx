import { FC } from 'react'

import CartActions from '../../cart/cart-item/cart-actions/CartActions'

import { formatToCurrency } from '../../../../utils/format-to-currency'

// import styles from '../Cart.module.scss'

import { ICartItem } from '../../../../types/cart.interface'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className=''>
			<img
				src={item.product.image}
				width={100}
				height={100}
				alt={item.product.model}
			/>
			<div>
				<div className=''>{item.product.model}</div>
				<div className=''>
					{formatToCurrency(item.product.price)}
				</div>
				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
