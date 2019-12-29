import React from "react";
import PropTypes from "prop-types";


const TvPresenter = ({ popular, topRate, airingToday, loading, error}) =>
    <h1>{popular}</h1>;

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    topRate: PropTypes.array
};

export default  TvPresenter;