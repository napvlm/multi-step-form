import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Radio, FormControlLabel, FormControl, RadioGroup } from '@material-ui/core';


export default function DesignStyleCards() {
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
        <Grid container spacing={3} style={{padding: '3%'}}>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Luxury Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1507452786732-f2dc0a2e7b7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1013&q=80"
                  title="Luxury Interior"
                />
                <CardContent>
                <FormControlLabel
                  value="luxury"
                  control={<Radio color="primary" />}
                  label="Luxury"
                  labelPlacement="end"
                />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Minimalistic Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                  title="Minimalistic Interior"
                />
                <CardContent>
                  <FormControlLabel
                    value="minimal"
                    control={<Radio color="primary" />}
                    label="Minimal"
                    labelPlacement="end"
                  />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Scandinavian Interior"
                  height="140"
                  image="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  title="Scandinavian Interior"
                />
                <CardContent>
                <FormControlLabel
                  value="scandinavian"
                  control={<Radio color="primary" />}
                  label="Scandinavian"
                  labelPlacement="end"
                />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </RadioGroup>
    </FormControl>
  )
}
