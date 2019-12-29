import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function CheckboxesGroup({ handleChange} ) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange('propertyType')} value="house" />}
            label="House"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange('propertyType')} value="office" />}
            label="Office"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleChange('propertyType')} value="restaurant" />
            }
            label="Restaurant"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox onChange={handleChange('propertyType')} value="appartament" />}
            label="Appartament"
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange('propertyType')} value="store" />}
            label="Store"
          />
          <FormControlLabel
            control={
              <Checkbox onChange={handleChange('propertyType')} value="another" />
            }
            label="Sometheing elese..."
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}