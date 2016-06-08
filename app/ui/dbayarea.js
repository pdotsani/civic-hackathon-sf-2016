import React from 'react';
import deaths from 'data/adbayarea.json';
import _ from 'lodash';
import ADbayarea from 'services/adbayarea';

var d = new ADbayarea;

class Dbayarea extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(d.getYears());
		console.log(d.getCounties());
	}

	render() {
		return (
			<div>
				Graph here...
			</div>
		)
	}
}

export default Dbayarea;