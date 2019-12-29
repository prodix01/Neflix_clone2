import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`

`;

const ImgContainer = styled.div`

`;

const Img = styled.div`

`;

const Rating = styled.span`

`;

const Title = styled.span`

`;

const Year = styled.span`

`;

const Poster = ({
    id,
    imageUrl,
    title,
    rating,
    year
}) => (
    <Container>
        <ImgContainer>
            <Img />
            <Rating>
                <span role="img" aria-label="rating">
                    ⭐️
                </span>
                {rating / 10}
            </Rating>
        </ImgContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
    </Container>
);

Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    title: PropTypes.string.isRequired,
    rating: PropTypes.number,
    year: PropTypes.string
};


export default Poster;