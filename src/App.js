import React from 'react';
import './App.css';

import Entry from './components/Entry.js'

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


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

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  // Entry button 
  const beginQuiz = () => {
    setState({ ...state, entry: true})
  }

  const entry = state.entry;

  switch(entry) {
    case false:
      return (
        <MuiThemeProvider theme={themeConfig}>
        <FormControlLabel className="switch"
          control={
            <Switch onClick={toggleDarkMode} checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
          }
          label="Toggle light/dark theme"
        />
          <CssBaseline/>
          <Container maxWidth="md">
            <Paper>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Paper className="column-image" />
                </Grid>
                <Grid item xs={6} style={{padding: '5%'}}>
                  <Typography variant="h5" style={{marginBottom: '20px'}}>
                    Find out the cost of your interior design project
                  </Typography>
                  <Typography variant="body2">
                    Take the survey and get a personal discount and studio work catalog
                  </Typography>
                  <Button variant="contained" color="primary" style={{marginTop: '40px'}} onClick={beginQuiz}>
                    Begin the survey
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Container>
        </MuiThemeProvider>
      )

    case true:
      return (
        <MuiThemeProvider theme={themeConfig}>
        <FormControlLabel className="switch"
          control={
            <Switch onClick={toggleDarkMode} checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
          }
          label="Toggle light/dark theme"
        />
          <CssBaseline/>
          <Container maxWidth="md">
            <Paper className="fade">
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Entry />
              </Grid>
              <Grid item xs={3}>
                <Avatar alt="Remy Sharp" src="https://res.cloudinary.com/hgwipn3sa/image/upload/w_70,h_70,c_fill,g_face,dpr_1.0,f_auto/e6lzsb63hzgy3tcopu0u.jpg" className="bigAvatar" />
              </Grid>
            </Grid>
            </Paper>
          </Container>
        </MuiThemeProvider>
      )

      default:
  }
}

export default App;
