// Require components
import React, {Component} from 'react'
// Custom component
import ResultListItem from './ResultListItem'
// import ResultView from './ResultView'

import axios from 'axios';
import {MyContext} from '../contextApi/MyProvider';

const noop = () => {};
const VOID = Object.freeze({});

/**
 * @COMP - ResultList component
 * @DESC - Render a list of views for each individual repo from user
 */
// const ResultList = () =>{
class ResultList extends Component {


    state = {
        items: null,
    };

    renderItems(context) {
        const items = context.state.resultItems;
        return items ? <tbody>{
            items.map(item => (
                item.context = context,
                ResultListItem(item)
            ))
        }</tbody> : <tbody></tbody>;
    }

    render() {

        // Table element and iterate through the resultList
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Language</th>
                        <th scope="col">Latest Tag</th>        
                    </tr>
                </thead>
                {
                    <MyContext.Consumer>{
                        context => this.renderItems(context)
                    }
                    </MyContext.Consumer>
                }
            </table>
        )
    }
}
// Export the component
export default ResultList 

// const ResultListItem = ({result, version, index, favorite}) => (
//     <tr key={index}>
//     <td><a href={result.html_url} className="linkUrl">{result.full_name}</a></td>
//     <td>{result.language}</td>
//     <td>{version} </td>
//     <td>
//             <a href="# "
//                 className="bookmark"
//                 onClick={() => context.onAdd(result)}
//             >
//                 {favorite}
//             </a>
//         </td>
//     </tr>
// );
