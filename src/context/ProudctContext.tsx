import React from 'react'
import { products } from '../components/screens/catalog/catalog-item/products.data'

type ProductContextProviderProps = {
	children: React.ReactNode
}

export const ProductContext = React.createContext(products)

export const ProductContextProvider = ({
	children
}: ProductContextProviderProps) => {
	return (
		<ProductContext.Provider value={products}>
			{children}
		</ProductContext.Provider>
	)
}
