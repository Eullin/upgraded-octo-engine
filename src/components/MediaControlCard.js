import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import { Link } from "gatsby"

const styles = theme => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem 0",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1",
  },
  cover: {
    width: 200,
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
                    <h4>
                      <b>Modelo:</b>
                    </h4>
                    {auto.node.data.modelo_del_auto.text}
                    <h4>
                      <b>Millas:</b>
                    </h4>
                    {auto.node.data.millas.text}
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

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(MediaControlCard)
