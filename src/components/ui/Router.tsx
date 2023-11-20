import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../screens/main/Main'
import Catalog from '../screens/catalog/Catalog'
import Accessories from '../screens/accessories/Accessories'
import AboutUs from '../screens/about-us/AboutUs'
import Veloclub from '../screens/veloclub/Veloclub'
import Cart from '../screens/cart/Cart'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Main />} path='/' />
				<Route element={<Catalog />} path='/catalog' />
				<Route element={<Accessories />} path='/accessories' />
				<Route element={<Veloclub />} path='/veloclub' />
				<Route element={<AboutUs />} path='/about-us' />
				<Route element={<Cart />} path='/cart'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
