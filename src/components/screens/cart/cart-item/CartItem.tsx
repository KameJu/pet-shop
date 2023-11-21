import { FC } from 'react'

import CartActions from '../../cart/cart-item/cart-actions/CartActions'

import { formatToCurrency } from '../../../../utils/format-to-currency'

import styles from '../Cart.module.scss'

import { ICartItem } from '../../../../types/cart.interface'
import Column from '../../../ui/grid/Column'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<Column size={2} className={styles.item}>
			{/* <img
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
			</div> */}
			<img src={item.product.image} alt='image' />
			<div className='flex flex-col p-3'>
				<span>Model: {item.product.model}</span>
				<span>Price: {formatToCurrency(item.product.price)}</span>
				<span>Type: {item.product.type}</span>
				<CartActions item={item} />
			</div>
		</Column>
	)
}

export default CartItem
