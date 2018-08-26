import React, { Component } from 'react'
import { updateTasks, updateDocuments } from './actions';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import TaskTile from '../../componenets/TaskTile/TaskTile';

import _ from 'lodash';
import Basket from '../../componenets/Basket/Basket';

import UIkit from "uikit";

class Dashboard extends Component {


  
  handleChange = (e) => {

    // Update Tasks
    let updatedTasks = { ...this.props.dashboard.tasks };
    updatedTasks[e.currentTarget.name].selected = e.currentTarget.checked;
    this.props.updateTasks(updatedTasks);

    // Update Documents
    let documents = [];
    for (let key in this.props.tasks) {
      let task = this.props.tasks[key];
      if (task.selected) {
        documents = [...documents, ...task.documents];
      }

    }
    this.props.updateDocuments(_.uniq(documents));

  }

  render() {

    const listTaskOptions = _.map(this.props.tasks, (task, label) => {
      return (
        <TaskTile key={label} label={label} task={task} handleChange={this.handleChange} />
      )
    }

  );
  
  

    return (
      <div className="uk-container">
        <h3 className="uk-card-title uk-margin-large-top">Tasks</h3>
        <form className="uk-form-horizontal uk-margin-large">
          <div className="uk-grid-small uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@l " data-uk-grid>
            {listTaskOptions}
          </div>
        </form>


{
  _.filter(this.props.tasks, (o) => { return o.selected }).length >0 &&
  <Basket handleChange={this.handleChange} tasks={this.props.tasks} documents={this.props.documents}/>
}
       
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
    dashboard: state.dashboard,
    tasks: state.dashboard.tasks,
    documents: state.dashboard.documents
  }
}

export default reduxForm({
  form: 'TasksForm',
})(connect(mapStateToProps, { updateTasks, updateDocuments })(Dashboard));

