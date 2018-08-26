import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { renderInput, renderTextArea } from '../../../util/renderFormFields';

class NewAccountForm extends Component {


  render() {
    
    return (
      <div className="uk-container">
        
                <Field label="account name" name="name" type="text" placeholder="Profile Name" component={renderInput} />
                <Field label="account number" name="accountNumber" component={renderTextArea} placeholder="what do you want people to be honest about" />
                <Field label="account name" name="name2" type="text" placeholder="Profile Name" component={renderInput} />
                <Field label="account name" name="name232" type="text" placeholder="Profile Name" component={renderInput} />
          
      </div>
    )
  }
}


export default NewAccountForm