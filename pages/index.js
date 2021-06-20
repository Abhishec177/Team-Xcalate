import styles from '../styles/Index.module.css';
import Layout from '../components/Layout';
import { Image, Grid, Button } from 'semantic-ui-react';
import "semantic-ui-css/semantic.min.css";



export default function Home() {

  var colors = {
    primary: "#00D4D1",
    secondary: "#FF0040",
    text: "#f1f3f4",
  };

  return (
    <div className={styles.landingScreen} style={{ margin: 0 }}>
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column className={styles.content}>
            <h1>WE ARE </h1>
            <h1 style={{ color: colors.primary }}>TEAM XCALATE </h1>
            <h3 style={{ color: colors.text }}>
              We work on solution to bring stock market for all
            </h3>
            <Button
              style={{
                backgroundColor: colors.primary,
                marginTop: "50px",
                color: "#000",
              }}
              className="ui primary button"
            >
              Sign In
            </Button>
            <Button
              style={{
                backgroundColor: colors.secondary,
                marginTop: "50px",
                marginLeft: "20px"
              }}
              className="ui primary button"
            >
              Sign Up
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
