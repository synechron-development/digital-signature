import React from 'react'
import { renderToggleTile } from '../../util/renderFormFields';
import { Field } from 'redux-form';
import  './TaskTile.css';

export default ({label,task, handleChange  }) => {
  return (

    <div className="task-tile">
        <div className="uk-card uk-card-default uk-card-hover uk-card-body">
            <h3 className="uk-card-title">{task.title}</h3>
            <p>{task.desc } </p>
            <Field name={label} id={label} component={renderToggleTile} onChange={handleChange} checked={task.selected} />
        </div>
        
    </div>


  )
}
