import React from 'react'
import { Link } from "react-router-dom";
import TaskTile from '../TaskTile/TaskTile';
import _ from 'lodash';
import './Basket.css';

export default ({ tasks, handleChange, documents }) => {
    const listSelectedTasks = _.map(_.filter(tasks, (o) => { return o.selected }), (t,inx) => {
        return (
            <li key={inx}>{t.title}</li>
        )
    });

    return (
            
        <div className="uk-padding basket uk-width-extend uk-position-bottom-center">

            <ul data-uk-accordion>
                <li>
                    <a className="uk-accordion-title" href="#">View my Selected Services <span className="uk-badge">{_.filter(tasks, (o) => { return o.selected }).length}</span></a>
                    <div className="uk-accordion-content">
                        <dl className="uk-description-list">
                            <dt>You Selected</dt>
                            <dd>
                                {listSelectedTasks}
                            </dd>
                            <dt>Documents you will need</dt>
                            <dd>{
                                documents.join(',')
                            }</dd></dl>
                    </div>
                </li>
            </ul>
            <Link to="/form" className="uk-button uk-button-default">Complete Service</Link>
            </div>
      
    )
}
