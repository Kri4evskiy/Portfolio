import React from 'react'
import Welcome from './components/Welcome'
import Layout from './hoc/Layout'

class App extends React.Component {

	state = {
		isSigned: false
	}

	signedControlHandler = () => {
		const isSigned = true
		this.setState({ isSigned })

	}
	componentDidMount() {
		console.log(this.state);
		console.log(this.props);

	}
	componentDidUpdate(state) {
		console.log(this.state);
	}


	render() {
		return (
			<Layout>
				<Welcome onSign={this.signedControlHandler} />
			</Layout>
		);
	}

}

export default App;
