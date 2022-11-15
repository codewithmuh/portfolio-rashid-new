import React from "react"

import HeroImage from "../../../../assets/images/hero-image.png"
import HeaderBg from "../../../../assets/images/header__bg.png"
import Button from "../../../common/Button"

import "./style.scss"

export const Banner = () => {
	return (
		<div className="banner">
			<div className="banner__container">
				<div className="banner__content">
					<h3>HELLO, I’M MUHAMMAD RASHID</h3>
					<h1>Full Stack Developer</h1>
					<h5>
						I’m a LAHORE-based full-stack developer focused on writing code
						that makes an{" "}<span className="text-highlight">impact on users.</span> I have alsogained experience as a <span className="text-highlight">Product designer, Backend, Frontend developer and DevOps Engineer</span>, and
						by working with differnt Companies. My experience as a and startup
						co-founder has opened the ability to understand both the business
						side as well as the users’ side of any project. I commit code to{" "}
						<a
							className="github"
							href="https://github.com/rashiddaha"
							target="_blank"
							rel="noopener noreferrer">
							Github.
						</a>{" "}
					
						And write articles on{" "}
						<a
							className="github"
							href="https://medium.com/@m-rashid"
							target="_blank"
							rel="noopener noreferrer">
							Medium.
						</a>
					</h5>
					<a href="#recent-projects">
						<Button label="View projects" variant="outline" />
					</a>
				</div>
				<div className="banner__image">
					<img src={HeroImage} alt="Muhammad Rashid smiling" />
				</div>
			</div>
			<img
				src={HeaderBg}
				alt="code abstract background"
				className="banner__bg"
			/>
		</div>
	)
}
export default Banner
