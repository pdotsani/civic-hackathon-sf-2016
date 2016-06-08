import React from 'react';
import _ from 'lodash';
import ADbayarea from 'services/adbayarea';
import ReactHighcharts from 'react-highcharts';
import { Link } from 'react-router';

const d = new ADbayarea;
const config = {
	title: {
		text: 'All Deaths in the Bay Area'
	},

	xAxis: {
		categories: d.getYears()
	},
	series: d.getAllDeaths('all')
};

class Dbayarea extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		console.log(d.getYears());
		console.log(d.getCounties());
		console.log(d.getAllDeaths('all'));
	}

	render() {
		return (
			<div>
				<Link to='/'>Back home</Link>
				<ReactHighcharts config={config} />
			</div>
		)
	}
}

export default Dbayarea;