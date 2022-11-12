import React from 'react'

import './style.scss'

type CardPropType = {
	title: string
	detail: string
	image: string
}
const Card: React.FC<CardPropType> = ({
	title,
	detail,
	image,
}) => {
	return (
		<div className='client-card'>
			<div className='client-card__image'>
				<img src={image} alt={title} />
				<div className='overlay'></div>
			</div>
			<div className='client-card__contents'>
				<p>{detail}</p>
				<h4>{title}</h4>
				<div className='client-card__button'></div>
			</div>
		</div>
	)
}

export default Card
