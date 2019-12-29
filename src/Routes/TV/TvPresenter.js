import React from "react";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import styled from "styled-components";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 20px;
`;

const TvPresenter = ({ popular, topRate, airingToday, loading, error}) =>

    loading ? (
        <Loader/>
    ) : (
        <Container>
            {popular && popular.length > 0 && (
                <Section title="Popular">
                    {popular.map(tv =>
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

            {topRate && topRate.length > 0 && (
                <Section title="Top_Rate">
                    {topRate.map(tv =>
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

            {airingToday && airingToday.length > 0 && (
                <Section title="Airing_Today">
                    {airingToday.map(tv =>
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
        </Container>
    );

TvPresenter.propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string,
    popular: PropTypes.array,
    airingToday: PropTypes.array,
    topRate: PropTypes.array
};

export default  TvPresenter;