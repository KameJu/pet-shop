import { FC } from 'react'
import Nav from '../nav/Nav'
import Row from '../../ui/grid/Row'
import Column from '../../ui/grid/Column'
import CatalogItem from './catalog-item/CatalogItem'
import { products } from './catalog-item/products.data.ts'
import { formatToCurrency } from '../../../utils/format-to-currency.js'

const Catalog: FC = () => {
	return (
		<>
			<Nav />
			<Row>
				<Column size={2} />
				<Column size={10} className='pr-10'>
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
				</Column>
			</Row>
		</>
	)
}

export default Catalog
