import React, { Component } from 'react'

import Search from './component/layout/Search'
import ResultList from './component/layout/ResultList'
import FavouriteList from './component/layout/FavouriteList'

class App extends Component {

	state = {
		favList: [],
		resultList: [],
		clientId: '294d20a0eff0847f0a18',
		clientSecret: '54651c72e5577d36f2f3315c712c984ef03cb88c',
		sort: 'created: asc',
		search: ''
	}

	onChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	onSearch = (event) => {

		event.preventDefault()

		const { search, sort, clientId, clientSecret} = this.state

		
		fetch(`https://api.github.com/users/${search}/repos?&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(res => res.json())
			.then(data => {
				this.setState({
					resultList: data
				})
				console.log(`The username is ${search}`)
				console.log(`https://api.github.com/users/${search}/repos?&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
				console.log(this.state.resultList[0])
			})
			.catch(err => console.log(err))
	}

	render() {

		return (
			<div>
				<h1>My Github Favourites</h1>
				<Search 
					search = {this.state.search}
					onChange = {this.onChange}
					onSearch = {this.onSearch}
				/>
				<ResultList
					resultList = {this.state.resultList}
					favList = {this.state.favList}
				/>
				<FavouriteList />
			</div>
		)
	}
}

export default App;
