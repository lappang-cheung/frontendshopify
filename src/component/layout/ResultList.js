import React, { Fragment } from 'react'

import ResultView from './ResultView'

const ResultList = (props) => {

    const { resultList, onAdd, favList } = props

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

export default ResultList 