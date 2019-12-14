import React from 'react';
import './App.css';
import Entry from './components/Entry.js'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const themeObject = {
  palette: {
    type: 'dark',
    background: {
      dark: '#212121',
      light: '#f4f4f4'
    }
  }
}

const useDarkMode = () => {
  const [theme, setTheme] = React.useState(themeObject);

  const { palette: { type } } = theme;
  const toggleDarkMode = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === 'dark' ? 'light' : 'dark'
      }
    }
    setTheme(updatedTheme);
  }
  
  return [theme, toggleDarkMode];
}


function App() {
  // Making the dark/light mode toggle
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    entry: false
  });

  const beginQuiz = () => {
    setState({ ...state, entry: true})
  }

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const entry = state.entry;
  
  switch(entry) {
    case false:
      return (
        <MuiThemeProvider theme={themeConfig}>
          <CssBaseline/>
          <Container maxWidth="md">
            <AppBar position="fixed" style={{ padding: '10px'}}>
              <FormControlLabel
                control={
                  <Switch onClick={toggleDarkMode} checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                }
                label="Toggle light/dark theme"
              />
            </AppBar>
            <Paper style={{ marginTop: '10%'}}>
            <Button variant="contained" color="primary" style={{margin: '20px 10px'}} onClick={beginQuiz}>
              Begin quiz
            </Button>
            </Paper>
          </Container>
        </MuiThemeProvider>
      )

    case true:
      return (
        <MuiThemeProvider theme={themeConfig}>
          <CssBaseline/>
          <Container maxWidth="md">
            <AppBar position="fixed" style={{ padding: '10px'}}>
              <FormControlLabel
                control={
                  <Switch onClick={toggleDarkMode} checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
                }
                label="Toggle light/dark theme"
              />
            </AppBar>
            <Paper style={{ marginTop: '10%'}}>
              <Entry />
            </Paper>
          </Container>
        </MuiThemeProvider>
      )

      default:
  }
}

export default App;
