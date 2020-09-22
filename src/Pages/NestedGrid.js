import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from "react-player"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: "300px"
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow1() {
    return (
      <React.Fragment>
        <Grid item xs={6} >
          <Paper className={classes.paper}>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=wQ274umjhFY"
              wrapper="True"
            />
          </Paper>
        </Grid>
        <Grid item xs={3}>

          <Paper className={classes.paper}>
            <h1>Mens</h1>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>

        </Grid>
        <Grid item xs={3}>

        </Grid>
      </React.Fragment>
    );
  }

  function FormRow3() {
    return (
      <React.Fragment>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow1 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow2 />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow3 />
        </Grid>
      </Grid>
    </div>
  );
}
