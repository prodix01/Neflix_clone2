import React, {Component} from 'react';
import HomePresenter from "./HomePresenter";

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



    render() {

        const {nowPlaying, upComing, popular, error, loading} = this.state;

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