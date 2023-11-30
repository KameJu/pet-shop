import { FC, createContext, useContext } from 'react'
import Nav from '../nav/Nav'
import Row from '../../ui/grid/Row'
import Column from '../../ui/grid/Column'
import CatalogFilter from './catalog-filter/CatalogFilter.tsx'
import CatalogList from './catalog-list/CatalogList.tsx'
import {
	ProductContext,
	ProductContextProvider
} from '../../../context/ProudctContext.tsx'

const Catalog: FC = () => {
	return (
		<ProductContextProvider>
			<Nav />
			<Row>
				<Column size={2}>
					<CatalogFilter />
				</Column>
				<Column size={10} className='pr-10'>
					<CatalogList products={useContext(ProductContext)} />
				</Column>
			</Row>
		</ProductContextProvider>
	)
}

export default Catalog
