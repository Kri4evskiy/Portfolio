import React, { Component } from 'react'
import Welcome from './components/Welcome'
import MainPage from './components/MainPage'
import Layout from './hoc/Layout'

class App extends Component {

	state = {
		isSigned: true
	}

	signedControlHandler = () => {
		const isSigned = true
		this.setState({ isSigned })
	}

	render() {
		return (
			<Layout>
				{
					this.state.isSigned
						? <MainPage />
						: <Welcome onSign={this.signedControlHandler} />
				}
			</Layout>
		);
	}
}

export default App;
