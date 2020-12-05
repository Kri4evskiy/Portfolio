import moment from "moment";
import { Container } from "@material-ui/core";
import { StartPanel, TrackerTable, AppTitle } from "../../components";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { testAction } from "../../redux/actions/trackerActions";

export const Tracker = () => {
  const dispatch = useDispatch();
  const now = moment().format();
  console.log(now);
  const trakers = useSelector((state) => state);
  useEffect(() => {
    dispatch(testAction());

    console.log(trakers);
  }, []);

  return (
    <Container maxWidth="sm">
      <AppTitle />
      <StartPanel />
      <TrackerTable />
    </Container>
  );
};
