import React from "react"
import PropTypes from "prop-types"
import {
  withStyles,
  MuiThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit,
  },
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d85c72",
    },
  },
  typography: {
    useNextVariants: true,
  },
})

function Button1(props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      <MuiThemeProvider theme={theme}>
        <Button variant="contained" color="primary" className={classes.margin}>
          Contáctanos
        </Button>
      </MuiThemeProvider>
    </div>
  )
}

Button1.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Button1)
