import React from 'react';

import Card from '../../components/card/Card';
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
} from './styles';

const StartGameScreen = props => {
    return(
        <Container>
            <Title>Start a new game!</Title>
            <SelectArea>
                <Card>
                <SelectText>Select a number</SelectText>
                <SelectInput/>

            <SelectButtonArea>
                <ResetButton onPress={() => {}}>
                    <ResetButtonText>RESET</ResetButtonText>
                </ResetButton>
                <ConfirmButton OnPress={() => {}}>
                    <ConfirmButtonText>CONFIRM</ConfirmButtonText>
                </ConfirmButton>
            </SelectButtonArea>
                </Card>
            </SelectArea>

        </Container>

    );
};
export default StartGameScreen;