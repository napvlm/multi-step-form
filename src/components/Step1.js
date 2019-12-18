import React, { Component } from 'react';
import { Typography, Button } from '@material-ui/core';

import CheckboxesGroup from './material-components/CheckboxesGroup';

export class Step1 extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }
  
  render() {
    // const { values } = this.props;

    return (
      <div className="fade"> 
        <Typography variant="h5" style={{padding: '10px 20px'}}>
          Choose the type of property:
        </Typography>
        <CheckboxesGroup/>
        <Button variant="contained" color="primary" style={{margin: '10px 20px'}} onClick={this.continue}>
          Next
        </Button>
      </div>
    )
  }
}

export default Step1
