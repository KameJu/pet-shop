import { FC } from 'react'
import bike from '../../../../assets/images/bike_3.png'
import Column from '../../../ui/grid/Column'
import styles from './AccessoriesItem.module.scss'

interface IAccessoryItem {
	image: string
	name: string
	price: string
}

const AccessoriesItem: FC<IAccessoryItem> = ({ image, name, price }) => {
	return (
		<Column size={2} className={styles.card}>
			<img src={image} alt='image' />
			<div className='flex flex-col p-3'>
				<span>Name: {name}</span>
				<span>Price: {price}</span>
			</div>
		</Column>
	)
}

export default AccessoriesItem
