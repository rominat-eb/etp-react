import {connect} from 'react-redux';

import Stepper from '../components/Stepper';
import {
    add,
    subtract,
    reset,
} from '../actions/stepper';


//values from state
const _mapStateToProps = (state) => ({
   number: state.number,
});

//actions
const _mapDispatchToProps = {
   add,
   subtract,
   reset,
};

export default connect(
   _mapStateToProps,
   _mapDispatchToProps,
)(Stepper);
