import { useDispatch, useSelector } from "react-redux";
import {
  addNewTracker,
  clearInput,
  onChangeTitle,
  increaseIdValue,
  intervalTicking,
  addIntervalToRefs,
} from "../../redux/actions/trackerActions";

import TextField from "@material-ui/core/TextField";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import moment from "moment";

import { _createNewTrackerObject } from "../../redux/reducers/utils";
import { oneSecInterval } from "../functions";

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
  const dispatch = useDispatch();

  const title = useSelector(({ tracker }) => tracker.title);
  const id = useSelector(({ tracker }) => tracker.id);

  const startHandler = () => {
    const newTitle = title;

    if (newTitle !== "") {
      dispatch(increaseIdValue());
      const newTrackerObj = _createNewTrackerObject(id, newTitle);

      const interval = oneSecInterval(dispatch, intervalTicking, newTrackerObj);

      dispatch(addIntervalToRefs(interval, id));
      dispatch(addNewTracker(newTrackerObj));
      dispatch(clearInput());
    } else {
      const now = moment().format("[Трекер] MMMM Do YYYY");
      dispatch(increaseIdValue());
      const newTrackerObj = _createNewTrackerObject(id, now);

      const interval = oneSecInterval(dispatch, intervalTicking, newTrackerObj);

      dispatch(addIntervalToRefs(interval, id));
      dispatch(addNewTracker(newTrackerObj));
    }
  };

  const onChangeHandler = (event) => {
    dispatch(onChangeTitle(event.target.value));
  };

  const keyDownHandler = (event) => {
    const newTitle = title;
    if (event.code === "Enter") {
      if (newTitle !== "") {
        dispatch(increaseIdValue());
        const newTrackerObj = _createNewTrackerObject(id, newTitle);

        const interval = oneSecInterval(
          dispatch,
          intervalTicking,
          newTrackerObj
        );

        dispatch(addIntervalToRefs(interval, id));
        dispatch(addNewTracker(newTrackerObj));
        dispatch(clearInput());
      } else {
        const now = moment().format("[Трекер] MMMM Do YYYY");
        dispatch(increaseIdValue());
        const newTrackerObj = _createNewTrackerObject(id, now);

        const interval = oneSecInterval(
          dispatch,
          intervalTicking,
          newTrackerObj
        );

        dispatch(addIntervalToRefs(interval, id));
        dispatch(addNewTracker(newTrackerObj));
      }
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        onKeyDown={keyDownHandler}
        onChange={onChangeHandler}
        className={classes.inputTracker}
        label="Enter tracker name"
        variant="outlined"
        value={title}
      />

      <IconButton
        onClick={startHandler}
        aria-label="start"
        color="primary"
        className={classes.buttonStart}
      >
        <PlayArrowIcon className={classes.playIcon} />
      </IconButton>
    </div>
  );
};
