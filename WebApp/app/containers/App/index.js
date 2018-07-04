/*
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import HomePage from 'containers/HomePage/index';
import NotFoundPage from 'containers/NotFoundPage/index';
import Books from "containers/Books/index";

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    margin: "auto",
    align: "center",
    textAlign:"center"
  }
};

function App(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.appBar}>
            Books
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route exact path="/" component={HomePage} />      
        <Route exact path="/books" component={Books}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default withStyles(styles)(App);