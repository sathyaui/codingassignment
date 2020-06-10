import React from 'react';
import {
	ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid
} from 'recharts';

const CHART_HEIGHT = 300;

const data = [
	{
		name: 'Page A', uv: 4000
	},
	{
		name: 'Page B', uv: 3000
	},
	{
		name: 'Page C', uv: 2000
	},
	{
		name: 'Page D', uv: 2780
	},
	{
		name: 'Page E', uv: 1890
	},
	{
		name: 'Page F', uv: 2390
	},
	{
		name: 'Page G', uv: 3490
	},
];


const LineGraph = () => {
	return <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
		<LineChart
			width={500}
			height={CHART_HEIGHT}
			data={data}
			margin={{
				top: 5, right: 20, left: -20, bottom: 5,
			}}
		>
			<CartesianGrid />
			<XAxis tickLine={false} dataKey="name" />
			<YAxis tickLine={false} />
			<Line dataKey="uv" stroke="#82ca9d" />
		</LineChart>
	</ResponsiveContainer>
}

export default LineGraph;