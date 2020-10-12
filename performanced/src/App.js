import React from 'react'
import Welcome from './components/Welcome'
import MainPage from './components/MainPage'
import Layout from './hoc/Layout'

class App extends React.Component {

	state = {
		isSigned: true
	}

	signedControlHandler = () => {
		const isSigned = true
		this.setState({ isSigned })

	}
	// componentDidMount() {
	// 	console.log(this.state);
	// 	console.log(this.props);

	// }
	// componentDidUpdate(state) {
	// 	console.log(this.state);
	// }


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
