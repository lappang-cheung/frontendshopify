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
		count: 10,
		errors: {}
	}

	onChange = (event) => {
		this.setState({
			search: event.target.value
		})
	}

	onSearch = (event) => {

		event.preventDefault()

		const { search, sort, clientId, clientSecret, count} = this.state

		return axios.get(`https://api.github.com/users/${search}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(response => {
				this.setState({
					resultList: response.data
				})
				console.log(this.state.resultList[0])
			})
			.catch((error) => {
				if(error.response.status !== 200){
					console.log('NO USERNAME FOUND!!!')
					this.setState({
						resultList: []
					})
				}
			})
	}

	render() {

		return (
			<div className="container">
			
				<div className="row">
					<div className="col-sm-12 col-md-12 col-lg-12">
						<h1>My Github Favourites</h1>
					</div>

					<div className="col-ms-12 col-md-6 col-lg-6">
						<Search 
							search = {this.state.search}
							onChange = {this.onChange}
							onSearch = {this.onSearch}
						/>
						<ResultList
							resultList = {this.state.resultList}
							favList = {this.state.favList}
						/>
					</div>

					<div className="col-ms-12 col-md-6 col-lg-6">
						<FavouriteList />
					</div>
				</div>
			</div>
		)
	}
}

export default App;
