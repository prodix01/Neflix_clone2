import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";


const TvPresenter = ({ popular, topRate, airingToday, loading, error}) =>

    loading ? (
        <Loader/>
    ) : (
        <h1>222</h1>
    );

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    topRate: PropTypes.array
};

export default  TvPresenter;