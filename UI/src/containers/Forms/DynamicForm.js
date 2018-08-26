import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from "lodash";
import { renderInput, renderTextArea } from '../../util/renderFormFields';
import FormWrapper from './FormWrapper';
import SignPad from '../../componenets/SignPad/SignPad';

class DynamicForm extends Component {

  constructor() {
    super();
  }
  onSubmit(values) {
    console.log(values);
  }



  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
   
    const listTasks =  _.map(this.props.tasks, (task,label) => {
      if(task.selected){
        return(<div key={label} className="uk-card uk-card-default uk-card-body"><h3 className="uk-card-title">{task.title}</h3><FormWrapper tag={label} /></div>)}
      }
      
    );
    
    return (

      
      <div className="uk-container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="uk-form-horizontal uk-margin-large">
        {listTasks}
        {this.props.fields && <SignPad/>}
         
        </form> 
      </div>
    )
  }
}

function validate(values) {
  const errors = {}

  if (!values.name) {
    errors.name = "Required";
  }

  return errors
}


function mapStateToProps(state) {
  return {
    tasks: state.dashboard.tasks,
    fields: state.form.DynamicForm.registeredFields
  }
}

export default reduxForm({
  //enableReinitialize: true,
  form: 'DynamicForm',
  validate
})(connect(mapStateToProps)(DynamicForm));