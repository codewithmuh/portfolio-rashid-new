import React from "react"
import {ReactTypeformEmbed} from "react-typeform-embed"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

import "./style.scss"

type FormProp = {
	onclose: Function
}

const styleDefault = {
	position: "relative",
	width: "100%",
	height: "100%",
	overflow: "hidden",
}
const ContactForm: React.FC<FormProp> = ({onclose}) => {
	const closeModal = () => {
		onclose(false)
	}

	return (
		<div onClick={closeModal} className="contact-form">
			<div className="form__inner">
				<HighlightOffIcon className="form__close" onClick={closeModal} />{" "}
				<ReactTypeformEmbed
					url="https://4s69v0utsaa.typeform.com/to/Fdwt6gcO"
					popup={false}
					style={styleDefault}
				/>{" "}
				<h3 className="form__loader">loading..</h3>
			</div>
		</div>
	)
}

export default ContactForm
