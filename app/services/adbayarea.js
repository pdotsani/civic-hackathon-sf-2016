import deaths from 'data/adbayarea.json';
import _ from 'lodash';

class ADbayarea {
	constructor() {
		let idx = _.keys(deaths.year);
		let year = deaths.year;
		let county = deaths.county;
		let all_deaths = deaths.all_deaths;
		let per_100000 = deaths.all_deaths_per_100000;

		this.data = [];

		idx.forEach( i => {
			this.data.push({
				year: year[i],
				county: county[i],
				all_deaths: all_deaths[i],
				per_100000: per_100000[i]
			});
		});
		console.log(this.data);
	}

	get() {
		return this.data;
	}
}

export default ADbayarea;