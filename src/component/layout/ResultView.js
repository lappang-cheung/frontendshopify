import React, {Component} from  'react'
import axios from 'axios'

class ResultView extends Component{

    state = {
        version: '-'
    }

    getVersion = async (item) => {

        const result = await axios.get(item.tags_url)
			
		try{
            if(result){
                this.setState({
                    version: result.data[0].name
                })
            }
        }catch(e){
            // Do nothing
        }

    }

    render(){

        const { index, result, onAdd} = this.props
        {this.getVersion(result)}

        return(
            <tr key={index}>
                <td><a href={result.html_url}>{result.full_name}</a></td>
                <td>{result.language}</td>
                
                <td>{this.state.version} </td>
                <td>
                    <a href="#" 
                        onClick={() => onAdd(result)}
                    >
                        {this.props.favList.find(item => item.full_name === result.full_name) !== undefined ? ' ' : 'Add'}
                    </a>
                </td>
            </tr>
        )
    }
}

export default ResultView