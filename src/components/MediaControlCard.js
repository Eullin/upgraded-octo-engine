import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Link } from "gatsby"

const styles = theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 170,
    height: 170,
  },
})

class MediaControlCard extends React.Component {
  render() {
    const { classes, allPrismicAutosUsados } = this.props
    return (
      <div>
        {allPrismicAutosUsados.map(auto => {
          return (
            <Link to={`/${auto.node.uid}`} key={auto.node.uid}>
              <Card className={classes.card}>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography>
                      Modelo:
                      {auto.node.data.modelo_del_auto.text}
                    </Typography>
                    <Typography>
                      Millas:
                      {auto.node.data.millas.text}
                    </Typography>
                  </CardContent>
                </div>
                <CardMedia
                  className={classes.cover}
                  image={auto.node.data.imagen_principal.url}
                />
              </Card>
            </Link>
          )
        })}
      </div>
    )
  }
}

/* function MediaControlCard(props) {
  const { classes, allPrismicAutosUsados } = props
  console.log("this is", allPrismicAutosUsados)
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Modelo
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Millas
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={""}
        title="Live from space album cover"
      />
    </Card>
  )
}
*/

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MediaControlCard)
