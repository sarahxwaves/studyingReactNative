import React from 'react';
import { HeaderContainer, TextHeader } from './styles';

const Header = props => {

    return (
        <HeaderContainer>
            <TextHeader>{props.title}</TextHeader>

        </HeaderContainer>
    
    );
};


export default Header;
