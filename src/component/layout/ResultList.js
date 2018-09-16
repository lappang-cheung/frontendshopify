import React, { Fragment, Component } from 'react'
import axios from 'axios'

import ResultView from './ResultView'

class ResultList extends Component {

    state = {
        version: []
    }

    getVersion = (item) => {
        let v = axios.get(item.tags_url)
            .then(response => {
                this.setState({
                    version: response.data
                })
                console.log(response.data)
            })
            .catch((error) => {
                if(error.response.status !== 200){
                    console.log('NO VERSION FOUND!!!')
                    this.setState({
                        version: []
                    })
                }
            })
        console.log(v)
    }

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