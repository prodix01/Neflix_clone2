import React, {Component} from 'react';
import TvPresenter from "./TvPresenter";
import {tvApi} from  "../../api"


class TvContainer extends Component {

    state = {
        popular: null,
        airingToday: null,
        topRate: null,
        error: null,
        loading: true
    };

    // 라이프사이클
    async componentDidMount() {
        try {
            const {
                data: { results: topRate }
            } = await tvApi.topRate();

            const {
                data: { results: airingToday }
            } = await tvApi.airingToday();

            const {
                data: { results: popular }
            } = await tvApi.popular();


            this.setState({
                topRate,
                airingToday,
                popular
            });

        }
        catch {
            this.setState({
                error: "Can't Find Tv Show"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        const {popular, airingToday, topRate, error, loading} = this.state;
        console.log("popular data are ", popular);

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

