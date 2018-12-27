import { reducer as formReducer, reduxForm } from 'redux-form'
import {connect} from 'react-redux';

import SearchForm from '../components/SearchForm';
import {search} from '../actions/searchAPIForEvents';
import {validate} from '../utils/validationsSearchForm';

const _mapStateToProps = () => ({});

const _mapDispatchToProps = {
    onSubmit: search,
    onLoad: search
};

const ReduxSearchForm = reduxForm ({
    form: 'search',
    validate
})(SearchForm);

const ConnectedSearchForm = connect(
   _mapStateToProps,
   _mapDispatchToProps,
)(ReduxSearchForm);

export default ConnectedSearchForm;
