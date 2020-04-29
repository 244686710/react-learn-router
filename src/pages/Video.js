import React from 'react'

import {
    Route, Link, BrowserRouter as Router
} from 'react-router-dom'

import Reactpage from './video/ReactPage'
import Vue from './video/Vue'
import Flutter from './video/Flutter'

function Video() {
    return (
        <Router>
            <div>
                <div className="topNav">
                    <ul>
                        <li>
                            <Link to="/video/reactpage/">React 教程</Link>
                        </li>
                        <li>
                            <Link to="/video/flutter/">Flutter 教程</Link>
                        </li>
                        <li>
                            <Link to="/video/vue/">Vue 教程</Link>
                        </li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div>
                        <h3>视频教程</h3>
                    </div>
                    <Route path="/video/reactpage" exact component={Reactpage}  />
                    <Route path="/video/flutter" component={Flutter} />
                    <Route path="/video/vue" component={Vue} />
                </div>
            </div>
        </Router>
    )
}

export default Video