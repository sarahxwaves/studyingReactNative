import React from "react";
import {CardContainer} from './styles';

const Card = props => {
    return (
    <CardContainer>{props.children}</CardContainer>
    );

};

export default Card;