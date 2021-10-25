import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Card from '../../components/card/Card';
import Input from '../../components/input/Input';

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

  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = inputText => {
      setEnteredValue(inputText.replace(/[^0-9\\.]+/g, ''));
  };


    return(
        <Container>
            <Title>Start a new game!</Title>
            <SelectArea>
                <Card>
                <SelectText>Select a number</SelectText>
                <Input 
                value={enteredValue}
                maxLength={2}
                keyboardType="number-pad"
                onChangeText={numberInputHandler}
                />

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

StartGameScreen.PropTypes = {

}
export default StartGameScreen;