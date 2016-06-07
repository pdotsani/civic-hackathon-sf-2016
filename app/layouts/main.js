import React from 'react';

class Main extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h1>Visualizations</h1>
				</div>
				<main>
					{this.props.children}
				</main>
			</div>
		)
	}
}

export default Main;