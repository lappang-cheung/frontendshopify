// Required components
import React, { Component } from 'react'
import axios from 'axios'

/**
 * @COMP - FavouriteView component
 * @DESC - Render the view of the individual bookmark repo
 */
class FavouriteView extends Component{
    
    // For only getting the version
    state = {
        version: '-'
    }
    // Needed for async callback
    _isMounted = false

    // Async call to get the latest version of the repo
    getVersion = async (item) => {	
		try{
            // Store the promise
            const result = await axios.get(item.tags_url)
            // Check if result exist and has been mounted
            if(this._isMounted && result){
                // Store the latest version of repo
                this.setState({
                    version: result.data[0].name
                })
            }
        }catch(e){
            // Do nothing
        }
    }
    // Async callbacks to check if needed
    componentDidMount(){
        this._isMounted = true
    }
    // Async callbacks has been completed
    componentWillUnmount(){
        this._isMounted = false
    }

    render(){
        // Destructing from the props
        const {index, result, onRemove} = this.props
        // Get the version of the repo for rendering
        this.getVersion(result)
        // Render all the individual view information
        return(
            <tr key={index}>
                <td><a href={result.html_url} className="linkUrl">{result.full_name}</a></td>
                <td>{result.language}</td>
                <td>{this.state.version} </td>
                <td><a href="# " className="bookmark" onClick={() => onRemove(result)}>Remove</a></td>
            </tr>
        )
    }
}
// Export the component
export default FavouriteView