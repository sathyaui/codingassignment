import React from 'react';

import Feeds from './organisms/Feeds';
import LineChart from './organisms/LineChart';

import './scss/style.scss';

const App = () => <section className="xt__container">
    <Feeds />
    <LineChart />
</section>;

export default App;