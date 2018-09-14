import React, {Component} from  'react'

class ResultView extends Component{

    state = {
        bookMarked: false
    }

    hasBookMarker = (item) => {
        
    }

    render(){

        const { index, result, onAdd } = this.props

        return(
            <tr key={index}>
                <td><a href={result.html_url}>{result.full_name}</a></td>
                <td>{result.language}</td>
                <td> - </td>
                <td><a href="#" onClick={() => onAdd(result)}>Add</a></td>
            </tr>
        )
    }
}

export default ResultView