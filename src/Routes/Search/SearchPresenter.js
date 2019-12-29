import React,{Component} from "react";
import PropTypes from "prop-types"
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";




class SearchPresenter extends Component {

    render() {

        let {
            movieResults,
            tvResults,
            error,
            loading,
            searchTerm,
            handleSubmit,
            updateTerm
        } = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Search Movies or Tv Shows..."
                        vaule={searchTerm}
                        onChange={updateTerm}
                    />
                </form>
                {
                    loading ? (
                        <Loader/>
                    ) : (
                        <>
                            {movieResults && movieResults.length > 0 && (
                                <Section title="Movie Results">
                                    {movieResults.map(movie =>
                                        <Poster
                                            id={movie.id}
                                            title={movie.title}
                                            rating={movie.vote_average}
                                            year={movie.release_date}
                                            imageUrl={movie.poster_path}
                                        />
                                    )}
                                </Section>
                            )}
                            {tvResults && tvResults.length > 0 && (
                                <Section title="TV Results">
                                    {tvResults.map(tv =>
                                        <Poster
                                            id={tv.id}
                                            title={tv.name}
                                            rating={tv.vote_average}
                                            year={tv.first_air_date}
                                            imageUrl={tv.poster_path}
                                        />
                                    )}
                                </Section>
                            )}
                        </>


                    )

                }
            </div>
        );
    }
}



SearchPresenter.propTypes = {
    movieResults : PropTypes.array,
    tvResults: PropTypes.array,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    searchTerm: PropTypes.string,
    handleSubmit: PropTypes.func.isRequired,
    updateTerm: PropTypes.func.isRequired
};



export default SearchPresenter;