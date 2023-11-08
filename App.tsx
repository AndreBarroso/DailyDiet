import Home from './src/screens/home';
import {ThemeProvider} from 'styled-components/native'
import theme from '@theme/index';
import { NewMeal } from '@screens/newMeal/intdex';
import { Extatistics } from './src/screens/Extatistics'


export default function App() {
  
  return (
    <ThemeProvider theme={theme} >
      <Extatistics />
    </ThemeProvider>
  );
}

