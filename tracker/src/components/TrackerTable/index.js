import { makeStyles, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import PauseCircleOutlineOutlinedIcon from "@material-ui/icons/PauseCircleOutlineOutlined";
import { IconButton } from "@material-ui/core";

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
        backgroundColor: "rgba(79, 250, 176, .3)",
      },
    },
    icon: {
      fontSize: "28px",
    },
    pauseIcon: {
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

function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("No name tracker #1", "00:15:43"),
  createData("No name tracker #2", "01:43:01"),
  createData("No name tracker #3", "38:26:29"),
];

export const TrackerTable = () => {
  const classes = useStyles();

  const buttonHandler = () => {
    return console.log("Button click");
  };

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} size="medium" aria-label="a dense table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>

              <TableCell align="right" className={classes.tableCellButton}>
                <IconButton
                  onClick={buttonHandler}
                  aria-label="continious"
                  color="primary"
                  className={`${classes.button}`}
                >
                  <PauseCircleOutlineOutlinedIcon
                    className={`${classes.icon} ${classes.pauseIcon}`}
                  />
                </IconButton>
              </TableCell>

              <TableCell align="right" className={classes.tableCellButton}>
                <IconButton
                  onClick={buttonHandler}
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
