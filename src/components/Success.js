import React, { Component } from 'react';
import { TextField, Typography, Button } from '@material-ui/core/';

export class Sucess extends Component {
  render() {
    return (
      <div className='fade'>
        <Typography variant="h5" style={{marginBottom: '20px'}}>
          Good job! 
        </Typography>
        <Typography variant="body2">
          As a bonus for taking the survey, we will send you a discount code and studio catalog as a bonus. <br/>
          Leave your e-mail address to get them.
        </Typography>
        <form noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Your e-mail" variant="outlined" type="email" required={true} style={{marginTop: '20px'}}/>
          <br/>
          <Button type="submit" variant="contained" color="primary" style={{marginTop: '20px'}}>
            Get bonus
          </Button>
        </form>
      </div>
    )
  }
}

export default Sucess
