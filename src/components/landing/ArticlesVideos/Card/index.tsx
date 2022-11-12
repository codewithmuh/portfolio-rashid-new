import React from 'react'

import Tag from '../../../common/Tag'
import './style.scss'

type CardPropType = {
	title: string
	detail: string
	image: string
	type?: string
}
const Card: React.FC<CardPropType> = ({
	title,
	detail,
	image,
	type,
}) => {
	return (
		<div className='article-card'>
			<div className='article-card__image'>
				<img src={image} alt={title} />
				<div className='overlay'></div>
			</div>
			<div className='article-card__contents'>
				<h4>{title}</h4>
				<p>{detail}</p>
			</div>
			{type && (
				<div className='type-tag'>
					<Tag label={type} color='primary' />
				</div>
			)}
		</div>
	)
}

export default Card
