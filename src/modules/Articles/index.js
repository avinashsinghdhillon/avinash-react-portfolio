import React from 'react'
import Header from '../../components/Header';
import Divider from '../../components/Divider';

export const Articles = () => {
	return (
		<div class="componentContainer">
			<Header text="Articles" />
			<Divider />
			<div style={{ position: 'relative', margin: '10px' }}>

				<p className='contentText'>
					<a
						target="blank"
						href="https://www.linkedin.com/pulse/coding-boot-camp-you-heres-my-perspective-avinash-singh/"
						style= {{ textDecoration: 'none', color: 'rgb(1, 43, 1)' }}
					>
						1. Is a Coding Boot-Camp for you?
					</a>
				</p>

				<p className='contentText'>
					<a
						target="blank"
						href="https://en.wikipedia.org/wiki/ZX_Spectrum"
						style= {{ textDecoration: 'none', color: 'rgb(1, 43, 1)' }}
					>
						2. My first computer: The ZX Spectrum!
					</a>
				</p>

			</div>
		</div>
	)
}

export default Articles;