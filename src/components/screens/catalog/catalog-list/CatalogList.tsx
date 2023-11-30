import { PropsWithChildren, FC, useContext, useState } from 'react'
import { IProduct } from '../../../../types/product.interface'
import CatalogItem from '../catalog-item/CatalogItem'
import Row from '../../../ui/grid/Row'

export interface ICatalogList {
	products: IProduct[]
}

const CatalogList: FC<ICatalogList> = ({ products }) => {
	return (
		<Row>
			{products.map(product => (
				<CatalogItem
					key={product.id}
					id={product.id}
					image={product.image}
					type={product.type}
					price={product.price}
					model={product.model}
				/>
			))}
		</Row>
	)
}

export default CatalogList
