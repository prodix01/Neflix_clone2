import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

import {moviesApi} from "../../api";

class HomeContainer extends Component {

    //상태값
    state = {
        nowPlaying: null,
        upComing: null,
        popular: null,
        error: null,
        loading: true
    };
    //함수
    //라이프 사이클
    async componentDidMount() {
        try {
            const {
                data: { results: nowPlaying }
            } = await moviesApi.nowPlaying();

            const {
                data: { results: upComing }
            } = await moviesApi.upComing();

            const {
                data: { results: popular }
            } = await moviesApi.popular();

            this.setState({
                nowPlaying,
                upComing,
                popular
            });

        }
        catch {
            this.setState({
                error: "Can't Find Movies imformation"
            });
        }
        finally {
            this.setState({
                loading: false
            });
        }
    }


    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;

        console.log(nowPlaying);

        return (
            <HomePresenter
                loading={loading}
                upComing={upComing}
                nowPlaying={nowPlaying}
                popular={popular}
                error={error}
            />
        );
    }
}

HomeContainer.propTypes = {};

export default HomeContainer;