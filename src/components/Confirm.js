import React, { Component } from 'react';

import { Typography, Button } from '@material-ui/core';

export class Confirm extends Component {
  render() {
    const { propertyType, areaSpace, designStyle } = this.props;

    return (
      <div>
        <div className="fade">
          <Typography variant="h5" style={{padding: '10px 20px'}}>
            Check your answers and confrim or go back and change
          </Typography>
          <Typography variant="body" style={{padding: '10px 20px'}}>

          </Typography>
        </div>
        <div style={{margin: '10px 20px'}}>
          <Button variant="outlined" onClick={this.props.previousStep}>
            Go back
          </Button>
          <Button variant="contained" color="primary" style={{marginLeft: '20px'}} onClick={this.props.nextStep}>
            Confirm
          </Button>
        </div>
      </div>
    )
  }
}

export default Confirm
