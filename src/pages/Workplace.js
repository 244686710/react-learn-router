import React from 'react'

import {
    Route, Link, BrowserRouter as Router
} from 'react-router-dom'

import Money from './workplace/Money'
import GetUp from './workplace/GetUp'

function Video() {
    return (
        <Router>
            <div>
                <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/workplace/money">加薪密集</Link>
                        </li>
                        <li>
                            <Link to="/workplace/getup">早起攻略</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div>
                        <h3>视频教程</h3>
                    </div>
                    <Route path="/workplace/money" exact component={Money}  />
                    <Route path="/workplace/getup" exact component={GetUp}  />
                </div>
            </div>
        </Router>
    )
}

export default Video