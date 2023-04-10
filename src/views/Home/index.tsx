import React from "react"

import Header from "components/landing/Header/Header"
import Skills from "components/landing/Skills"
import RecentProjects from "components/landing/RecentProjects"
//import ClientProjects from "components/landing/ClientProjects"
import ArticlesVideos from "components/landing/ArticlesVideos"
import Experience from "components/landing/Experience"
import CtaCard from "components/common/CtaCard"
import Footer from "components/common/Footer"

import "./style.scss"

const Home = () => {
	return (
		<div>
			<Header />
			<Skills />
			<div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px" }}>
				<h2 style={{ marginBottom: "10px" }}>Youtube Channel Videos</h2>
				<p style={{ marginBottom: "20px" }}>All About Coding, Devops, Backend development</p>
				<a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#FFF", backgroundColor: "#4CAF50", padding: "10px 20px", borderRadius: "5px", transition: "background-color 0.3s" }}>
					Visit My Youtube Channel For More Videos
				</a>
			</div>

			<div style={{ marginBottom: "40px", marginRight: "20px", marginLeft: "20px" }}>
				<h2 style={{ marginBottom: "10px" }}>Youtube Channel Videos</h2>
				<p style={{ marginBottom: "20px" }}>All About Coding, Devops, Backend development</p>
				<div style={{ display: "flex", justifyContent: "space-between", marginBottom: "40px" }}>
					<div style={{ flexBasis: "30%", marginRight: "20px" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/Wz-zOpzk1Jk"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div style={{ flexBasis: "30%", marginRight: "20px" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/pXNB8uAGlx8"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div style={{ flexBasis: "30%" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/9q6XbhLawRI"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				</div>
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<div style={{ flexBasis: "30%", marginRight: "20px" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/LaoYcQsPyD8"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div style={{ flexBasis: "30%", marginRight: "20px" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/W_nqdc6IMDw"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div style={{ flexBasis: "30%" }}>
						<iframe
							width="100%"
							height="220"
							src="https://www.youtube.com/embed/fPXRhJPJQOI"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				</div>
			</div>


			<RecentProjects />
			{/* <ClientProjects /> */}
			<CtaCard
				title="Interested in Collaboration?"
				detail="Let’s have a conversation! I’d love to hear about
					what you’re working on and find a way to work
					together."
				btVariant="solid"
				label="Get in touch"
			/>

			<Experience />
			<ArticlesVideos />
			<CtaCard
				title="Interested in Collaboration?"
				btVariant="solid"
				label="Get in touch"
			/>
			<Footer />
		</div>
	)
}

export default Home
