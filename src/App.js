import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Feeds from './organisms/Feeds';
import LineChart from './organisms/LineChart';

import { fetchFeeds } from './actions';

import './scss/style.scss';

const App = (props) => {
	const [isLoading, setLoading] = useState(false);
	const { fetchFeeds } = props;
	useEffect(() => {
		console.log(location.hash)
		async function loadData() {
			await fetchFeeds(0);
			setLoading(true);
		}
		loadData();
	}, []);
	if (!isLoading) {
		return <div>Loading...</div>
	}
	return <section className="xt__container">
		<Feeds />
		<LineChart />
	</section>
};

export default connect(null, { fetchFeeds })(App);