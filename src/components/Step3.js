import React, { Component } from 'react';
import DesignStyleCards from './material-components/DesignStyleCards'

import { Typography, Button } from '@material-ui/core';

export class Step3 extends Component {
  
  render() {
    const { values, handleChange } = this.props;

    return (
      <div>
        <div className="fade">
          <Typography variant="h5">
            Which style of design do you prefer?
          </Typography>
          <DesignStyleCards values={values} handleChange={handleChange} />
        </div>
        <div style={{margin: '10px 20px'}}>
          <Button variant="outlined" onClick={this.props.previousStep}>
            Go back
          </Button>
          <Button variant="contained" color="primary" style={{marginLeft: '20px'}} onClick={this.props.nextStep}>
            Next
          </Button>
        </div>
      </div>
    )
  }
}

export default Step3
