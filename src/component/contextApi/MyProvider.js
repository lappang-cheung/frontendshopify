import React, { Component } from 'react'
import axios from 'axios'

export const MyContext = React.createContext()

const noop = () => {};
const VOID = Object.freeze({});

class MyProvider extends Component{

    state = {
        favList: [],
        resultList: [],
        resultItems: [],
		token: 'f24d700704f7f1c1dbeca1096007ae5d429560a1',
		sort: 'created: asc',
		search: '',
		count: 10
    }

    async updateResultItems() {
        const context = this;
        const results = context.state.resultList;

        console.log({
            context,
            results
        })
        const length = results.length;
        const items = new Array(length);

        if (length) {

            const promises = []; // new Array(length);

            const favorites = context.state.favList.map(item => item.full_name);

            let i = 0;
            for (const result of results) {
                const index = i++;
                const favorite = (favorites.includes(result.full_name) && ' ') || 'Add';
                const item = items[index] = {
                    index,
                    context: null,
                    result,
                    favorite,
                    version: '-'
                };

                if (!result.tags_url) continue;
                const promise = promises[index] = axios.get(item.tags_url).catch(noop);
                const {
                    data: [{
                        name: version = '-'
                    } = VOID] = ''
                } = await promise || VOID;
                item.version = version;
            }

            await Promise.all(promises);
        }
        this.setState({
            resultItems: items
        });
        // return items;
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
                        console.log('I have been pressed')
                        // Destructing from the state
                        const { search, sort, count, token} = this.state
                        const tokenUrl = `https://api.github.com/users/${search}/repos?per_page=${count}&sort=${sort}&?access_token=${token}`
                        // Promise return of the API call
                        return axios.get(tokenUrl)
                            .then(response => {
                                // Save the repo data into object array
                                this.setState({
                                    resultList: response.data
                                });
                                this.updateResultItems();
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