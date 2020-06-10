import React from 'react';

class Feeds extends React.PureComponent {
	render() {
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
					<tr>
						<td className="xt__feed__table__td">36</td>
						<td className="xt__feed__table__td">96</td>
						<td className="xt__feed__table__td">^</td>
						<td className="xt__feed__table__td">test</td>
					</tr>
				</tbody>
			</table>
			<div className="xt__flex">
				<button>Previous</button>
				<button>Next</button>
			</div>
		</div>
	}
}

export default Feeds;