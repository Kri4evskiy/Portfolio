import { makeStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  removeTracker,
  playPauseToggle,
  intervalTicking,
  addIntervalToRefs,
  clearIntervalRef,
} from "../../redux/actions/trackerActions";

import { useLocalStorage } from "react-use";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      boxShadow: "none",
    },
    table: {
      margin: "0 auto",
      marginTop: 12,
      maxWidth: 540,
      borderTop: "1px solid rgba(224, 224, 224, 1)",
    },
    button: {
      right: theme.spacing(1),
      height: "30px",
      width: "30px",

      "&:hover": {
        backgroundColor: "rgba(79, 250, 176, .1)",
      },
    },
    icon: {
      fontSize: "28px",
    },
    playPauseIcon: {
      color: "black",
    },
    removeIcon: {
      color: "orange",
    },
    tableCellButton: {
      width: "32px",
      padding: "22px 4px",
    },
  })
);

export const TrackerTable = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { trackers } = useSelector(({ tracker }) => tracker);
  const [checkLocalStorage, setToLocalStorage] = useLocalStorage(
    "my-key",
    "foo"
  );

  useEffect(() => {
    trackers.forEach((tracker) => {
      if (tracker.isOn) {
        const interval = setInterval(() => {
          dispatch(intervalTicking(tracker));
        }, 1000);
        dispatch(addIntervalToRefs(interval, tracker.id));
      }
    });
    setToLocalStorage("123");

    console.log(checkLocalStorage);
  }, []);

  // function useLocalState(localItem) {
  //   const [loc, setState] = useState(localStorage.getItem(localItem))
  //   function setLoc(newItem) {
  //     localStorage.setItem(newItem)
  //   }

  //   return [loc, setLoc]
  // }

  // const [value, setValue] = useLocalState('fruit')
  // console.log(value, setValue);
  const removeHandler = (index) => {
    const id = trackers[index].id;
    dispatch(removeTracker(id));
    dispatch(clearIntervalRef(id));
  };

  const playPauseToggleHandler = (index) => {
    const id = trackers[index].id;

    if (!trackers[index].isOn) {
      const interval = setInterval(() => {
        dispatch(intervalTicking(trackers[index]));
      }, 1000);
      dispatch(addIntervalToRefs(interval, id));
      dispatch(playPauseToggle(id));
    } else {
      dispatch(playPauseToggle(id));
      dispatch(clearIntervalRef(id));
    }
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableBody>
          {trackers &&
            trackers.map((tracker, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {tracker.title}
                </TableCell>

                <TableCell align="right">
                  {tracker.h}:{tracker.m}:{tracker.s}
                </TableCell>

                <TableCell align="right" className={classes.tableCellButton}>
                  <IconButton
                    onClick={() => playPauseToggleHandler(index)}
                    aria-label="continious"
                    color="primary"
                    className={`${classes.button}`}
                  >
                    {trackers[index].isOn ? (
                      <PauseCircleOutlineOutlinedIcon
                        className={`${classes.icon} ${classes.playPauseIcon}`}
                      />
                    ) : (
                      <PlayCircleOutlineOutlinedIcon
                        className={`${classes.icon} ${classes.playPauseIcon}`}
                      />
                    )}
                  </IconButton>
                </TableCell>

                <TableCell align="right" className={classes.tableCellButton}>
                  <IconButton
                    id={index}
                    onClick={() => removeHandler(index)}
                    aria-label="delete"
                    color="primary"
                    className={`${classes.button}`}
                  >
                    <RemoveCircleOutlineOutlinedIcon
                      className={`${classes.icon} ${classes.removeIcon}`}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
