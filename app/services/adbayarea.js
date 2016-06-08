import deaths from 'data/adbayarea.json';
import _ from 'lodash';

class ADbayarea {
	constructor() {
		this.idx = _.keys(deaths.year);
		this.year = deaths.year;
		this.county = deaths.county;
		this.all_deaths = deaths.all_deaths;
		this.per_100000 = deaths.all_deaths_per_100000;
	}

	getYears() {
		return _.uniq(_.values(this.year));
	}

	getCounties() {
		return _.uniq(_.values(this.county));
	}

	getAllDeaths(county) {
		let byYearData = this.byYear();
		let years = this.getYears();
		let data = [];

		if (county !== 'all') {
			years.forEach(year => {
				data.push(byYearData[year][county].all_deaths);
			});
		} else {
			let counties = this.getCounties();
			counties.forEach(county => {
				let tmp = {['name']: county,['data']:[]};
				years.forEach(year => {
					tmp.data.push(byYearData[year][county].all_deaths);
				});
				data.push(tmp);
			});
		}
		console.log(data);
		return data;
	}

	byIndex() {
		let data = [];
		
		this.idx.forEach( i => {
			data.push({
				year: this.year[i],
				county: this.county[i],
				all_deaths: this.all_deaths[i],
				per_100000: this.per_100000[i]
			});
		});

		console.log(data);
		return data;
	}

	byYear() {
		let years = this.getYears();
		let indexedData = this.byIndex();
		let obj = {};

		years.forEach(year => {
			obj[year] = {};
			indexedData.forEach(data => {
				if (year === data.year) {
					obj[year][data.county] = {
						all_deaths: data.all_deaths,
						per_100000: data.per_100000
					}
				}
			});
		});

		console.log(obj);
		return obj;
	}
}

export default ADbayarea;