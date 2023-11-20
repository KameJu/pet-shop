import { FC } from 'react'
import Row from '../../ui/grid/Row'
import Column from '../../ui/grid/Column'
import logo from '../../../../public/images/logo.svg'
import { Link } from 'react-router-dom'

const Nav: FC = () => {
	return (
		<Row className=' text-[#FDE047] p-4'>
			<Column size={2}>
				<div className='flex flex-row items-center gap-1 text-3xl ml-10'>
					<img src={logo} height={35} width={35} alt='logo' />
					<span>Velocity</span>
				</div>
			</Column>
			<Column className='flex flex-row justify-center gap-5' size={8}>
				<Link to={'/'} className='btn select'>
					Main
				</Link>
				<Link to={'/catalog'} className='btn'>
					Catalog
				</Link>
				<Link to={'/accessories'} className='btn'>
					Accessories
				</Link>
				{/* <Link to={"/veloclub"} className="btn">
          Veloclub
        </Link> */}
				<Link to={'/about-us'} className='btn'>
					About us
				</Link>
        <Link to={'/Cart'} className='btn'>Cart</Link>
			</Column>
		</Row>
	)
}

export default Nav
