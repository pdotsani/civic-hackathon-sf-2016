import React from 'react';
import deaths from 'data/adbayarea.json';
import _ from 'lodash';
import ADbayarea from 'services/adbayarea';

var d = new ADbayarea;

class Dbayarea extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: d.get()
		};
	}

	render() {
		return (
			<div>
				{JSON.stringify(this.state.data, null, 2)}
			</div>
		)
	}
}

export default Dbayarea;