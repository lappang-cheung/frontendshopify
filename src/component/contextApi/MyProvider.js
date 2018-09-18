import React, { Component } from 'react'
import axios from 'axios'

export const MyContext = React.createContext()

class MyProvider extends Component{

    state = {
        favList: [],
		resultList: [],
		token: 'f24d700704f7f1c1dbeca1096007ae5d429560a1',
		sort: 'created: asc',
		search: '',
		count: 10
    }

    render(){
        return(
            <MyContext.Provider
                value={{
                    state: this.state,
                    // Getting the events from search input
                    onChange: (event) => {
                        this.setState({
                            search: event.target.value
                        })

                        if(event.target.value === ''){
                            this.setState({
                                resultList: []
                            })
                        }
                    },
                    onAdd: (addItem) => {
                        // Check if repo has been bookmarked
                        if(this.state.favList.indexOf(addItem) <  0){
                            // Add into the bookmark array
                            this.setState({
                                favList: [...this.state.favList, addItem]
                            })
                        }
                    },
                    onRemove: (removeItem) => {
                        this.setState(prevState => ({
                            favList: prevState.favList.filter(result => {
                                return removeItem !== result
                            })
                        }))
                    },
                    onSearch: (event) => {
                        // Prevent reload
                        event.preventDefault()
                        
                        // Destructing from the state
                        const { search, sort, count, token} = this.state
                        const tokenUrl = `https://api.github.com/users/${search}/repos?per_page=${count}&sort=${sort}&?access_token=${token}`
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
                }}
            >
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default MyProvider