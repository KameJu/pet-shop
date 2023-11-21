import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from '../screens/main/Main'
import Catalog from '../screens/catalog/Catalog'
import AboutUs from '../screens/about-us/AboutUs'
import Cart from '../screens/cart/Cart'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Main />} path='/' />
				<Route element={<Catalog />} path='/catalog' />
				<Route element={<AboutUs />} path='/about-us' />
				<Route element={<Cart />} path='/cart'></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
