import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerTitle: {
    margin: "50px 0",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export const AppTitle = () => {
  const classes = useStyles();

  return (
    <Typography variant="h4" component="h1" className={classes.headerTitle}>
      Tracker
    </Typography>
  );
};
