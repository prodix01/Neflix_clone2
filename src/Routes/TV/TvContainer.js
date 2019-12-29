import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";

class TvContainer extends Component {

    state = {
        popular: null,
        airingToday: null,
        topRate: null,
        error: null,
        loading: true
    };
    render() {
        const {popular, airingToday, topRate, error, loading} = this.state;

        return (
            <TvPresenter
                loading={loading}
                popular={popular}
                airingToday={airingToday}
                topRate={topRate}
                error={error}
            />
        );
    }
}

export default TvContainer;

