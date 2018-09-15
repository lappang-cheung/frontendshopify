import React, {Component} from  'react'

class ResultView extends Component{

    state = {
        bookMarked: false
    }

    onBookMarker = (item) => {
        if(!(this.props.favList).indexOf(item) > 0){
            this.setState({
                bookMarked: true
            })
        }
    }

    render(){

        const { index, result, onAdd } = this.props

        return(
            <tr key={index}>
                <td><a href={result.html_url}>{result.full_name}</a></td>
                <td>{result.language}</td>
                <td> - </td>
                <td>
                    <a href="#" 
                        onClick={() =>{ onAdd(result), this.onBookMarker(result)}}
                        className={this.state.bookMarked ? 'disabled' : 'active'}
                    >
                        Add
                    </a>
                </td>
            </tr>
        )
    }
}

export default ResultView