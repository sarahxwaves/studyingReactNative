import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    align-items: center;

`;

export const Title = styled.Text`
    font-size: 20px;
    


`;

export const SelectArea = styled.View`
 padding: 20px;
`;

export const InputContainer = styled.View`
    align-items: center;
    shadow-color: #000;
    shadow-radius: 2.22px;
    shadow-opacity: 0.22;
    elevation: 2;
    background-color: #fff;
    width: 300px;
    max-width: 280px;
    padding: 20px;
    border-radius: 10px;
    

`;

export const SelectText =styled.Text``;

export const SelectInput = styled.TextInput`

`;

export const SelectButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ResetButton = styled.TouchableOpacity`
    background-color: #F08080;
    height: 25px;
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: 40px;

`;

export const ResetButtonText = styled.Text`
    margin-left: 5px;
    margin-right: 5px;

`;
export const ConfirmButton = styled.TouchableOpacity`
    background-color: #8FBC8F;
    height: 25px;
    justify-content: center;
    align-items: center;

`;
export const ConfirmButtonText = styled.Text`
    margin-left: 5px;
    margin-right: 5px;

`;



