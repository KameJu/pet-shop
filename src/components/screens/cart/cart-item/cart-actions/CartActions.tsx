// import { AddIcon, MinusIcon } from '@chakra-ui/icons'
// import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'
import { ICartItem } from '../../../../../types/cart.interface'
import { useActions } from '../../../../../hooks/useActions'
import { useCart } from '../../../../../hooks/useCart'
import { FiTrash, FiPlus, FiMinus } from 'react-icons/fi'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()
	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div className='flex items-center gap-2 text-white'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus />
				</button>

				<input
					className='w-10 opacity-50 text-center'
					readOnly
					value={quantity}
				/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus />
				</button>
				<button
					className=' ml-3 text-red'
					onClick={() => removeFromCart({ id: item.id })}
				>
					<FiTrash />
				</button>
				<button
					className='ml-5 btn-yellow'
					onClick={() => removeFromCart({ id: item.id })}
				>
					BUY
				</button>
			</div>
		</div>
	)
}

export default CartActions
