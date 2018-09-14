import React, { Fragment } from 'react'

import ResultView from './ResultView'

const ResultList = (props) => {

    const { resultList, onAdd } = props

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
                    <ResultView 
                        key={index}
                        index={index}
                        result={result}
                        onAdd={onAdd}
                    />
                    // <tr key={index}>
                    //     <td>{result.full_name}</td>
                    //     <td>{result.language}</td>
                    //     <td>-</td>
                    //     <td><a href="#" onClick={() => onAdd(result)}>Add</a></td>
                    // </tr>
                    )
                }
                </tbody>
            </table>
        </Fragment>
    )
}

export default ResultList 