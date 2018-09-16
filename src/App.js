// Required components
import React, { Component} from 'react'
import axios from 'axios'

// Custom components
import Search from './component/layout/Search'
import ResultList from './component/layout/ResultList'
import FavouriteList from './component/layout/FavouriteList'

// Main component
class App extends Component {

	// Need states for the app
	state = {
		favList: [],
		resultList: [],
		clientId: '82c9d37d3b9e8fab17f1',
		clientSecret: 'd4c3ad31d6ed530b18098894fae1542360e57a88',
		sort: 'created: asc',
		search: '',
		count: 10,
		errors: {}
	}

	// Storing the bookmarks into local storage
	componentDidUpdate(){
		const json = JSON.stringify(this.state.favList)
		localStorage.setItem('favList', json)
	}

	// Gathering information from local storage
	componentDidMount(){
		try{
			// Store and parse into JSON
			const json = localStorage.getItem('favList')
			const favList = JSON.parse(json)

			// Saving into the array
			if(favList){
				this.setState({ favList})
			}
		}catch(e){
			// Do nothing
		}
	}

	// Getting the events from search input
	onChange = (event) => {
		this.setState({
			search: event.target.value
		})
		// If the search is empty then erase the results
		if(event.target.value === ''){
			this.setState({
				resultList: []
			})
		}
	} 

	onAdd = (addItem) => {
		if(this.state.favList.indexOf(addItem) <  0){
			this.setState({
				favList: [...this.state.favList, addItem]
			})
		}
	}

	onRemove = (removeItem) => {
		this.setState(prevState => ({
			favList: prevState.favList.filter(result => {
				return removeItem !== result
			})
		}))
	}

	onSearch = (event) => {

		event.preventDefault()

		const { search, sort, clientId, clientSecret, count} = this.state

		return axios.get(`https://api.github.com/users/${search}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`)
			.then(response => {
				this.setState({
					resultList: response.data
				})
			})
			.catch((error) => {
				if(error.response.status !== 200){
					console.log('NO USERNAME FOUND!!!')
					this.setState({
						resultList: []
					})
				}
			}
		)
	}

	render() {

		return (
			<div className="wrapper">
				<header className="header">
					<h1 className="header_title">
						My Github Favorites
					</h1>
				</header>
				
					<div className="leftSide">
						<Search 
							search = {this.state.search}
							onChange = {this.onChange}
							onSearch = {this.onSearch}
						/>
						<ResultList
							resultList = {this.state.resultList}
							favList = {this.state.favList}
							onAdd = {this.onAdd}
						/>
					</div>
					<div className="rightSide">
						<FavouriteList 
							favList = {this.state.favList}
							onRemove = {this.onRemove}
						/>
					</div>
				
			</div>
		)
	}
}

export default App;
