import React, {Component} from 'react';
import SearchPresenter from "./SearchPresenter";
import {tvApi, moviesApi} from "../../api";
class SearchContainer extends Component {

    state = {
        movieResults: null,
        tvResults: null,
        error: null,
        loading: false,
        searchTerm: '',
    };

    handleSubmit = () => {
        const {searchTerm} = this.state;
        if (searchTerm !== null) {
            // 검색실행
            this.searchByTerm();

        }
    };

    //search by Term
    searchByTerm = async () => {

        const {searchTerm} = this.state;

        this.setState({loading: true});

        try {
            const {
                data: { results: movieResults}
            } = await moviesApi.search(searchTerm);
            const {
                data: {results: tvResults}
            } = await tvApi.search(searchTerm);
            this.setState({tvResults, movieResults})
        }
        catch {
            this.setState({error: "No Search Results"});
        }
        finally {
            this.setState({loading: false});
        }
    };

    updateTerm = event => {
        const {
            target: {value}
        } = event;

        this.setState({
            searchTerm: value
        });
    };

    render() {
        const {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm
        } = this.state;


        console.log(movieResults);

        return (
            <SearchPresenter
                loading={loading}
                handleSubmit={this.handleSubmit}
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                error={error}
                updateTerm={this.updateTerm}
            />
        );
    }
}

export default SearchContainer;