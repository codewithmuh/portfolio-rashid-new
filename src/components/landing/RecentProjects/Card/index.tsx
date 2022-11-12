import React from 'react'

import Tag from '../../../common/Tag'
import './style.scss'

type CardPropType = {
	title: string
	detail: string
	image: string
	status?: string
}
const Card: React.FC<CardPropType> = ({
	title,
	detail,
	image,
	status,
	children,
}) => {
	return (
		<div className='rp-card'>
			<div className='rp-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='rp-card__contents'>
				<h4>{title}</h4>
				<p>{detail}</p>
				<div className='rp-card__buttons'>{children}</div>
			</div>
			{status && (
				<div className='repo-tag'>
					<Tag label={status} color='secondary' />
				</div>
			)}
		</div>
	)
}

export default Card
