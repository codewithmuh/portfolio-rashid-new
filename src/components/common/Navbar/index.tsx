import React, {useRef, useState} from "react"

import Logo from "assets/brands/logo.png"
import MenuIcon from "@material-ui/icons/Menu"
import Button from "components/common/Button"
import CloseIcon from "@material-ui/icons/Close"
import ContactForm from "components/common/ContactForm"

import "./style.scss"

const Navbar = () => {
	const hamburgerRef = useRef<HTMLDivElement>(null)
	const closeIconRef = useRef<HTMLDivElement>(null)
	const navRef = useRef<HTMLUListElement>(null)
	const toggleMenu = () => {
		hamburgerRef.current?.classList.toggle("hide")
		closeIconRef.current?.classList.toggle("hide")
		navRef.current?.classList.toggle("show")
	}
	const [value, setValue] = useState(false)
	const handleClose = (value: boolean) => {
		setValue(value)
	}

	const handleOpen = () => {
		setValue(true)
	}

	return (
		<>
			{value && <ContactForm onclose={handleClose} />}
			<div id="nav-bar" className="navbar">
				<div className="navbar__container" >
					<div className="navbar__logo">
				
						<a href="/" rel="noopener noreferrer">
							
							
							<img src={Logo} alt=""  width={140} height={50}/>
							
						</a>
					</div>
					<div className="navbar__links">
						<div ref={hamburgerRef}>
							<MenuIcon
								onClick={toggleMenu}
								id="nav-hamburger"
								className="navbar__hamburger "
							/>
						</div>
						<div ref={closeIconRef} className="hide">
							<CloseIcon
								onClick={toggleMenu}
								id="nav-close"
								className="navbar__closeIcon "
							/>
						</div>

						<ul ref={navRef} onClick={toggleMenu} className="navigation ">
							<li>
								<a href="#recent-projects" rel="noopener noreferrer">
									Projects
								</a>
							</li>
							<li>
								<a href="#recent-experience" rel="noopener noreferrer">
									Experiences
								</a>
							</li>
							<li>
								<a
									href={
										process.env.PUBLIC_URL +
										"/images/Resume-Muhammad-Rashid.pdf"
									}
									rel="noopener noreferrer"
									target="_blank">
									CV
								</a>
								
							</li>
							<li>
								<a href="https://www.upwork.com/freelancers/~01b0bdb4d921c3a555" 
								 rel="noopener noreferrer"
								 target="_blank">
									Upwork Profile
								</a>
							</li>
							<Button onClick={handleOpen} label="Contact" variant="outline" />
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default Navbar
