import {connect } from 'react-redux';
import login from '..components/login';
import addData from '../actions/index';

const mapStateToProps = state =>({
    todos :state.id,
})

const mapDispatchToProps = dispatch =>({
  addData : () => dispatch(addData())
})

export default connect(mapStateToProps,mapDispatchToProps)(login)