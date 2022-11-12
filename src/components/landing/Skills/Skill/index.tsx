import React from 'react'

import './style.scss'

type SkillPropType = {
	name: string
	detail: string
	icon: Function
}

const Skill: React.FC<SkillPropType> = ({
	name,
	detail,
	icon,
}) => {
	const Icon = icon
	return (
		<div className='skill-item'>
			<div className='skill-item__logo'>
				<div className='logo__circle'>
					<div className='logo__icon'>
						<Icon />
					</div>
				</div>
			</div>
			<div className='skill-item__content'>
				<h4>{name}</h4>
				<p>{detail}</p>
			</div>
		</div>
	)
}

export default Skill
