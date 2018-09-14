import React, { Fragment } from 'react'

import ResultView from './ResultView'

const ResultList = (props) => {

    const { resultList } = props

    return(
        <Fragment>
            <p>Result List</p>
            <ul>
                {
                    resultList.map((result, index) => 
                        <ResultView
                            key={index}
                            index={index}
                            result={result}
                        />
                    )
                }
            </ul>
        </Fragment>
    )
}

export default ResultList 