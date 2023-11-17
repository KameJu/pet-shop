import { FC } from 'react'
import bike from '../../../../../public/images/bike_3.png'
import { formatToCurrency } from '../../../../utils/format-to-currency'

const MenuBike: FC = () => {
	return (
		<>
			<img src={bike} alt='bike' />
			<div className='text-yellow-300 absolute p-3 left-[3rem] top-[33.5rem]'>
				<div>Model: S-Works Tarmac SL7-Dura Ace Di2</div>
				<div>Price:{formatToCurrency(2000)}</div>
				<div>Type: highway</div>
			</div>
		</>
	)
}

export default MenuBike
