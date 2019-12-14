import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  palette: {
    type: 'dark',
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    house: false,
    office: false,
    restaurant: false,
    appartament: false,
    store: false,
    another: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { house, office, restaurant, appartament, store, another } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={house} onChange={handleChange('house')} value="house" />}
            label="House"
          />
          <FormControlLabel
            control={<Checkbox checked={office} onChange={handleChange('office')} value="office" />}
            label="Office"
          />
          <FormControlLabel
            control={
              <Checkbox checked={restaurant} onChange={handleChange('restaurant')} value="restaurant" />
            }
            label="Restaurant"
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={appartament} onChange={handleChange('appartament')} value="appartament" />}
            label="Appartament"
          />
          <FormControlLabel
            control={<Checkbox checked={store} onChange={handleChange('store')} value="store" />}
            label="Store"
          />
          <FormControlLabel
            control={
              <Checkbox checked={another} onChange={handleChange('another')} value="another" />
            }
            label="Sometheing elese..."
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}