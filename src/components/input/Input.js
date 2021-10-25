import React from 'react';
import {SelectInput} from './styles';

const Input = ({value, keyboardType, maxLength}) =>  {
    return (
        <SelectInput value={value} keyboardType={keyboardType} maxLength={maxLength}/>

    );
}

export default Input;