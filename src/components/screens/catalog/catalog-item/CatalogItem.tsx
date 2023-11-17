import { FC } from 'react'
import Column from '../../../ui/grid/Column'
import bike from '../../../../assets/images/bike_3.png'
import styles from './CatalogItem.module.scss'

interface ICatalogItem {
	image: string
	model: string
	price: string
	type: string
}

const CatalogItem: FC<ICatalogItem> = ({ image, model, price, type }) => {
	return (
		<Column size={2} className={styles.card}>
			<img src={image} alt='image' />
			<div className='flex flex-col p-3'>
				<span>Model: {model}</span>
				<span>Price: {price}</span>
				<span>Type: {type}</span>
			</div>
		</Column>
	)
}

export default CatalogItem
