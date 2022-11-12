import React from 'react'
import { createTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import Routes from 'Routes'

import './app.scss'

function App() {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#f2aa26',
				dark: '#f09c01',
			},
			secondary: {
				main: '#11cb5f',
			},
			text: {
				primary: '#373585',
				secondary: '#a4a6b3',
			},
			background: {
				default: '#f7f8fc',
			},
		},
		typography: {
			fontFamily: 'Jost, sans- serif',
			fontWeightBold: 700,
			fontWeightMedium: 600,
			fontWeightRegular: 400,
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Routes />
			</div>
		</ThemeProvider>
	)
}

export default App
