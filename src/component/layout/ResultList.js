// Require components
import React from 'react'
// Custom component
import ResultView from './ResultView'

/**
 * @COMP - ResultList component
 * @DESC - Render a list of views for each individual repo from user
 */
const ResultList = () =>{

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
            <tbody>
            {
                <ResultView />
            }
            </tbody>
        </table>
    )
}
// Export the component
export default ResultList 