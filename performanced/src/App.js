import React, { useState } from 'react'

import Welcome from './components/Welcome'
import MainPage from './components/MainPage'
import Layout from './hoc/Layout'

const App = () => {
	const [isSigned, setIsSigned] = useState(true)

	const signedControlHandler = () => {
		setIsSigned(prevState => !prevState)
	}

	return (
		<Layout>
			{
				isSigned
					? <MainPage />
					: <Welcome onSign={signedControlHandler} />
			}
		</Layout>
	);
}

export default App;
