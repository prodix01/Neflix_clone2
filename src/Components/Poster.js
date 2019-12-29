import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    font-size: 12px;
`;

const Img = styled.div`
    background-image: url(${props => props.bgUrl});
    height: 180px;
    background-size: cover;
    border-radius: 4px;
    background-position: center;
    transition: opacity 0.1s linear;
`;

const Rating = styled.span`
    bottom: 10px;
    right: 10px;
    position: absolute;
    opacity: 0;
    transition: opacity 0.1s linear;
`;

const ImgContainer = styled.div`
    margin-bottom: 7px;
    position: relative;
    &:hover {
      ${Img} {
        opacity: 0.3;
      }
      ${Rating} {
        opacity: 1;
      }
    }
`;

const Title = styled.span`
    display: block;
    margin-bottom: 3px;
`;

const Year = styled.span`
    font-size: 10px;
    color: rgba(255, 255, 255, 0.5);
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
            <Img bgUrl={
                imageUrl
                ? `https://image.tmdb.org/t/p/w300${imageUrl}`
                : require("./empty_image.png")
            }
            />
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