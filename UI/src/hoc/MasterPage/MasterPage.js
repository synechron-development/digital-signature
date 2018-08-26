import React from 'react';
import { connect } from 'react-redux';
import PageHeader from '../../componenets/PageHeader/PageHeader';
import PageFooter from '../../componenets/PageFooter/PageFooter';


////////////////////////////////////////////////////////////////////////////////
// HOC to add layout to the page
////////////////////////////////////////////////////////////////////////////
export default (Component) => {
  class MasterPage extends React.Component {


    render() {


      return (
        <React.Fragment>
          <PageHeader />
          <Component {...this.props} />
        </React.Fragment>
      )


    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.session.isAuthenticated
    }
  }

  return connect(mapStateToProps)(MasterPage);
}

