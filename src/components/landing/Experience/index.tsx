import React from 'react'

import ExperienceCard from './Card'
import { ExperienceData } from './data'

import './style.scss'

function Experience() {
	return (
		<div id='recent-experience' className='experience'>
			<div className='experience__container'>
				<div className='section__title'>
					<h3>Experience</h3>
				</div>
				<p>
					I have also taken part in the following projects
					and startups.{' '}
				</p>
				<div className='experience__cards'>
					{ExperienceData.map((data) => (
						<ExperienceCard {...data} logo={data.image} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Experience
