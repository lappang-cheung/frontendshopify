import React, {Component} from  'react'
import axios from 'axios'

/**
 * @COMP - ResultView component
 * @DESC - Render the view of the individual results from repo
 */
class ResultView extends Component{

    // For only getting the version
    state = {
        version: '-'
    }
    
    // Needed for async callback
    _isMounted = false

    // Async call to get the latest version of the repo
    getVersion = async (item) => {
			
		try{

            const result = await axios.get(item.tags_url)

            if(this._isMounted && result){
                    this.setState({
                        version: result.data[0].name
                    })
                
            }
        }catch(e){
            // Do nothing
        }
    }

    componentDidMount(){
        this._isMounted = true
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    render(){

        const { index, result, onAdd} = this.props
        // Get the version of the repo for rendering
        this.getVersion(result)
        // Render all the individual view information
        return(
            <tr key={index}>
                <td><a href={result.html_url} className="clean">{result.full_name}</a></td>
                <td>{result.language}</td>
                
                <td>{this.state.version} </td>
                <td>
                    <a href="# "
                        className="bookmark"
                        onClick={() => onAdd(result)}
                    >
                        {this.props.favList.find(item => item.full_name === result.full_name) !== undefined ? ' ' : 'Add'}
                    </a>
                </td>
            </tr>
        )
    }
}
// Export the component
export default ResultView