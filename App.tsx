import React from 'react';
import { theme } from './App.style';
import {Provider as PaperProvider, TextInput} from 'react-native-paper';
import {LoginScreen} from './app/screens/login/login.screen'
import { RegisterScreen } from './app/screens/register/register.screen';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RegisterScreen />
    </PaperProvider>
  )
}

export default App