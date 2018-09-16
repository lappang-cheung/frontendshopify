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
		token: 'PUT YOUR OWN TOKEN',
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

	// Add bookmark item(s)
	onAdd = (addItem) => {
		// Check if repo has been bookmarked
		if(this.state.favList.indexOf(addItem) <  0){
			// Add into the bookmark array
			this.setState({
				favList: [...this.state.favList, addItem]
			})
		}
	}

	// Remove bookmark item(s)
	onRemove = (removeItem) => {
		this.setState(prevState => ({
			favList: prevState.favList.filter(result => {
				return removeItem !== result
			})
		}))
	}

	// Search using Github v3 API
	onSearch = (event) => {
		// Prevent reload
		event.preventDefault()
		// Destructing from the state
		const { search, sort, count, token} = this.state
		const tokenUrl = `https://api.github.com/users/${search}/repos?per_page=${count}&sort=${sort}&access_token=${token}`
		// Promise return of the API call
		return axios.get(tokenUrl)
			.then(response => {
				// Save the repo data into object array
				this.setState({
					resultList: response.data
				})
			})
			.catch((error) => {
				// Check if user exist
				if(error.response.status !== 200){
					console.log('NO USERNAME FOUND!!!')
					// Set to none if user not found
					this.setState({
						resultList: []
					})
				}
			}
		)
	}
	/**
	 * @COMP - Search Component, Results Components & Favourite Components
	 * @DESC - Renders the all the components needed for the application
 	 */ 
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

// Export the component
export default App;