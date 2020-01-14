import React from "react";
import { connect } from "react-redux";
import { setFilter } from "../actions";
import FilterPanel from "../components/FilterPanel";

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = dispatch => ({
  onClick: text => dispatch(setFilter(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);