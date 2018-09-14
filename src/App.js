import React, { Component } from 'react'

import Search from './component/layout/Search'
import ResultList from './component/layout/ResultList'
import FavouriteList from './component/layout/FavouriteList'

class App extends Component {
	render() {
		return (
			<div>
				<Search />
				<ResultList />
				<FavouriteList />
			</div>
		)
	}
}

export default App;
