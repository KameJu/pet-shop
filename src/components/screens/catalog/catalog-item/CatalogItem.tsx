import { FC } from 'react'
import Column from '../../../ui/grid/Column'
import bike from '../../../../assets/images/bike_3.png'
import styles from './CatalogItem.module.scss'
import { IProduct } from '../../../../types/product.interface'
import { useCart } from '../../../../hooks/useCart'
import { useActions } from '../../../../hooks/useActions'
import { Provider } from 'react-redux'

interface ICatalogItem {
	image: string
	model: string
	price: string
	type: string
}

const CatalogItem: FC<IProduct> = product => {
	// const { cart } = useCart()
	// const { addToCart, removeFromCart } = useActions()

	// const currentElement = cart.find(
	// 	cartItem => cartItem.product.id === product.id
	// )

	return (
		<Column size={2} className={styles.card}>
			<img src={product.image} alt='image' />
			<div className='flex flex-col p-3'>
				<span>Model: {product.model}</span>
				<span>Price: {product.price}</span>
				<span>Type: {product.type}</span>
				<div>
					{/* <button
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
					</button> */}
				</div>
			</div>
		</Column>
	)
}

export default CatalogItem
