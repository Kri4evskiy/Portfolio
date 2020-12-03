import { Container, Typography } from "@material-ui/core";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "../../components/Button/Button";

const useStyles = makeStyles({
  headerTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
});

export const Tracker = () => {
  const classes = useStyles();
  const now = moment().format();
  console.log(now);
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" className={classes.headerTitle}>
        {" "}
        Tracker{" "}
      </Typography>
      <Button>hello</Button>
    </Container>
  );
};
