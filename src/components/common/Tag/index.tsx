import React from 'react'

import './style.scss'

type TagType = {
	color: 'primary' | 'secondary'
	label: String
	size?: String
}

const Tag: React.FC<TagType> = ({ color, label }) => {
	return (
		<div className='tag'>
			<div className={`tag-container ${color}`}>
				<p className='tag-label'>{label}</p>
			</div>
		</div>
	)
}
export default Tag
