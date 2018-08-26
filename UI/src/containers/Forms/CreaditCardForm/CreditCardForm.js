import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Field } from 'redux-form';
import { renderInput, renderTextArea } from '../../../util/renderFormFields';

class CreditCardForm extends Component {

  render() {
   
    return (
      <div className="uk-container">
        
                <Field  label="name on card" name="name" type="text" placeholder="card name" component={renderInput} />
                <Field label="some other info" name="cardNumber" component={renderInput} placeholder="card number" />
              
      </div>
    )
  }
}


export default CreditCardForm;