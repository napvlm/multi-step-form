import React from 'react';
import './App.css';

import Container from '@material-ui/core/Container';
import MainForm from './components/MainForm';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearDeterminate from './components/material-components/progressBar';

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

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
  const [theme, toggleDarkMode] = useDarkMode();

  const themeConfig = createMuiTheme(theme);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

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
          <Typography variant="body1" style={{padding: '10px 20px'}}>
            Calculate the costs of your design project
          </Typography>
          <Divider />
          <MainForm />
          <LinearDeterminate />
        </Paper>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
