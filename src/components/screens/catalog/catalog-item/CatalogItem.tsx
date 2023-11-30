import { FC } from 'react'
import Column from '../../../ui/grid/Column'
import styles from './CatalogItem.module.scss'
import { IProduct } from '../../../../types/product.interface'
import { useCart } from '../../../../hooks/useCart'
import { useActions } from '../../../../hooks/useActions'
import { formatToCurrency } from '../../../../utils/format-to-currency'

const CatalogItem: FC<IProduct> = product => {
	const { cart } = useCart()
	const { addToCart, removeFromCart } = useActions()

	const currentElement = cart.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Column size={2} className={styles.card}>
			<img src={product.image} alt='image' />
			<div className='flex flex-col p-3'>
				<span>Model: {product.model}</span>
				<span>Price: {formatToCurrency(product.price)}</span>
				<span>Type: {product.type}</span>
				<div className='text-center mt-2'>
					<button
						className='btn-link'
						onClick={() =>
							currentElement
								? removeFromCart({ id: currentElement.id })
								: addToCart({
										product,
										quantity: 1
								  })
						}
					>
						Add to cart
					</button>
				</div>
			</div>
		</Column>
	)
}

export default CatalogItem
