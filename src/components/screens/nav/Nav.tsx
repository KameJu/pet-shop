import { FC } from 'react'
import Row from '../../ui/grid/Row'
import Column from '../../ui/grid/Column'
import logo from '../../../../public/images/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../../../hooks/useCart'
import NavElement from './NavElement'

const Nav: FC = () => {
	const { cart } = useCart()

	const location = useLocation()

	return (
		<Row className=' text-[#FDE047] p-4'>
			<Column size={2}>
				<div className='flex flex-row items-center gap-1 text-3xl ml-10'>
					<img src={logo} height={35} width={35} alt='logo' />
					<span>Velocity</span>
				</div>
			</Column>
			<Column className='flex flex-row justify-center gap-5' size={8}>
				<NavElement
					pathname='/'
					text='Main'
					currentPahname={location.pathname}
				/>
				<NavElement
					pathname='/catalog'
					text='Catalog'
					currentPahname={location.pathname}
				/>
				<NavElement
					pathname='/about-us'
					text='About us'
					currentPahname={location.pathname}
				/>
				<NavElement
					pathname='/cart'
					text='Cart'
					currentPahname={location.pathname}
					className='relative'
				>
					{cart.length ? (
						<span className=' absolute mr-4 flex h-3 w-3 items-center justify-center rounded-full bg-red p-1 text-[0.7rem] text-white -top-[0.05rem] -right-6'>
							{cart.length}
						</span>
					) : (
						<></>
					)}
				</NavElement>
			</Column>
		</Row>
	)
}

export default Nav
