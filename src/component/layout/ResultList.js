import React, { Fragment, Component } from 'react'

import ResultView from './ResultView'

class ResultList extends Component {

    state = {
        bookmark: false
    }

    hasBookmark = (item) => {
        console.log(this.props.favList.find(result => result.full_name === item.full_name))
    }

    // const result = inventory.find( fruit => fruit.name === 'cherries' );

    render(){

        const { resultList, onAdd, favList} = this.props

        return(
            <Fragment>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Language</th>
                            <th scope="col">Latest Tag</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        resultList.map((result, index) => 
                            // <tr key={index}>
                            //     <td><a href={result.html_url}>{result.full_name}</a></td>
                            //     <td>{result.language}</td>
                            //     <td> - </td>
                            //     {this.hasBookmark(result)}
                            //     <td>
                            //         <a href="#" 
                            //             onClick={() => onAdd(result)}
                            //         >
                            //             {this.state.bookmark ? 'Remove' : 'Add'}
                            //         </a>
                            //     </td>
                            // </tr>
                            <ResultView
                                key={index}
                                index={index}
                                result={result}
                                favList={favList}
                                onAdd={onAdd}
                            />
                        )
                    }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

export default ResultList 