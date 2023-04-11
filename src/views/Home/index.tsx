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

import "./index.css"

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


<div className="video-section">
    <h2>Youtube Channel Videos</h2>
    <p style={{ marginBottom: "50px" }}>All About Coding, Devops, Backend development</p>
    <div className="video-container">
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/Wz-zOpzk1Jk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/pXNB8uAGlx8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/9q6XbhLawRI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/LaoYcQsPyD8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/W_nqdc6IMDw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
        <div className="video">
            <iframe width="100%" height="220" src="https://www.youtube.com/embed/fPXRhJPJQOI" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
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
