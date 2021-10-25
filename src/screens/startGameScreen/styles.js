import styled from 'styled-components';
import {colors} from '../../functions/colors';


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



export const SelectButtonArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
`;

export const ResetButton = styled.TouchableOpacity`
    background-color: ${colors.purple};
    height: 25px;
    justify-content: center;
    align-items: center;
    padding: 2px;
    margin-right: 40px;
    width: 90px;
    height: 30px;
    border-radius:2px;

`;

export const ResetButtonText = styled.Text`
    margin-left: 5px;
    margin-right: 5px;
    color: white;
`;
export const ConfirmButton = styled.TouchableOpacity`
    background-color: ${colors.pink};
    height: 25px;
    justify-content: center;
    align-items: center;
    width: 90px;
    height: 30px;
    border-radius:2px;

`;
export const ConfirmButtonText = styled.Text`
    margin-left: 5px;
    margin-right: 5px;
    color: white;

`;



