import React from 'react'

import Card from './Card'
import { RecentProjectData } from './data'

import './style.scss'

function ClientProjects() {
	return (
		<div id='client-projects' className='client-projects'>
			<div className='client-projects__container'>
				<div className='section__title'>
					<h3>Client projects</h3>
				</div>
				<div className='client-projects__cards'>
					{RecentProjectData.map((card) => (
						<a
							rel='noopener noreferrer'
							href={card.link}
							target='_blank'>
							<Card {...card} />
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default ClientProjects
