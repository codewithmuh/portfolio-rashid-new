import React from 'react'

import Card from './Card'
import { RecentProjectData } from './data'

import './style.scss'

function ArticlesVideos() {
	return (
		<div id='articles-videos' className='article-videos'>
			<div className='article-videos__container'>
				<div className='section__title'>
					<h3>Articles </h3>
				</div>
				<div className='article-videos__cards'>
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

export default ArticlesVideos
