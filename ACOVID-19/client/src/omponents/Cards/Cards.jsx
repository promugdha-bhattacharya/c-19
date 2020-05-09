import React from "react";
import {
  Card,
  Cardcontent,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading.....";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              INFECTED
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.5}
                separater=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on-{new Date(lastUpdate).toDateString()}
            </Typography>
            <br />
            <Typography variant="h5">COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              RECOVERED
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separater=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on-{new Date(lastUpdate).toDateString()}
            </Typography>
            <br />
            <Typography variant="h5">COVID-19</Typography>
          </CardContent>
        </Grid>

        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              DEATHS
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separater=","
              />
            </Typography>
            <Typography color="textSecondary">
              Updated on-{new Date(lastUpdate).toDateString()}
            </Typography>
            <br />
            <Typography variant="h5">COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
