import { FC } from 'react'
import Nav from '../nav/Nav'
import Row from '../../ui/grid/Row'
import Column from '../../ui/grid/Column'
import { formatToCurrency } from '../../../utils/format-to-currency'
import AccessoriesItem from './accessories-item/AccessoriesItem'
import { accessories } from './accessories-item/accessry.data.js'

// TODO: replace chain by tshirts or smt...
const Accessories: FC = () => {
	return (
		<>
			<Nav />
			<Row>
				<Column size={2} />
				<Column size={10} className='pr-10'>
					<Row>
						{accessories.map(accessory => (
							<AccessoriesItem
								key={accessory.id}
								image={accessory.image}
								price={formatToCurrency(accessory.price)}
								name={accessory.name}
							/>
						))}
					</Row>
				</Column>
			</Row>
		</>
	)
}

export default Accessories
