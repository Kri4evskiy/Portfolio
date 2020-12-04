import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    inputTracker: {
      margin: "0 auto",
      width: "98%",
      "& .MuiInputBase-formControl": {
        borderRadius: "50px",
      },
      "& .Mui-focused": {
        color: "red",
      },
    },
    buttonStart: {
      position: "absolute",
      right: theme.spacing(1),
      height: "50px",
      backgroundColor: "rgba(79, 250, 176, 1)",

      "&:hover": {
        backgroundColor: "rgba(79, 250, 176, .3)",
      },
    },
    playIcon: {
      fontSize: "30px",
      color: "#fff",
    },
  })
);

export const StartPanel = () => {
  const classes = useStyles();

  const buttonHandler = () => {
    return console.log("Button click");
  };
  return (
    <div className={classes.root}>
      <TextField
        className={classes.inputTracker}
        label="Enter tracker name"
        variant="outlined"
      />

      <IconButton
        onClick={buttonHandler}
        aria-label="start"
        color="primary"
        className={classes.buttonStart}
      >
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
    </div>
  );
};
