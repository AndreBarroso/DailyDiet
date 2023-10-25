import Home from './src/screens/home';
import {ThemeProvider} from 'styled-components'
import theme from '@theme/index';

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Home/>
    </ThemeProvider>
  );
}

