import React from 'react';
import { connect } from 'react-redux';

import * as moment from 'moment';

const Feeds = (props) => {
	const { data } = props;
	if (data.length < 0) return <div>Loading...</div>
	return <div className="xt__feed">
		<table className="xt__feed__table">
			<thead>
				<tr>
					<th className="xt__feed__table__th" width="90">Comments</th>
					<th className="xt__feed__table__th" width="70">Vote Count</th>
					<th className="xt__feed__table__th" width="70">Upvote</th>
					<th className="xt__feed__table__th">News Details</th>
				</tr>
			</thead>
			<tbody>
				{data.map(hits => hits.hits.map((item) => {
					const { num_comments, objectID, points, title, url, author, created_at } = item;
					return <tr key={objectID} className="xt__feed__table__row">
						<td className="xt__feed__table__td">{num_comments && num_comments || 0}</td>
						<td className="xt__feed__table__td">{points}</td>
						<td className="xt__feed__table__td">^</td>
						<td className="xt__feed__table__td">{title} {url} by {author} {moment(created_at).startOf('hour').fromNow()}</td>
					</tr>
				}))}
			</tbody>
		</table>
		<div className="xt__navigation xt__flex">
			<button className="xt__navigation__button">Previous</button>
			|
			<button className="xt__navigation__button">Next</button>
		</div>
	</div>
}

const mapStateToProps = (state) => {
	return {
		data: state.feeds
	}
}

export default connect(mapStateToProps, {})(Feeds);