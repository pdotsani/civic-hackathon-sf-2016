import React from 'react';
import deaths from 'data/adbayarea.json'

class Dbayarea extends React.Component {
	render() {
		return (
			<div>
				<p>{JSON.stringify(deaths)}</p>
			</div>
		)
	}
}

export default Dbayarea;