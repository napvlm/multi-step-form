import React from 'react';
import './App.css';

import { MuiThemeProvider, createMuiTheme, Grid, Container, Switch, FormControlLabel, CssBaseline, Paper, Button, Typography, Divider, Avatar } from "@material-ui/core/";

import MainForm from './components/MainForm';
import LinearDeterminate from './components/material-components/ProgressBar';

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
    entry: false,
    // phrase: ['Here it is!', 'Keep it up!', 'You almost done!']
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  // Entry button 
  const beginQuiz = () => {
    setState({ ...state, entry: true})
  }

  const entry = state.entry;

  // Progrgess bar going back and forth (Saving state here while passing props to child components and change the state of {complete} by easy function inside MainForm.js)
  const [complete, setCompleted] = React.useState(0);

  React.useEffect(() => {
    setCompleted(oldCompleted => {
      if (oldCompleted >= 100) {
        return 0;
      }
      return complete;
    });
  }, [complete]);

  

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
              <Typography variant="body1" style={{padding: '10px 20px'}}>
                Calculate the costs of your design project
                </Typography>
                <Divider />
                <MainForm complete={complete} setCompleted={setCompleted} />
                <LinearDeterminate complete={complete} setCompleted={setCompleted} />
              </Grid>
              <Grid item xs={3}>
                <div style={{display: 'flex'}}>
                  <Avatar alt="Johny Simpson - Lead designer" src="https://randomuser.me/api/portraits/men/22.jpg" className="bigAvatar" />
                  <div style={{marginLeft: '10px'}}>
                    <Typography variant="body1">
                      John Simpson
                    </Typography>
                    <Typography variant="body2">
                      <i>- Lead Designer</i>
                    </Typography>
                  </div>
                </div>
                <Paper style={{padding: '5%'}}>
                  <Typography variant="body2" component="p">
                    <small>
                    Some text
                    </small>
                  </Typography>
                </Paper>
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
