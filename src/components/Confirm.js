import React, { Component } from 'react';

import { Typography, Button } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core/';

export class Confirm extends Component {
  render() {
    const {
      values: { propertyType, areaSpace, designStyle } 
    } = this.props;

    return (
      <div>
        <div className="fade">
          <Typography variant="h5">
            Check your answers and confrim or go back and change
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Type of property:" secondary={propertyType} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Your area space:" secondary={areaSpace + ' m²'} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Style of your future design:" secondary={designStyle} /> 
            </ListItem>
          </List>
        </div>
        <div style={{margin: '10px 20px'}}>
          <Button variant="outlined" onClick={this.props.previousStep}>
            Go back
          </Button>
          <Button variant="contained" color="primary" style={{marginLeft: '20px'}} onClick={this.props.nextStep}>
            Confirm & Send
          </Button>
        </div>
      </div>
    )
  }
}

export default Confirm
