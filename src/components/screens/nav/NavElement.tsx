import { PropsWithChildren, FC } from 'react'
import { Link } from 'react-router-dom'
import cn from 'clsx'

interface INavElement {
	pathname: string
	currentPahname: string
	text: string
	className?: string
}

const NavElement: FC<PropsWithChildren<INavElement>> = ({
	children,
	pathname,
	currentPahname,
	text,
	className
}) => {
	const isOpen = pathname == currentPahname
	return (
		<div>
			<Link
				to={pathname}
				className={cn(
					'btn',
					{
						select: isOpen
					},
					className
				)}
			>
				{text}
				{children}
			</Link>
		</div>
	)
}

export default NavElement
