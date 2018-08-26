import docs from '../../constants/documentNames';

const initialState = {
    tasks: {
      CreditCardForm: {
        selected: false,
        title: 'New Credit Card Form',
        desc: 'apply for new credit card',
        documents: [docs.salary_letter,docs.employmnet_contract],
        exports: [
          {name: 'name', label: 'Name On Card'},
          {name: 'cardNumber', label: 'Card Number'}
        ]
      },
      NewAccountForm: {
        selected: true,
        title: 'New Account Form',
        dec: 'open new bank account',
        documents: [docs.salary_letter,docs.national_id],
        exports: [
          {name: 'name', label: 'Account Name'},
          {name: 'accountNumber', label: 'Account Number'}
        ]
      },
      
    },
    documents:[],
    exports:[]
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'UPDATE_TASKS':
    return { ...state, tasks: action.payload }
  case 'UPDATE_DOCUMENTS':
    return { ...state, documents: action.payload }
    case 'UPDATE_EXPORTS':
    return { ...state, exports: action.payload }

  default:
    return state
  }
}
