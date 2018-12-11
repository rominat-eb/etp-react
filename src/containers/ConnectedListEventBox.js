import {connect} from 'react-redux';

import ListEventBox from '../components/ListEventBox';

const _mapStateToProps = (state) => ({
   events: state.events,
});

const _mapDispatchToProps = {
};

export default connect(
   _mapStateToProps,
   _mapDispatchToProps,
)(ListEventBox);
