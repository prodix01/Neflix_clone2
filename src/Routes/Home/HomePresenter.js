import React from 'react';
import PropTypes from 'prop-types';
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import styled from "styled-components";

const Container = styled.div`
    padding: 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upComing, loading, error}) =>
    loading ? (
        <Loader/>
    ) : (
        <Container>
            {nowPlaying && nowPlaying.length > 0 && (
                <Section title="Now playing">
                    {nowPlaying.map(movie =>
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
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(movie =>
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
            {upComing && upComing.length > 0 && (
                <Section title="Upcoming">
                    {upComing.map(movie =>
                        <Poster
                            id={movie.id}
                            title={movie.title}
                            rating={movie.vote_average}
                            year={movie.release_date}
                        />
                    )}
                </Section>
            )}
        </Container>
    );

HomePresenter.propTypes = {
    nowPlaying: PropTypes.array,
    popular: PropTypes.array,
    upComing: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;