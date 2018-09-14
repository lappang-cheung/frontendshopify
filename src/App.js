import React, { Component } from 'react'
import axios from 'axios'

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
		search: '',
		errors: {}
	}

	onChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	onSearch = (event) => {

		event.preventDefault()

		const { search, sort, clientId, clientSecret} = this.state

		return axios.get(`https://api.github.com/users/${search}/repos?&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(response => {
				this.setState({
					resultList: response.data
				})
				console.log(this.state.resultList[0])
			})
			.catch(function(error) {
				if(error.response.status !== 200){
					console.log('NO USERNAME FOUND!!!')
				}
			})
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
