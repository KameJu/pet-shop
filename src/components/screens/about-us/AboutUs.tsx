import { FC } from 'react'
import Nav from '../nav/Nav'
import styles from './AboutUs.module.scss'
import img1 from '../../../../public/images/hik_1.jpg'

import img2 from '../../../../public/images/hik_2.jpg'

import img3 from '../../../../public/images/hik_3.webp'

import img4 from '../../../../public/images/hik_4.jpg'
import Row from '../../ui/grid/Row'

const AboutUs: FC = () => {
	return (
		<>
			<Nav />
			<div className={styles.main}>
				<span className='text-4xl'>About Us</span>
				<span className='mt-5 text-xl'>
					{' '}
					Welcome to Veloclub – Where Passion Meets Pedals!
				</span>
				<ul>
					<li>
						<img src={img1}></img>
					</li>
					<li>
						<span>
							At Veloclub, we are not just a cycling community; we are a family
							of riders bound together by our shared love for the open road, the
							thrill of the ride, and the unmistakable camaraderie that comes
							with every revolution of the pedals. Established with a vision to
							create a haven for cycling enthusiasts, Veloclub has become more
							than just a club; it's a lifestyle.
						</span>
					</li>
					<li>
						<span>
							Our journey began with a handful of individuals who believed in
							the power of two wheels to transform lives. Whether you're a
							seasoned cyclist or someone just discovering the joy of biking,
							Veloclub is here to embrace you. We believe in fostering an
							inclusive environment that encourages riders of all levels to come
							together, share experiences, and push each other to new heights –
							both on and off the saddle.
						</span>
					</li>
					<li>
						<img src={img2}></img>
					</li>
					<li>
						<img src={img3}></img>
					</li>
					<li>
						<span>
							What sets Veloclub apart is our commitment to building a community
							that goes beyond the bike. We organize regular group rides,
							training sessions, and social events to create opportunities for
							our members to connect, learn, and grow together. Veloclub is not
							just a cycling club; it's a network of friendships, support, and
							shared passion that extends beyond the asphalt.
						</span>
					</li>
					<li>
						<span>
							Join Veloclub, and you're not just joining a cycling group; you're
							becoming part of a movement. A movement that values health,
							camaraderie, and the sheer pleasure of exploring the world from
							the saddle of a bicycle. As we pedal towards new horizons, we
							invite you to be a part of our story – the story of Veloclub,
							where every turn of the wheel brings us closer together.
						</span>
					</li>
					<li>
						<img src={img4}></img>
					</li>
				</ul>
			</div>
		</>
	)
}

export default AboutUs
