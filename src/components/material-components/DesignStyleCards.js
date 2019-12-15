import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export class DesignStyleCards extends Component {
  render() {
    return (
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
                <Typography gutterBottom variant="h6" component="h2">
                  Luxury
                </Typography>
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
                <Typography gutterBottom variant="h6" component="h2">
                  Minimalism
                </Typography>
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
                <Typography gutterBottom variant="h6" component="h2">
                  Scandinavian
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    )
  }
}

export default DesignStyleCards
