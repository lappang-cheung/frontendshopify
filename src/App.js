// Required components
import React, { Component} from 'react'

// Context Api
import MyProvider from './component/contextApi/MyProvider'

// Custom components
import Search from './component/layout/Search'
import ResultList from './component/layout/ResultList'
import FavouriteList from './component/layout/FavouriteList'

// Main component
class App extends Component {

	// Storing the bookmarks into local storage
	componentDidUpdate(){
		const json = JSON.stringify(this.state.favList)
		localStorage.setItem('favList', json)
	}

	// // Gathering information from local storage
	// componentDidMount(){
	// 	try{
	// 		// Store and parse into JSON
	// 		const json = localStorage.getItem('favList')
	// 		const favList = JSON.parse(json)

	// 		// Saving into the array
	// 		if(favList){
	// 			this.setState({ favList})
	// 		}
	// 	}catch(e){
	// 		// Do nothing
	// 	}
	// }

	
	/**
	 * @COMP - Search Component, Results Components & Favourite Components
	 * @DESC - Renders the all the components needed for the application
 	 */ 
	render() {
		return (
			<MyProvider>
				<div className="wrapper">
					<header className="header">
						<h1 className="header_title">
							My Github Favorites
						</h1>
					</header>
				
					<div className="repoSide">
						<Search />
						<ResultList />
					</div>
					<div className="bookmarkSide">
						<FavouriteList />
					</div>
				</div>
			</MyProvider>
		)
	}
}

// Export the component
export default App;