import React from 'react';
import {
    Container,
    Title, 
    SelectArea,
    SelectText,
    SelectInput,
    SelectButtonArea,
    ResetButton,
    ResetButtonText,
    ConfirmButton,
    ConfirmButtonText,
    InputContainer
} from './styles';

const StartGameScreen = props => {
    return(
        <Container>
            <Title>Start a new game!</Title>
            <SelectArea>
                <InputContainer>
                <SelectText>Select a number</SelectText>
                <SelectInput placeholder="Select a number"/>
                </InputContainer>

            <SelectButtonArea>
                <ResetButton onPress={() => {}}>
                    <ResetButtonText>RESET</ResetButtonText>
                </ResetButton>
                <ConfirmButton OnPress={() => {}}>
                    <ConfirmButtonText>CONFIRM</ConfirmButtonText>
                </ConfirmButton>
            </SelectButtonArea>
            </SelectArea>

        </Container>

    );
};
export default StartGameScreen;