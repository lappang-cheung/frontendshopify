import React, {Component} from  'react'

class ResultView extends Component{

    render(){

        const { index, result, onAdd} = this.props

        return(
            <tr key={index}>
                <td><a href={result.html_url}>{result.full_name}</a></td>
                <td>{result.language}</td>
                <td> - </td>
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