import React, { Component } from 'react';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearDeterminate from './material-components/ProgressBar';
import MainForm from './MainForm';

export class Entry extends Component {
  render() {
    return (
      <div>
        <Typography variant="body1" style={{padding: '10px 20px'}}>
         Calculate the costs of your design project
        </Typography>
        <Divider />
        <MainForm />
        <LinearDeterminate />
      </div>
    )
  }
}

export default Entry
