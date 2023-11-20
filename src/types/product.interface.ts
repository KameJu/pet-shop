export interface IProduct {
	id: number
	image: string
	model: string
	price: number
	type: string
}

export interface IProductDetails {
	product: IProduct
}
