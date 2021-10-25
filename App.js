

import React from 'react';
import Header from "./src/components/header/Header";
import StartGameScreen from './src/screens/startGameScreen/StartGameScreen';

import {Container} from './styles';
export default function App(){

  return (
    <Container>
      <Header>
        
      </Header>
      <Header title={"Guess a Number"}/>
      <StartGameScreen/>
        
     

    </Container>
  );
};

export default App;

