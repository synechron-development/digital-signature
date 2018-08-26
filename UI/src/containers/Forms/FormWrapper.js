import React, { Component } from 'react';
import NewAccountForm from './NewAccountForm/NewAccountForm';
import CreditCardForm from './CreaditCardForm/CreditCardForm';

//////////
// This is a HOC to wrap forms by passing string and returning react component;
///////
class FormWrapper extends Component {
    components = {
        NewAccountForm,
        CreditCardForm
    };
    render() {
       const TagName = this.components[this.props.tag];
       return <TagName />
    }
}
export default FormWrapper;