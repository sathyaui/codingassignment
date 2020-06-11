import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as moment from 'moment';

import Navigation from './Navigation';

const Feeds = (props) => {
	const { data, pageNumber } = props;
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
				{data[pageNumber].hits.map((item) => {
					const { num_comments, objectID, points, title, url, author, created_at } = item;
					return <tr key={objectID} className="xt__feed__table__row">
						<td className="xt__feed__table__td">{num_comments && num_comments || 0}</td>
						<td className="xt__feed__table__td">{points}</td>
						<td className="xt__feed__table__td">^</td>
						<td className="xt__feed__table__td">{title} {url} by {author} {moment(created_at).startOf('hour').fromNow()}</td>
					</tr>
				})}
			</tbody>
		</table>
		<Navigation />
	</div>
}

const mapStateToProps = (state) => {
	return {
		data: state.feeds,
		pageNumber: state.pageNumber
	}
}

export default connect(mapStateToProps, {})(Feeds);