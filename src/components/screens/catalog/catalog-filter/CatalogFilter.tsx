import { FC, useContext, useRef, useState } from 'react'
import { ProductContext } from '../../../../context/ProudctContext'
import CatalogList from '../catalog-list/CatalogList'
import { IProduct } from '../../../../types/product.interface'

const CatalogFilter: FC = () => {
	const products = useContext(ProductContext)
	const list = useRef(CatalogList)

	const [model, setModel] = useState('')
	const [price, setPrice] = useState('')
	const [type, setType] = useState('')

	// const filter = () => {
	// 	list.current. = prodcts.filter(
	// 		product => product.model == model
	// 	)
	// }

	return (
		<div className='text-center flex flex-col gap-3 p-4'>
			Filter
			<input
				type='text'
				itemRef={model}
				placeholder='Model'
				className='px-2'
				onChange={e => setModel(e.target.value)}
			></input>
			<input
				type='number'
				itemRef={price}
				placeholder='Price'
				className='px-2'
				onChange={e => setPrice(e.target.value)}
			></input>
			<input
				type='text'
				itemRef={type}
				placeholder='Type'
				className='px-2'
				onChange={e => setType(e.target.value)}
			></input>
			<button className='btn-yellow'>OK</button>
		</div>
	)
}

export default CatalogFilter
