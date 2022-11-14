import React from "react"

import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"

import "./style.scss"

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container">
				<h4>Follow me on social media</h4>
				<div className="footer__social-icons">
					<a
						href="https://github.com/rashiddaha"
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<GitHubIcon className="social-icon" />
					</a>
					<a
						href="https://www.linkedin.com/in/muhammad-rashid-daha/"
						target="_blank"
						rel="noopener noreferrer">
						<LinkedInIcon className="social-icon" />
					</a>
					{/* <a
						href="https://www.behance.net/user/?username=bikashxsharma"
						target="_blank"
						rel="noopener noreferrer">
						<span className="social-icon">Be</span>
					</a> */}
					<a
						href="https://m-rashid.medium.com/"
						target="_blank"
						rel="noopener noreferrer">
						<span style={{fontSize: "20px"}}>Medium</span>
					</a>
				</div>
				<p>
					Designed and developed by Muhammad Rashid
				</p>
				<p>Copyright © Rashid {new Date().getFullYear()}</p>
			</div>
		</div>
	)
}

export default Footer
